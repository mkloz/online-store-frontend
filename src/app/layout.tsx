import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollTop from "../components/custom/ScrollTop";

export const metadata: Metadata = {
  title: "CityWheels",
  description: "CityWheels is an online store for vehicles.",
};

export default function RootLayout({
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
        <div className="flex grow">{children}</div>
        <Footer />
        <ScrollTop />
      </body>
    </html>
  );
}
