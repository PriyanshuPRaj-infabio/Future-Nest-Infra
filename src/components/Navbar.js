"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
          <Image 
            src="/assets/logo.png" 
            alt="Future Nest Infra Logo" 
            width={120} 
            height={38} 
            style={{ 
              objectFit: "contain",
              filter: scrolled ? "none" : "brightness(0) invert(1)"
            }} 
            priority
          />
        </Link>

        <nav className="nav-links">
          <Link href="#hero" className="nav-link" style={{ color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.85)" }}>
            Home
          </Link>
          <Link href="#dholera-story" className="nav-link" style={{ color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.85)" }}>
            Dholera SIR
          </Link>
          <Link href="#opportunities" className="nav-link" style={{ color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.85)" }}>
            Opportunities
          </Link>
          <Link href="#about" className="nav-link" style={{ color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.85)" }}>
            About
          </Link>
          <Link href="#faq" className="nav-link" style={{ color: scrolled ? "var(--text-secondary)" : "rgba(255,255,255,0.85)" }}>
            FAQ
          </Link>
          
          <Link href="#calculator" className="btn btn-primary" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
