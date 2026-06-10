"use client";

const testimonialsData = [
  {
    quote: "Investing in Dholera through Future Nest was remarkably smooth. Their legal team verified titles and provided clear registry documentation, which is usually a massive bottleneck in land acquisitions.",
    author: "Rajesh K. Mehta",
    role: "Managing Director, Hitek Industries",
    delay: "0s"
  },
  {
    quote: "The strategic location advice they provided was spot on. Our parcel is positioned right near the primary expressway node, and we have already seen double-digit appreciation since our purchase.",
    author: "Ananya Sharma",
    role: "Partner, Sharma & Sons Family Office",
    delay: "0.4s"
  },
  {
    quote: "Unlike typical real estate agents, Future Nest behaves like a portfolio advisory firm. Their data-backed growth projection dashboard and regional mapping reports are institutional grade.",
    author: "Vikram Malhotra",
    role: "HN-Investor & Startup Founder",
    delay: "0.2s"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding" style={{ backgroundColor: "transparent", position: "relative", overflow: "hidden" }}>
      {/* Decorative subtle background shape */}
      <div 
        style={{ 
          position: "absolute", 
          top: "20%", 
          left: "10%", 
          width: "400px", 
          height: "400px", 
          borderRadius: "50%", 
          backgroundColor: "rgba(229, 143, 18, 0.03)", 
          filter: "blur(100px)",
          zIndex: 1
        }} 
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "80px", maxWidth: "800px", margin: "0 auto 80px auto" }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "12px" }}>
            Investor Voice
          </span>
          <h2 style={{ marginBottom: "20px" }}>What Our Partners Say</h2>
          <p>Read experiences from leading corporate heads, family offices, and active real estate land bank managers.</p>
        </div>

        <div className="grid-12">
          {testimonialsData.map((t, idx) => (
            <div 
              key={idx} 
              className="col-4"
              style={{
                animation: `float-card 6s ease-in-out infinite alternate`,
                animationDelay: t.delay
              }}
            >
              <div className="glass-card" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontStyle: "italic", lineHeight: "1.7", marginBottom: "32px" }}>
                  "{t.quote}"
                </p>
                <div>
                  <div style={{ fontWeight: "600", fontSize: "1rem", color: "var(--text-primary)" }}>{t.author}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "2px" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating keyframes */}
      <style>{`
        @keyframes float-card {
          0% {
            transform: translateY(0px);
          }
          100% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
}
