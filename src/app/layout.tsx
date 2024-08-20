import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/layout/Footer";
import ScrollTop from "../components/custom/ScrollTop";
import Navbar from "../components/layout/navbar/Navbar";
import { Toaster } from "../components/ui/sonner";

export const metadata: Metadata = {
  title: "CityWheels",
  description: "CityWheels is an online store for vehicles.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className="flex min-h-screen flex-col"
      >
        <Navbar />
        <div className="flex w-full grow self-stretch">{children}</div>
        <Footer />
        <ScrollTop />
        <Toaster />
      </body>
    </html>
  );
}
