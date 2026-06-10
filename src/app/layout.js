import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

import ParticleWaves from "@/components/ui/demo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Future Nest Infra | Dholera Smart City Investment Platform",
  description: "Invest in Dholera SIR, India's next great smart city. Premium residential plots, industrial land, and strategic land banking opportunities with Future Nest Infra.",
  keywords: ["Dholera SIR", "Dholera Smart City", "Future Nest Infra", "Invest in India", "Real Estate India", "Greenfield City"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Fixed background particle wave canvas */}
        <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: -1, pointerEvents: "none" }}>
          <ParticleWaves showControls={false} />
        </div>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
