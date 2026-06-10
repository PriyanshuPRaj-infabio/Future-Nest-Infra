"use client";
import { Download, Calendar, MessageSquare } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="cta-section" id="final-cta">
      {/* Background Video */}
      <video
        src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-modern-suburb-with-houses-and-streets-39845-large.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="cta-video"
      />
      
      {/* Soft Blue Gradient Overlay (2563EB -> #60A5FA) */}
      <div 
        className="cta-gradient" 
        style={{
          background: "linear-gradient(135deg, rgba(229, 143, 18, 0.85) 0%, rgba(245, 158, 11, 0.9) 100%)"
        }} 
      />

      <div className="cta-content">
        <span 
          style={{ 
            fontSize: "0.85rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "var(--accent-soft-blue)", 
            fontWeight: "600",
            display: "block",
            marginBottom: "24px"
          }}
        >
          Secure Your Allocation
        </span>
        <h2 style={{ fontSize: "3.5rem", fontWeight: "700", lineHeight: "1.1", marginBottom: "20px", color: "#ffffff" }}>
          The Future Is Being Built Today.
        </h2>
        <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.2rem", maxWidth: "650px", margin: "0 auto 40px auto", fontWeight: "300" }}>
          Secure your position in one of India's most ambitious smart city developments. Work directly with certified title clear advisors.
        </p>

        <div className="cta-buttons">
          <a href="#calculator" className="btn btn-white" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <Calendar size={18} /> Book Consultation
          </a>
          <a href="/assets/Future Nest Infra – Homepage Redesign.pdf" download className="btn btn-outline" style={{ color: "#ffffff", borderColor: "#ffffff", display: "flex", gap: "10px", alignItems: "center" }}>
            <Download size={18} /> Download Brochure
          </a>
          <a href="#faq" className="btn btn-outline" style={{ color: "#ffffff", borderColor: "#ffffff", display: "flex", gap: "10px", alignItems: "center" }}>
            <MessageSquare size={18} /> Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
