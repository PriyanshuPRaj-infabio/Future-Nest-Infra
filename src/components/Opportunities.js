"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const opportunitiesData = [
  {
    id: "residential",
    title: "Residential Investments",
    tagline: "Sustainable Smart Neighborhoods",
    description: "Acquire residential plots inside high-density residential zones, master-planned alongside green spaces, state-of-the-art schools, modern clinics, and community retail centers.",
    ctaText: "Explore Residential Plots",
    link: "#calculator",
    image: "/assets/dholera projects-3.jpg"
  },
  {
    id: "commercial",
    title: "Commercial Opportunities",
    tagline: "Corporate & Mixed-Use Land",
    description: "Prime land parcels designated for corporate offices, retail developments, premium showrooms, commercial complexes, and luxury hotels near major roads and metro nodes.",
    ctaText: "Invest in Commercial Zones",
    link: "#calculator",
    image: "/assets/dholera projects.jpg"
  },
  {
    id: "landbanking",
    title: "Strategic Land Banking",
    tagline: "Institutional Wealth Preservation",
    description: "High-acreage strategic parcels ideal for long-term capital preservation, industrial warehousing, logistics operations, and private developer layouts.",
    ctaText: "Request Land Banking Dossier",
    link: "#calculator",
    image: "/assets/dholera-sir-project.webp"
  }
];

export default function Opportunities() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="investment-opportunities" className="section-padding" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <div style={{ marginBottom: "64px", maxWidth: "800px" }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "12px" }}>
            Asset Classes
          </span>
          <h2 style={{ marginBottom: "20px" }}>Where to Allocate Capital</h2>
          <p>Choose from three highly structured investment classifications tailored to meet diverse corporate, commercial, and residential growth needs.</p>
        </div>

        <div className="grid-12" style={{ alignItems: "center" }}>
          {/* Left: Dynamic Image Showcase */}
          <div className="col-6">
            <div style={{ position: "relative", height: "500px", width: "100%", borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border-color)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              {opportunitiesData.map((item, index) => (
                <div
                  key={`img-tab-${item.id}`}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: activeTab === index ? 1 : 0,
                    transform: activeTab === index ? "scale(1)" : "scale(1.05)",
                    transition: "opacity 0.6s ease, transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: activeTab === index ? 2 : 1
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 991px) 100vw, 45vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to top, rgba(17,17,17,0.3) 0%, rgba(0,0,0,0) 50%)" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dynamic Accordions */}
          <div className="col-6">
            <div className="accordion-wrapper">
              {opportunitiesData.map((item, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={item.id}
                    className={`accordion-item ${isActive ? "active" : ""}`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="accordion-header" style={{ userSelect: "none" }}>
                      <span style={{ fontWeight: "600" }}>{item.title}</span>
                      <ChevronDown
                        size={20}
                        style={{
                          transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.4s ease",
                          color: isActive ? "var(--accent-blue)" : "var(--text-secondary)"
                        }}
                      />
                    </div>
                    
                    <div className="accordion-content">
                      <div 
                        style={{ 
                          fontSize: "0.85rem", 
                          textTransform: "uppercase", 
                          letterSpacing: "0.05em", 
                          color: "var(--accent-blue)", 
                          fontWeight: "600",
                          marginBottom: "12px" 
                        }}
                      >
                        {item.tagline}
                      </div>
                      <p style={{ marginBottom: "24px", fontSize: "0.95rem", lineHeight: "1.6" }}>
                        {item.description}
                      </p>
                      <a href={item.link} className="btn btn-outline" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>
                        {item.ctaText} <ArrowRight size={14} style={{ marginLeft: "4px" }} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
