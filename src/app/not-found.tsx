import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Mini Library Smart City",
  description:
    "The page you are looking for could not be found. Explore our Smart City learning resources instead.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-purple-400">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
          you back to exploring Smart City initiatives in Lampung.
        </p>
        <Link
          href="/"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
