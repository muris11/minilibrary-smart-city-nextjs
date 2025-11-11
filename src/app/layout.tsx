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
  title: "Mini Library Smart City",
  description:
    "Explore Smart City initiatives in Lampung with interactive learning modules, quizzes, and comprehensive information about sustainable urban development.",
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
  ],
  authors: [{ name: "Smart City Lampung Team" }],
  icons: {
    icon: "/images/lg.png",
  },
  openGraph: {
    title: "Mini Library Smart City",
    description:
      "Explore Smart City initiatives in Lampung with interactive learning modules and quizzes",
    siteName: "Mini Library Smart City",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mini Library Smart City",
    description:
      "Explore Smart City initiatives in Lampung with interactive learning modules and quizzes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
