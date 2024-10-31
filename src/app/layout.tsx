import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GitHub Aternative Client",
  description: "An alternative client for browsing GitHub issues",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        <div className="flex h-screen overflow-hidden">
          <aside className="w-64 bg-gray-800 text-white hidden sm:flex flex-col p-6">
            <h1 className="text-2xl font-semibold mb-4">Menu</h1>
            <nav className="space-y-2 text-xl">
              <Link
                href="/"
                className="block py-2 px-3 rounded hover:bg-gray-700"
              >
                Main
              </Link>
              <Link
                href="/protected"
                className="block py-2 px-3 rounded hover:bg-gray-700"
              >
                Issues
              </Link>
              <Link
                href="/protected/discussions"
                className="block py-2 px-3 rounded hover:bg-gray-700"
              >
                Discussions
              </Link>
            </nav>
          </aside>

          <main className="flex-1 p-6 overflow-auto">
            <header className="flex items-center justify-left mb-8">
              <h2 className="text-3xl font-bold">GitHub Aternative Client</h2>
            </header>

            <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
