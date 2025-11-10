import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomCTA from "@/components/BottomCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Borja - Holistic Health & Fitness Coach | San Diego Personal Trainer",
  description: "Transform your body and elevate your life with expert personal training in San Diego. Specializing in weight loss, nutrition counseling, and holistic fitness coaching. In-person and online training available.",
  keywords: "personal trainer San Diego, fitness coach, weight loss, nutrition counseling, online coaching, group training, holistic health, Christian Borja",
  authors: [{ name: "Christian Borja" }],
  openGraph: {
    title: "Christian Borja - Holistic Health & Fitness Coach",
    description: "Transform your body and elevate your life with expert personal training in San Diego.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BottomCTA />
      </body>
    </html>
  );
}

