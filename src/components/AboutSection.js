"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <div className="grid-12" style={{ alignItems: "center" }}>
          
          {/* Left: Large Portrait Editorial Image */}
          <div className="col-5">
            <div 
              style={{ 
                position: "relative", 
                height: "600px", 
                width: "100%", 
                borderRadius: "24px", 
                overflow: "hidden", 
                border: "1px solid var(--border-color)",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.02)"
              }}
            >
              <Image 
                src="/assets/hero.jpg" 
                alt="Architectural conceptual design for Future Nest" 
                fill 
                sizes="(max-width: 991px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right: Minimal copy & Statement */}
          <div className="col-7" style={{ paddingLeft: "64px" }}>
            <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "20px" }}>
              Who We Are
            </span>
            
            <h2 style={{ fontSize: "3rem", fontWeight: "500", lineHeight: "1.1", marginBottom: "32px", letterSpacing: "-0.03em" }}>
              Helping investors identify future-ready opportunities through strategic land investments.
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", color: "var(--text-secondary)", fontSize: "1.05rem" }}>
              <p>
                Future Nest Infra was established to bring corporate transparency and data-backed intelligence to land investments in Dholera SIR. We treat regional land acquisition as an engineering project—carefully mapping infrastructure lines, validating land titles, and positioning portfolios for optimal capitalization.
              </p>
              <p>
                Our clients include private high-net-worth investors, family offices, and developers seeking secure, high-yield land assets in India's leading industrial corridor. By prioritizing regulatory verification and prime logistics proximity, we turn raw land banking into a structured, wealth-generating asset class.
              </p>
            </div>

            {/* Micro values */}
            <div style={{ display: "flex", gap: "48px", marginTop: "48px", borderTop: "1px solid var(--border-color)", paddingTop: "32px" }}>
              <div>
                <span style={{ fontSize: "2rem", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--accent-blue)", display: "block" }}>10+</span>
                <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", fontWeight: "600" }}>Years Experience</span>
              </div>
              <div>
                <span style={{ fontSize: "2rem", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--accent-blue)", display: "block" }}>500+</span>
                <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", fontWeight: "600" }}>Happy Investors</span>
              </div>
              <div>
                <span style={{ fontSize: "2rem", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--accent-blue)", display: "block" }}>100%</span>
                <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-muted)", fontWeight: "600" }}>Title Clear Record</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
