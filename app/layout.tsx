import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { MotionProvider } from "@/components/ui/MotionProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Prayer Temple",
    template: "%s · The Prayer Temple",
  },
  description:
    "The Prayer Temple is a house of prayer for every nation, led by Prophetess Abena Hackman. Sound teaching, fervent prayer, and authentic community.",
};

export const viewport: Viewport = {
  themeColor: "#0e3b2a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${poppins.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CustomCursor />
        </MotionProvider>
      </body>
    </html>
  );
}
