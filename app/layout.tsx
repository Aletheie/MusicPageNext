import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MusicPage",
  description: "MusicPage for kybersoutěž",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="grid grid-cols-12 w-full h-screen bg-[#ededed]">
          <Navbar />
          {children}
        </section>
      </body>
    </html>
  );
}
