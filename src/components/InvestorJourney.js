"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HelpCircle, Layers, Map, FileText, CheckCircle2, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Consultation",
    icon: <HelpCircle size={20} />,
    desc: "1-on-1 portfolio review to align with your capital allocation goals."
  },
  {
    num: "02",
    title: "Property Selection",
    icon: <Layers size={20} />,
    desc: "Review coordinates, zoning clearance maps, and micro-market analysis."
  },
  {
    num: "03",
    title: "Site Visit",
    icon: <Map size={20} />,
    desc: "Guided site tour (physical or virtual drone walkthrough)."
  },
  {
    num: "04",
    title: "Documentation",
    icon: <FileText size={20} />,
    desc: "Title search registry check, clear verification, and legal drafts."
  },
  {
    num: "05",
    title: "Investment",
    icon: <CheckCircle2 size={20} />,
    desc: "Secure registry, complete payments, and receive clear title deeds."
  },
  {
    num: "06",
    title: "Growth",
    icon: <TrendingUp size={20} />,
    desc: "Hold and monitor land appreciation as regional nodes complete."
  }
];

export default function InvestorJourney() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    
    const ctx = gsap.context(() => {
      // Animate progress line width on scroll
      gsap.fromTo(
        ".roadmap-line-fill",
        { width: "0%" },
        {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 1
          }
        }
      );
      
      // Stagger animate individual nodes
      gsap.fromTo(
        ".roadmap-node",
        { opacity: 0.3, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            end: "bottom 60%",
            scrub: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="investor-journey" className="section-padding" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "80px", maxWidth: "800px", margin: "0 auto 80px auto" }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "12px" }}>
            The Roadmap
          </span>
          <h2 style={{ marginBottom: "20px" }}>Your Investment Journey</h2>
          <p>We've structured a frictionless acquisition model designed to verify titles, examine coordinates, and protect your capital investment.</p>
        </div>

        {/* Horizontal Timeline Container */}
        <div className="roadmap-container" style={{ position: "relative", padding: "40px 0" }}>
          
          {/* Background progress lines */}
          <div style={{ position: "absolute", top: "80px", left: "0", right: "0", height: "4px", backgroundColor: "var(--border-color)", zIndex: 1, borderRadius: "2px" }} />
          <div className="roadmap-line-fill" style={{ position: "absolute", top: "80px", left: "0", height: "4px", backgroundColor: "var(--accent-blue)", zIndex: 2, borderRadius: "2px", width: "0%" }} />

          {/* Steps Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "24px", position: "relative", zIndex: 3 }}>
            {steps.map((step, idx) => (
              <div key={idx} className="roadmap-node" style={{ textAlign: "center" }}>
                {/* Node circle */}
                <div 
                  style={{ 
                    width: "80px", 
                    height: "80px", 
                    borderRadius: "50%", 
                    backgroundColor: "var(--bg-surface)", 
                    border: "3px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px auto",
                    color: "var(--text-primary)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.02)",
                    position: "relative",
                    transition: "border-color 0.4s ease"
                  }}
                >
                  {step.icon}
                  <span 
                    style={{ 
                      position: "absolute", 
                      top: "-8px", 
                      right: "-8px", 
                      backgroundColor: "var(--accent-blue)", 
                      color: "#ffffff", 
                      fontSize: "0.7rem", 
                      fontWeight: "700",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.15rem", marginBottom: "8px", fontWeight: "600" }}>{step.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", lineHeight: "1.5", maxWidth: "180px", margin: "0 auto" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
