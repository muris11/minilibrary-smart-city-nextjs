"use client";

import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

interface EarthGlobeProps {
  width?: number;
  height?: number;
  showPillars?: boolean;
  onPillarClick?: (pillar: string) => void;
  className?: string;
}

interface LocationData {
  id: string;
  lat: number;
  lng: number;
  label: string;
  color: string;
}

const pillarLocations: LocationData[] = [
  {
    id: "governance",
    lat: 10,
    lng: 0,
    label: "Smart Governance",
    color: "#3b82f6",
  },
  { id: "economy", lat: 35, lng: 45, label: "Smart Economy", color: "#8b5cf6" },
  { id: "living", lat: -15, lng: 30, label: "Smart Living", color: "#10b981" },
  {
    id: "mobility",
    lat: 50,
    lng: -100,
    label: "Smart Mobility",
    color: "#f59e0b",
  },
  {
    id: "environment",
    lat: -30,
    lng: -60,
    label: "Smart Environment",
    color: "#22c55e",
  },
  { id: "people", lat: 25, lng: 80, label: "Smart People", color: "#06b6d4" },
];

const lampungLocation = {
  lat: -5.45,
  lng: 105.25,
  label: "Lampung",
  color: "#ef4444",
};

export default function EarthGlobe({
  width = 600,
  height = 600,
  showPillars = true,
  onPillarClick,
  className = "",
}: EarthGlobeProps) {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [hoveredPillar, setHoveredPillar] = useState<string | null>(null);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 2.5 });
    }
  }, []);

  const handlePillarClick = (pillar: object) => {
    const data = pillar as LocationData;
    if (onPillarClick && data.id) {
      onPillarClick(data.id);
    }
  };

  const handlePillarHover = (pillar: object | null) => {
    const data = pillar as LocationData | null;
    setHoveredPillar(data ? data.id : null);
  };

  const arcsData = showPillars
    ? pillarLocations.map((pillar) => ({
        startLat: lampungLocation.lat,
        startLng: lampungLocation.lng,
        endLat: pillar.lat,
        endLng: pillar.lng,
        color: pillar.color,
      }))
    : [];

  return (
    <div className={`relative ${className}`}>
      <Globe
        ref={globeEl}
        width={width}
        height={height}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        // Points for pillars
        pointsData={
          showPillars
            ? [...pillarLocations, lampungLocation]
            : [lampungLocation]
        }
        pointAltitude={0.01}
        pointColor="color"
        pointRadius={(d: object) =>
          (d as LocationData).id === "lampung" ? 0.8 : 0.5
        }
        pointLabel={(d: object) => `
          <div class="bg-slate-800/90 p-2 rounded text-white text-sm">
            <div class="font-bold">${(d as LocationData).label}</div>
            ${
              (d as LocationData).id !== "lampung"
                ? '<div class="text-cyan-400 text-xs">Smart City Pillar</div>'
                : '<div class="text-red-400 text-xs">Implementation Location</div>'
            }
          </div>
        `}
        onPointClick={handlePillarClick}
        onPointHover={handlePillarHover}
        // Arcs connecting Lampung to pillars
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={1500}
        arcStroke={0.5}
        arcAltitudeAutoScale={0.3}
        // Atmosphere
        atmosphereColor="#00ffff"
        atmosphereAltitude={0.15}
        // Lighting
        animateIn={true}
      />

      {/* Legend */}
      {showPillars && (
        <div className="absolute bottom-4 left-4 bg-slate-800/90 backdrop-blur-md p-4 rounded-lg border border-cyan-500/20 max-w-xs">
          <h4 className="text-cyan-400 font-semibold mb-3 text-sm">
            Smart City Pillars
          </h4>
          <div className="space-y-2">
            {pillarLocations.map((pillar) => (
              <div
                key={pillar.id}
                className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
                onClick={() => onPillarClick?.(pillar.id)}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all ${
                    hoveredPillar === pillar.id ? "ring-2 ring-white" : ""
                  }`}
                  style={{ backgroundColor: pillar.color }}
                ></div>
                <span>{pillar.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 text-xs text-gray-300 pt-2 border-t border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span>Lampung Location</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
