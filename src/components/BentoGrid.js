"use client";
import Image from "next/image";
import { Plane, Compass, Award, Cpu, Briefcase, TrendingUp } from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="why-dholera" className="section-padding" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <div style={{ marginBottom: "64px", maxWidth: "800px" }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "12px" }}>
            Invest Planning
          </span>
          <h2 style={{ marginBottom: "20px" }}>Why Dholera Matters</h2>
          <p>Dholera represents a master-planned shift in Indian urbanization. Explore the six foundational pillars driving institutional capital inflow.</p>
        </div>

        <div className="bento-grid">
          {/* Item 1: Airport Development (Wide, spans 2 columns) */}
          <div className="bento-item" style={{ gridColumn: "span 2", position: "relative", overflow: "hidden", color: "#ffffff", border: "none" }}>
            <Image
              src="/assets/infrastructure-2.jpg"
              alt="Dholera Cargo Airport Runway"
              fill
              sizes="(max-width: 991px) 100vw, 66vw"
              style={{ objectFit: "cover", zIndex: 1, opacity: 0.65 }}
            />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 100%)", zIndex: 2 }} />
            
            <div style={{ position: "relative", zIndex: 3, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ backgroundColor: "rgba(255, 255, 255, 0.15)", width: "fit-content", padding: "10px", borderRadius: "10px", backdropFilter: "blur(4px)" }}>
                <Plane size={24} style={{ color: "var(--accent-soft-blue)" }} />
              </div>
              <div>
                <h3 style={{ color: "#ffffff", fontSize: "1.5rem", marginBottom: "8px", fontWeight: "600" }}>Airport Development</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.95rem" }}>
                  A massive greenfield international cargo and passenger airport spanning 1,426 hectares, connecting Dholera’s industrial zone to global markets.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2: Industrial Corridor */}
          <div className="bento-item">
            <div style={{ backgroundColor: "var(--bg-secondary)", width: "fit-content", padding: "10px", borderRadius: "10px" }}>
              <Compass size={24} style={{ color: "var(--accent-blue)" }} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "8px", fontWeight: "600" }}>DMIC Industrial Corridor</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                Positioned as the leading investment node of the Delhi-Mumbai Industrial Corridor (DMIC).
              </p>
            </div>
          </div>

          {/* Item 3: Government Backing */}
          <div className="bento-item">
            <div style={{ backgroundColor: "var(--bg-secondary)", width: "fit-content", padding: "10px", borderRadius: "10px" }}>
              <Award size={24} style={{ color: "var(--accent-blue)" }} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "8px", fontWeight: "600" }}>Government Backed</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                Direct regulatory support and state-backed master zoning for absolute security.
              </p>
            </div>
          </div>

          {/* Item 4: Smart Infrastructure (Tall, spans 2 rows) */}
          <div className="bento-item tall" style={{ position: "relative", overflow: "hidden", border: "none" }}>
            <Image
              src="/assets/infrastructure-1.jpg"
              alt="Dholera Smart Grid Control Room"
              fill
              sizes="(max-width: 991px) 100vw, 33vw"
              style={{ objectFit: "cover", zIndex: 1, opacity: 0.15 }}
            />
            <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ backgroundColor: "var(--bg-secondary)", width: "fit-content", padding: "10px", borderRadius: "10px" }}>
                <Cpu size={24} style={{ color: "var(--accent-blue)" }} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "12px", fontWeight: "600" }}>Smart Infrastructure</h3>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Features a subterranean utility duct corridor carrying electricity, gas, sewage, water pipelines, and fiber optic cabling. No overhead wires, no dug-up streets.
                </p>
              </div>
            </div>
          </div>

          {/* Item 5: Economic Growth */}
          <div className="bento-item">
            <div style={{ backgroundColor: "var(--bg-secondary)", width: "fit-content", padding: "10px", borderRadius: "10px" }}>
              <Briefcase size={24} style={{ color: "var(--accent-blue)" }} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "8px", fontWeight: "600" }}>Economic Growth</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                Supported by upcoming semiconductor fabrication hubs creating thousands of high-income jobs.
              </p>
            </div>
          </div>

          {/* Item 6: Future Appreciation */}
          <div className="bento-item">
            <div style={{ backgroundColor: "var(--bg-secondary)", width: "fit-content", padding: "10px", borderRadius: "10px" }}>
              <TrendingUp size={24} style={{ color: "var(--accent-blue)" }} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "8px", fontWeight: "600" }}>Future Appreciation</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                Early-stage investment ensures strong double-digit growth trajectory as nodes complete.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
