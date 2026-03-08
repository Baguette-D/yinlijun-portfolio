import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created by Xiaoqiang for Yin Lijun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <nav className="bg-white shadow-sm border-b sticky top-0 z-10">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">Portfolio</Link>
            <div className="space-x-6">
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
              <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
              <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
            </div>
          </div>
        </nav>
        <main className="max-w-5xl mx-auto px-4 py-12 min-h-[calc(100vh-140px)]">
          {children}
        </main>
        <footer className="bg-white border-t py-8 mt-12 text-center text-gray-500">
          <p>© 2026 Portfolio. Built with Next.js & Tailwind CSS.</p>
        </footer>
      </body>
    </html>
  );
}
