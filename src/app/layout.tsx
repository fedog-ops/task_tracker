import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { homePath, ticketsPath } from "../paths";
import { buttonVariants } from "../components/ui/button";
import Link from "next/link";
import { LucideLamp } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Tracker",
  description: "A simple task tracking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="
        support-backdrop-blur:bg-background/60
        fixed left-0 right-0 top-0 z-0
        border-b bg-background/95 backdrop-blur
        flex justify-between py-2.5 px-2.5 w-full">
          <div>
              <Link 
              href={homePath()} className={buttonVariants({ variant: "outline" })}>
                <span><LucideLamp/></span>
                <span>TaskTracker</span>
              </Link>
          </div>
          <div>
              <Link href={ticketsPath()} className={buttonVariants({ variant: "default" })}>Tickets</Link>
          </div>
        </nav>
        <main className="
            min-h-screen flex-1
            overflow-y-auto overflow-x-auto
            py-24 px-8
            bg-secondary/20
            flex flex-col
          "
         >
          {children}
          </main>
      </body>
    </html>
  );
}
