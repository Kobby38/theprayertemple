import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "The Prayer Temple",
    template: "%s · The Prayer Temple",
  },
  description:
    "The Prayer Temple is a house of prayer for every nation, led by Prophetess Abena Hackman. Sound teaching, fervent prayer, and authentic community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-cream font-sans text-navy-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
