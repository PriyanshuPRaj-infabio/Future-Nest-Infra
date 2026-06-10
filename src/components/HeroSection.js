"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    // Set up GSAP scroll animations with pinning
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=250%", // Pins for 2.5 viewports worth of scrolling
          scrub: true,
          pin: true,
          anticipatePin: 1
        }
      });

      // Scene 1 is visible at start (scroll = 0)
      
      // Transition from Scene 1 to Scene 2
      tl.to(".scene-1", { opacity: 0, scale: 0.95, duration: 1 })
        .to(".scene-2", { opacity: 1, scale: 1, duration: 1 })
        
        // Hold Scene 2 briefly
        .to({}, { duration: 0.5 })
        
        // Transition from Scene 2 to Scene 3
        .to(".scene-2", { opacity: 0, scale: 0.95, duration: 1 })
        .fromTo(".scene-3", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        
        // Hold Scene 3 briefly
        .to({}, { duration: 0.5 })
        
        // Transition from Scene 3 to Scene 4 (Full visual reveal)
        .to(".scene-3", { opacity: 0, duration: 1 })
        .fromTo(".scene-4", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      id="hero" 
      style={{ 
        height: "100vh", 
        width: "100%", 
        position: "relative", 
        overflow: "hidden",
        backgroundColor: "transparent"
      }}
    >
      {/* Background Image with Dark Overlay Fading to White */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
        <Image 
          src="/assets/banner-Dholera-SIR-A-New-Era-of-Sustainable-City-Living-in-India-1.avif" 
          alt="Dholera Smart City Landscape" 
          fill 
          priority
          style={{ objectFit: "cover" }}
        />
        <div 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 75%, rgba(255, 255, 255, 1) 100%)" 
          }} 
        />
      </div>
      {/* Scroll Indicator */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: "40px", 
          left: "50%", 
          transform: "translateX(-50%)", 
          zIndex: 12, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          color: "#ffffff", 
          opacity: 0.85,
          fontSize: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          animation: "bounce 2s infinite",
          textShadow: "0 1px 4px rgba(0,0,0,0.5)"
        }}
      >
        <span style={{ marginBottom: "8px" }}>Scroll to Explore</span>
        <ArrowDown size={14} />
        <style>{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
            40% { transform: translate(-50%, -10px); }
            60% { transform: translate(-50%, -5px); }
          }
        `}</style>
      </div>

      {/* Scene 1 Container */}
      <div 
        className="scene-1"
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          zIndex: 5, 
          color: "#ffffff", 
          textAlign: "center",
          padding: "0 24px"
        }}
      >
        <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent-orange)", fontWeight: "600", marginBottom: "20px", textShadow: "0 0 15px rgba(229, 143, 18, 0.65)" }}>
          Future Nest Infra Presents
        </span>
        <h1 style={{ color: "#ffffff", fontSize: "4.5rem", maxWidth: "900px", marginBottom: "24px", fontWeight: "700", textShadow: "0 2px 12px rgba(0, 0, 0, 0.4)" }}>
          Invest In India's Future Smart City
        </h1>
        <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.25rem", maxWidth: "600px", marginBottom: "40px", textShadow: "0 1px 6px rgba(0, 0, 0, 0.4)" }}>
          Strategic land investments backed by world-class infrastructure, high connectivity, and long-term growth.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="#dholera-story" className="btn btn-primary" style={{ boxShadow: "0 0 24px rgba(229, 143, 18, 0.45)" }}>
            Explore Dholera <ArrowRight size={18} />
          </a>
          <a href="#calculator" className="btn btn-outline" style={{ color: "#ffffff", borderColor: "#ffffff", boxShadow: "0 0 12px rgba(255, 255, 255, 0.15)" }}>
            Book Consultation
          </a>
        </div>
      </div>

      {/* Scene 2 Container */}
      <div 
        className="scene-2"
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          zIndex: 4, 
          color: "#ffffff", 
          textAlign: "center",
          opacity: 0,
          padding: "0 24px"
        }}
      >
        <h2 style={{ color: "#ffffff", fontSize: "4rem", fontWeight: "700", maxWidth: "900px", letterSpacing: "-0.03em", textShadow: "0 2px 12px rgba(0, 0, 0, 0.4)" }}>
          Most People Wait For Growth.
        </h2>
      </div>

      {/* Scene 3 Container */}
      <div 
        className="scene-3"
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center", 
          zIndex: 4, 
          color: "#ffffff", 
          textAlign: "center",
          opacity: 0,
          padding: "0 24px"
        }}
      >
        <h2 style={{ color: "#ffffff", fontSize: "4rem", fontWeight: "700", maxWidth: "900px", letterSpacing: "-0.03em", textShadow: "0 2px 12px rgba(0, 0, 0, 0.4)" }}>
          Smart Investors Move Early.
        </h2>
      </div>

      {/* Scene 4 Container (Welcome Scene) */}
      <div 
        className="scene-4"
        style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          zIndex: 4, 
          color: "#ffffff", 
          textAlign: "center",
          opacity: 0,
          padding: "0 24px"
        }}
      >
        <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--accent-orange)", fontWeight: "600", marginBottom: "20px", textShadow: "0 0 15px rgba(229, 143, 18, 0.65)" }}>
          A New Era Begins
        </span>
        <h2 style={{ color: "#ffffff", fontSize: "4.5rem", fontWeight: "700", maxWidth: "900px", marginBottom: "24px", textShadow: "0 2px 12px rgba(0, 0, 0, 0.4)" }}>
          Welcome To Dholera Smart City
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.2rem", maxWidth: "600px", marginBottom: "32px", textShadow: "0 1px 6px rgba(0, 0, 0, 0.4)" }}>
          India's first greenfield industrial smart city pre-planned for sustainable investment.
        </p>
        <a href="#why-trust" className="btn btn-outline" style={{ color: "#ffffff", borderColor: "#ffffff", boxShadow: "0 0 12px rgba(255, 255, 255, 0.15)" }}>
          Discover Why <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
