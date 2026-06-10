"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    id: "chap-01",
    num: "01",
    title: "Vision",
    subtitle: "A Smart Greenfield Metropolis",
    description: "Dholera SIR is India's first platinum-rated smart greenfield city, designed from scratch with integrated smart utilities, green zones, and master-planned layouts spanning 920 square kilometers.",
    image: "/assets/dholera projects.jpg"
  },
  {
    id: "chap-02",
    num: "02",
    title: "Connectivity",
    subtitle: "Global Logistics Corridor",
    description: "Connected by the 109 km Ahmedabad-Dholera Expressway, a dedicated greenfield international airport, and high-speed metro lines linking to the regional capital.",
    image: "/assets/banner-Dholera-SIR-A-New-Era-of-Sustainable-City-Living-in-India-1.avif"
  },
  {
    id: "chap-03",
    num: "03",
    title: "Industry",
    subtitle: "Semiconductor Manufacturing Hub",
    description: "Anchored by India's first commercial semiconductor fabrication nodes, electronic clusters, defense zones, and global industrial heavyweights.",
    image: "/assets/infrastructure-1.jpg"
  },
  {
    id: "chap-04",
    num: "04",
    title: "Demand",
    subtitle: "Job Influx & Housing Needs",
    description: "Mega manufacturing plants draw high-earning tech talent, engineering, and logistics specialists. As families relocate, premium housing demand accelerates.",
    image: "/assets/infrastructure-2.jpg"
  },
  {
    id: "chap-05",
    num: "05",
    title: "Growth",
    subtitle: "Infrastructure-Driven Yields",
    description: "With smart grids, automated waste treatment, and water piping already completed underground, land value appreciation is backed by physical infrastructure.",
    image: "/assets/dholera projects-2.jpg"
  }
];

export default function DholeraStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=400%", // Scroll depth of 4 viewports
          scrub: true,
          pin: true,
          anticipatePin: 1
        }
      });

      // Sequential chapter animations
      // Chap 1 (index 0) is active at start.
      
      // Chap 1 -> Chap 2
      tl.to(".story-img-0", { opacity: 0, duration: 1 })
        .to(".story-content-0", { opacity: 0, y: -30, duration: 1 }, "<")
        .to(".story-num-0", { opacity: 0, duration: 0.5 }, "<")
        .to(".story-img-1", { opacity: 1, duration: 1 }, "<")
        .fromTo(".story-content-1", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "<")
        .to(".story-num-1", { opacity: 1, duration: 0.5 }, "<")
        .to({}, { duration: 0.5 }) // Hold
        
      // Chap 2 -> Chap 3
        .to(".story-img-1", { opacity: 0, duration: 1 })
        .to(".story-content-1", { opacity: 0, y: -30, duration: 1 }, "<")
        .to(".story-num-1", { opacity: 0, duration: 0.5 }, "<")
        .to(".story-img-2", { opacity: 1, duration: 1 }, "<")
        .fromTo(".story-content-2", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "<")
        .to(".story-num-2", { opacity: 1, duration: 0.5 }, "<")
        .to({}, { duration: 0.5 }) // Hold
        
      // Chap 3 -> Chap 4
        .to(".story-img-2", { opacity: 0, duration: 1 })
        .to(".story-content-2", { opacity: 0, y: -30, duration: 1 }, "<")
        .to(".story-num-2", { opacity: 0, duration: 0.5 }, "<")
        .to(".story-img-3", { opacity: 1, duration: 1 }, "<")
        .fromTo(".story-content-3", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "<")
        .to(".story-num-3", { opacity: 1, duration: 0.5 }, "<")
        .to({}, { duration: 0.5 }) // Hold
        
      // Chap 4 -> Chap 5
        .to(".story-img-3", { opacity: 0, duration: 1 })
        .to(".story-content-3", { opacity: 0, y: -30, duration: 1 }, "<")
        .to(".story-num-3", { opacity: 0, duration: 0.5 }, "<")
        .to(".story-img-4", { opacity: 1, duration: 1 }, "<")
        .fromTo(".story-content-4", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "<")
        .to(".story-num-4", { opacity: 1, duration: 0.5 }, "<")
        .to({}, { duration: 0.5 }); // Hold

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="dholera-story" style={{ height: "100vh", width: "100%", overflow: "hidden", backgroundColor: "transparent" }}>
      <div className="grid-12" style={{ width: "100%", height: "100%", margin: 0, gap: 0 }}>
        
        {/* Left: sticky visual display */}
        <div className="col-6" style={{ position: "relative", height: "100%", overflow: "hidden", backgroundColor: "#000" }}>
          {chapters.map((chap, idx) => (
            <div 
              key={`story-img-${chap.id}`}
              className={`story-img-${idx}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                opacity: idx === 0 ? 1 : 0,
                zIndex: 2,
                transform: "scale(1)",
                transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <Image 
                src={chap.image} 
                alt={chap.title} 
                fill 
                sizes="50vw"
                style={{ objectFit: "cover" }}
              />
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)" }} />
            </div>
          ))}
          
          {/* Chapter selector number overlay */}
          <div 
            style={{ 
              position: "absolute", 
              bottom: "40px", 
              left: "40px", 
              zIndex: 10, 
              color: "#ffffff", 
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              display: "flex",
              alignItems: "center"
            }}
          >
            <span>Chapter &nbsp;</span>
            <div style={{ position: "relative", width: "32px", height: "36px", display: "inline-block", verticalAlign: "middle" }}>
              {chapters.map((chap, idx) => (
                <span 
                  key={`story-num-${chap.id}`}
                  className={`story-num-${idx}`}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: idx === 0 ? 1 : 0,
                    color: "var(--accent-orange)", 
                    fontWeight: "600"
                  }}
                >
                  {chap.num}
                </span>
              ))}
            </div>
            <span>&nbsp; / 05</span>
          </div>
        </div>

        {/* Right: sticky editorial details display */}
        <div 
          className="col-6" 
          style={{ 
            height: "100%", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            padding: "80px",
            backgroundColor: "rgba(255, 255, 255, 0.75)",
            borderLeft: "1px solid var(--border-color)",
            position: "relative"
          }}
        >
          <div style={{ maxWidth: "460px", width: "100%", position: "relative", height: "260px" }}>
            {chapters.map((chap, idx) => (
              <div 
                key={`story-content-${chap.id}`}
                className={`story-content-${idx}`}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  opacity: idx === 0 ? 1 : 0,
                  zIndex: 3
                }}
              >
                <span 
                  style={{ 
                    fontSize: "0.85rem", 
                    textTransform: "uppercase", 
                    letterSpacing: "0.1em", 
                    color: "var(--accent-orange)", 
                    fontWeight: "600",
                    display: "block",
                    marginBottom: "12px" 
                  }}
                >
                  The Dholera Story
                </span>
                <h2 style={{ fontSize: "2.5rem", marginBottom: "8px", fontWeight: "600" }}>{chap.title}</h2>
                <h3 style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "24px", fontWeight: "400" }}>{chap.subtitle}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: "1.7" }}>{chap.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
