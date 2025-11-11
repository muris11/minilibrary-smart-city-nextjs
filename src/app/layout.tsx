import { Toaster } from "@/component/ui/sonner";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini Library Smart City - Smart City Initiatives in Lampung",
  description:
    "Explore Smart City initiatives in Lampung with interactive learning modules, quizzes, and comprehensive information about sustainable urban development. Learn about IoT, digital transformation, and smart governance.",
  keywords: [
    "Smart City",
    "Lampung",
    "Sustainable Development",
    "IoT",
    "Urban Technology",
    "Digital Transformation",
    "Smart Governance",
    "Smart Environment",
    "Smart Mobility",
    "Indonesia Smart City",
    "Urban Planning",
    "Technology Education",
  ],
  authors: [{ name: "Smart City Lampung Team" }],
  creator: "Smart City Lampung Initiative",
  publisher: "Smart City Lampung",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://minilibrary.sikcb.my.id"),
  alternates: {
    canonical: "https://minilibrary.sikcb.my.id",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/lg.png",
    shortcut: "/images/lg.png",
    apple: "/images/lg.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Mini Library Smart City - Smart City Initiatives in Lampung",
    description:
      "Explore Smart City initiatives in Lampung with interactive learning modules, quizzes, and comprehensive information about sustainable urban development.",
    url: "https://minilibrary.sikcb.my.id",
    siteName: "Mini Library Smart City",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://minilibrary.sikcb.my.id/images/lg.png",
        width: 1200,
        height: 630,
        alt: "Mini Library Smart City - Lampung Smart City Initiative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Library Smart City - Smart City Initiatives in Lampung",
    description:
      "Explore Smart City initiatives in Lampung with interactive learning modules and quizzes",
    images: ["https://minilibrary.sikcb.my.id/images/lg.png"],
    creator: "@smartcitylampung",
  },
  verification: {
    google: "your-google-site-verification-code", // Replace with actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Mini Library Smart City",
    "description": "Explore Smart City initiatives in Lampung with interactive learning modules, quizzes, and comprehensive information about sustainable urban development.",
    "url": "https://minilibrary.sikcb.my.id",
    "logo": "https://minilibrary.sikcb.my.id/images/lg.png",
    "sameAs": [
      "https://minilibrary.sikcb.my.id"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Lampung",
      "addressCountry": "ID"
    },
    "knowsAbout": [
      "Smart City Technology",
      "Urban Planning",
      "IoT Solutions",
      "Digital Transformation",
      "Sustainable Development"
    ],
    "educationalCredentialAwarded": "Smart City Knowledge Certificate",
    "hasEducationalUse": "Learning about Smart City concepts and implementations",
    "teaches": [
      "Smart City Fundamentals",
      "IoT in Urban Environments",
      "Digital Governance",
      "Sustainable Urban Development"
    ]
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
