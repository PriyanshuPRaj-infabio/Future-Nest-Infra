"use client";
import { useState } from "react";
import Image from "next/image";

const locations = [
  {
    id: "airport",
    name: "Dholera International Airport",
    coordinates: { top: "25%", left: "30%" },
    description: "Upcoming greenfield international airport cargo-hub spanning 1426 hectares, driving global connectivity.",
    stats: "Completion: Phase 1 (2026)",
  },
  {
    id: "expressway",
    name: "Ahmedabad-Dholera Expressway",
    coordinates: { top: "42%", left: "48%" },
    description: "4-lane high-speed corridor reducing travel time between Ahmedabad and Dholera to under 1 hour.",
    stats: "Length: 109 KM",
  },
  {
    id: "industrial",
    name: "DMIC Industrial Node",
    coordinates: { top: "62%", left: "68%" },
    description: "Strategic investment node hosting electronics, defense, aerospace, and semiconductor fabrication plants.",
    stats: "Activation Area: 22.5 Sq. KM",
  },
  {
    id: "residential",
    name: "Premium Residential Zones",
    coordinates: { top: "58%", left: "32%" },
    description: "Sustainable smart residential neighborhoods equipped with underground utilities, smart metering, and green parks.",
    stats: "Status: Ready for construction",
  },
  {
    id: "metro",
    name: "Dholera MRTS Metro Link",
    coordinates: { top: "50%", left: "55%" },
    description: "Mass rapid transit corridor connecting Ahmedabad, Dholera, and the international airport.",
    stats: "System: High-speed elevated rail",
  },
];

export default function MapSection() {
  const [activeLoc, setActiveLoc] = useState(locations[0]);
  const [hoveredLoc, setHoveredLoc] = useState(null);

  return (
    <section id="map-ecosystem" className="section-padding" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <div style={{ marginBottom: "64px", maxWidth: "800px" }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "12px" }}>
            Ecosystem Map
          </span>
          <h2 style={{ marginBottom: "20px" }}>The Infrastructure Backbone</h2>
          <p>Dholera is engineered as a master-planned smart city. Hover over hotspots on the map to explore key infrastructure projects shaping the future appreciation of this region.</p>
        </div>

        <div className="grid-12" style={{ alignItems: "center" }}>
          {/* Map Area */}
          <div className="col-8">
            <div className="map-container" style={{ position: "relative", height: "550px", overflow: "hidden", borderRadius: "20px" }}>
              <div 
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  transform: hoveredLoc ? "scale(1.05)" : "scale(1)", 
                  transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  position: "relative"
                }}
              >
                <Image 
                  src="/assets/why-buying-residential-plots-in-dholera-sir-is-a-smart-investment-in-2025.webp" 
                  alt="Dholera SIR Map Overlay" 
                  fill 
                  sizes="(max-width: 991px) 100vw, 66vw"
                  style={{ objectFit: "cover", opacity: 0.7 }}
                  priority
                />
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(241, 240, 236, 0.4)", mixBlendMode: "multiply" }} />
              </div>

              {/* Hotspots */}
              {locations.map((loc) => {
                const isActive = activeLoc.id === loc.id;
                const isHovered = hoveredLoc === loc.id;
                return (
                  <button
                    key={loc.id}
                    className={`map-hotspot ${isActive ? "active" : ""}`}
                    style={{
                      top: loc.coordinates.top,
                      left: loc.coordinates.left,
                      backgroundColor: isActive || isHovered ? "var(--accent-blue)" : "rgba(229, 143, 18, 0.7)",
                      transform: isHovered ? "translate(-50%, -50%) scale(1.3)" : "translate(-50%, -50%)",
                      transition: "all 0.3s ease",
                      border: "none",
                      boxShadow: "0 0 15px rgba(229, 143, 18, 0.4)"
                    }}
                    onMouseEnter={() => {
                      setHoveredLoc(loc.id);
                    }}
                    onMouseLeave={() => {
                      setHoveredLoc(null);
                    }}
                    onClick={() => {
                      setActiveLoc(loc);
                    }}
                    aria-label={`Select ${loc.name}`}
                  >
                    <span 
                      style={{ 
                        width: "8px", 
                        height: "8px", 
                        backgroundColor: "#ffffff", 
                        borderRadius: "50%", 
                        display: "block" 
                      }} 
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Card */}
          <div className="col-4">
            <div 
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid var(--border-color)",
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "opacity 0.3s ease"
              }}
            >
              <div>
                <span 
                  style={{ 
                    display: "inline-block", 
                    padding: "6px 12px", 
                    borderRadius: "20px", 
                    backgroundColor: "var(--accent-soft-blue)", 
                    color: "var(--accent-blue)", 
                    fontSize: "0.75rem", 
                    fontWeight: "600",
                    marginBottom: "20px" 
                  }}
                >
                  {activeLoc.stats}
                </span>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "16px", fontWeight: "600" }}>{activeLoc.name}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: "1.6" }}>{activeLoc.description}</p>
              </div>

              <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
                {locations.map((loc) => (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLoc(loc)}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: activeLoc.id === loc.id ? "var(--accent-blue)" : "var(--text-muted)",
                      opacity: activeLoc.id === loc.id ? 1 : 0.4,
                      border: "none",
                      cursor: "pointer",
                      padding: 0
                    }}
                    aria-label={`Switch details to ${loc.name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
