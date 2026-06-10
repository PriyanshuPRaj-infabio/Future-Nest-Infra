"use client";
import Image from "next/image";
import { Download, PhoneCall, CheckCircle } from "lucide-react";

export default function FeaturedOpportunity() {
  return (
    <section id="opportunities" className="section-padding" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <div style={{ marginBottom: "64px", maxWidth: "800px" }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "12px" }}>
            Now Launching
          </span>
          <h2 style={{ marginBottom: "20px" }}>Featured Investment Opportunity</h2>
          <p>Explore premium residential land parcels pre-equipped with high-end civic infrastructure, ready for immediate acquisition and development.</p>
        </div>

        <div className="grid-12" style={{ alignItems: "center" }}>
          {/* Left: 60% Image */}
          <div className="col-7">
            <div style={{ position: "relative", height: "480px", width: "100%", borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border-color)", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
              <Image 
                src="/assets/greenfield villas dholera.png" 
                alt="Greenfield Villas Dholera Project Model" 
                fill 
                sizes="(max-width: 991px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>

          {/* Right: 40% Content */}
          <div className="col-5">
            <div style={{ paddingLeft: "24px" }}>
              <span 
                style={{ 
                  display: "inline-block", 
                  fontSize: "0.8rem", 
                  color: "var(--accent-green)", 
                  fontWeight: "600", 
                  backgroundColor: "rgba(16, 185, 129, 0.1)", 
                  padding: "4px 12px", 
                  borderRadius: "20px",
                  marginBottom: "20px"
                }}
              >
                Immediate Allotment
              </span>
              
              <h3 style={{ fontSize: "2rem", marginBottom: "20px", fontWeight: "600" }}>Future Nest Greenfield Plots</h3>
              <p style={{ marginBottom: "32px", fontSize: "1rem" }}>
                Premium clear-title land parcels located less than 5 minutes from the Ahmedabad-Dholera Express highway. Fully integrated with smart utility networks.
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "40px" }}>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle size={20} style={{ color: "var(--accent-blue)", flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "0.95rem" }}>Strategic DMIC Zone Location</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Direct access to the primary industrial corridor network.</span>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle size={20} style={{ color: "var(--accent-blue)", flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "0.95rem" }}>Underground Smart Utility Grid</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Pre-installed water, high-speed fiber, and smart electrical lines.</span>
                  </div>
                </li>
                <li style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <CheckCircle size={20} style={{ color: "var(--accent-blue)", flexShrink: 0 }} />
                  <div>
                    <strong style={{ display: "block", fontSize: "0.95rem" }}>Secure Government Clearances</strong>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Immediate construction permits and title-deed paperwork finalized.</span>
                  </div>
                </li>
              </ul>

              <div style={{ display: "flex", gap: "12px" }}>
                <a href="/assets/Future Nest Infra – Homepage Redesign.pdf" download className="btn btn-primary">
                  <Download size={18} /> Download Brochure
                </a>
                <a href="#calculator" className="btn btn-secondary">
                  <PhoneCall size={18} /> Talk To Advisor
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
