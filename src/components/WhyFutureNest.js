"use client";
import { Target, FileText, Compass, TrendingUp, Users } from "lucide-react";

const trustReasons = [
  {
    icon: <Target size={32} />,
    title: "Strategic Property Selection",
    description: "We source and verify high-value land parcels positioned directly in major developmental paths inside Dholera's active zones."
  },
  {
    icon: <FileText size={32} />,
    title: "Transparent Investment Process",
    description: "Clear titles, online tracking portal, and simplified legal documentation ensure absolute transaction transparency."
  },
  {
    icon: <Compass size={32} />,
    title: "Market Expertise",
    description: "Our dedicated regional analysts supply micro-market reports, historic pricing charts, and developmental projections."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Future Growth Opportunities",
    description: "Plots aligned with incoming infrastructure developments like airport highways, logistics nodes, and heavy industrials."
  },
  {
    icon: <Users size={32} />,
    title: "Investor-Centric Approach",
    description: "Tailored portfolio consulting designed to maximize long-term yields based on individual wealth allocation objectives."
  }
];

export default function WhyFutureNest() {
  return (
    <section id="why-trust" className="section-padding" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <div className="grid-12">
          {/* Left: Editorial Heading */}
          <div className="col-5" style={{ position: "sticky", top: "120px", height: "fit-content" }}>
            <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "16px" }}>
              Our Values
            </span>
            <h2 style={{ marginBottom: "24px", lineHeight: "1.15" }}>Why Investors Trust Future Nest Infra</h2>
            <p style={{ maxWidth: "400px", color: "var(--text-secondary)" }}>
              We don't sell general plots; we build wealth pathways. Our framework delivers risk-mitigated access to India's most significant smart city project.
            </p>
          </div>

          {/* Right: Feature Cards Stack */}
          <div className="col-7" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {trustReasons.map((reason, index) => (
              <div 
                key={index} 
                className="feature-card" 
                style={{ 
                  flexDirection: "row", 
                  gap: "28px", 
                  alignItems: "flex-start",
                  padding: "32px"
                }}
              >
                <div 
                  style={{ 
                    backgroundColor: "var(--accent-soft-blue)", 
                    color: "var(--accent-blue)", 
                    padding: "16px", 
                    borderRadius: "12px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  {reason.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.35rem", marginBottom: "8px", fontWeight: "600" }}>{reason.title}</h3>
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
