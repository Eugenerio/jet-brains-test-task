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
  title: "Next.js Client App",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}
      >
        <div className="flex h-screen overflow-hidden">
          <aside className="w-64 bg-gray-800 text-white hidden sm:flex flex-col p-6">
            <h1 className="text-2xl font-semibold mb-4">Client App</h1>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block py-2 px-3 rounded hover:bg-gray-700"
              >
                Home
              </Link>
              <Link
                href="/protected"
                className="block py-2 px-3 rounded hover:bg-gray-700"
              >
                Issues
              </Link>
              <a
                href="/discussions"
                className="block py-2 px-3 rounded hover:bg-gray-700"
              >
                Discussions
              </a>
            </nav>
            <button className="mt-auto py-2 px-3 bg-gray-700 rounded text-sm hover:bg-gray-600">
              Dark Mode
            </button>
          </aside>

          <main className="flex-1 p-6 overflow-auto">
            <header className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">GitHub Client</h2>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500">
                  Refresh
                </button>
              </div>
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
