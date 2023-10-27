import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import NextAuthProvider from "@/app/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MusicPage",
  description: "MusicPage for kybersoutěž",
};

export default function RootLayout({
  children,
  Session,
}: {
  children: React.ReactNode;
  Session: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={Session}>
          <section className="grid grid-cols-12 w-full h-screen bg-[#ededed]">
            <Navbar />
            {children}
          </section>
        </NextAuthProvider>
      </body>
    </html>
  );
}
