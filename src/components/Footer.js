"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Logo & Pitch */}
          <div>
            <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <Image 
                src="/assets/logo.png" 
                alt="Future Nest Infra Logo" 
                width={120} 
                height={38} 
                style={{ objectFit: "contain" }}
              />
            </Link>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6", maxWidth: "280px" }}>
              Providing institutional-grade research, secure title verification, and strategic land acquisition in Dholera Smart City.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px", fontWeight: "600" }}>Navigation</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
              <li><Link href="#hero" style={{ color: "var(--text-secondary)" }}>Home</Link></li>
              <li><Link href="#dholera-story" style={{ color: "var(--text-secondary)" }}>Dholera Story</Link></li>
              <li><Link href="#why-dholera" style={{ color: "var(--text-secondary)" }}>Why Dholera</Link></li>
              <li><Link href="#opportunities" style={{ color: "var(--text-secondary)" }}>Investment Opportunities</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px", fontWeight: "600" }}>Resources</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.9rem" }}>
              <li><Link href="#calculator" style={{ color: "var(--text-secondary)" }}>Growth Calculator</Link></li>
              <li><Link href="#map-ecosystem" style={{ color: "var(--text-secondary)" }}>Infrastructure Map</Link></li>
              <li><Link href="#faq" style={{ color: "var(--text-secondary)" }}>Common Questions</Link></li>
              <li><a href="/assets/Future Nest Infra – Homepage Redesign.pdf" download style={{ color: "var(--text-secondary)" }}>Project PDF</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "20px", fontWeight: "600" }}>Contact</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <Phone size={16} style={{ color: "var(--accent-blue)", flexShrink: 0, marginTop: "2px" }} />
                <span>+91 90000 12345</span>
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <Mail size={16} style={{ color: "var(--accent-blue)", flexShrink: 0, marginTop: "2px" }} />
                <span>advisory@futurenestinfra.com</span>
              </li>
              <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <MapPin size={16} style={{ color: "var(--accent-blue)", flexShrink: 0, marginTop: "2px" }} />
                <span>101, Infra House, SG Highway, Ahmedabad, Gujarat, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal disclosures & copyright */}
        <div style={{ marginTop: "64px", borderTop: "1px solid var(--border-color)", paddingTop: "32px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          <span>
            © {currentYear} Future Nest Infra. All rights reserved. Registered under Dholera Development Authority zoning guidelines.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="#privacy">Privacy Policy</Link>
            <Link href="#terms">Terms of Service</Link>
            <Link href="#disclaimer">Regulatory Disclosures</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
