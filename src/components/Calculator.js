"use client";
import { useState, useEffect } from "react";

export default function Calculator() {
  const [amount, setAmount] = useState(1000000); // 10 Lakhs default
  const [duration, setDuration] = useState(5); // 5 Years default
  const [growth, setGrowth] = useState(15); // 15% CAGR default

  const [projectedValue, setProjectedValue] = useState(0);
  const [gain, setGain] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const r = growth / 100;
    const futureValue = amount * Math.pow(1 + r, duration);
    setProjectedValue(Math.round(futureValue));
    setGain(Math.round(futureValue - amount));
  }, [amount, duration, growth]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="section-padding" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px", maxWidth: "800px", margin: "0 auto 64px auto" }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "12px" }}>
            ROI Estimator
          </span>
          <h2 style={{ marginBottom: "20px" }}>Project Your Wealth Growth</h2>
          <p>
            Dholera's developmental pipeline drives unparalleled appreciation. Slide the parameters to estimate the potential returns on your investment over time.
          </p>
        </div>

        <div className="grid-12" style={{ alignItems: "stretch" }}>
          {/* Sliders Area */}
          <div className="col-6">
            <div className="calc-card" style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div className="calc-input-group">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <label htmlFor="amount-slider">Investment Principal</label>
                  <span style={{ fontWeight: "600", color: "var(--accent-blue)" }}>{formatCurrency(amount)}</span>
                </div>
                <input
                  id="amount-slider"
                  type="range"
                  min="200000"
                  max="10000000"
                  step="100000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="calc-slider"
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                  <span>₹2L</span>
                  <span>₹1Cr</span>
                </div>
              </div>

              <div className="calc-input-group">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <label htmlFor="duration-slider">Time Horizon (Years)</label>
                  <span style={{ fontWeight: "600", color: "var(--accent-blue)" }}>{duration} Years</span>
                </div>
                <input
                  id="duration-slider"
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="calc-slider"
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                  <span>1 Year</span>
                  <span>15 Years</span>
                </div>
              </div>

              <div className="calc-input-group">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <label htmlFor="growth-slider">Expected Annual Growth (CAGR)</label>
                  <span style={{ fontWeight: "600", color: "var(--accent-blue)" }}>{growth}%</span>
                </div>
                <input
                  id="growth-slider"
                  type="range"
                  min="8"
                  max="30"
                  step="1"
                  value={growth}
                  onChange={(e) => setGrowth(Number(e.target.value))}
                  className="calc-slider"
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "4px" }}>
                  <span>8% (Conservative)</span>
                  <span>30% (Aggressive)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Area */}
          <div className="col-6">
            <div 
              style={{
                backgroundColor: "var(--text-primary)",
                color: "#ffffff",
                borderRadius: "16px",
                padding: "48px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255, 255, 255, 0.5)", display: "block", marginBottom: "32px" }}>
                  Future Projection
                </span>

                <div style={{ marginBottom: "32px" }}>
                  <span style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.7)", display: "block", marginBottom: "8px" }}>Projected Value</span>
                  <div style={{ fontSize: "3rem", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--accent-soft-blue)", lineHeight: 1 }}>
                    {formatCurrency(projectedValue)}
                  </div>
                </div>

                <div className="grid-12" style={{ gap: "16px" }}>
                  <div className="col-6" style={{ borderLeft: "2px solid var(--accent-green)", paddingLeft: "16px" }}>
                    <span style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.6)", display: "block" }}>Net Growth</span>
                    <span style={{ fontSize: "1.25rem", fontWeight: "600", display: "block", color: "var(--bg-surface)" }}>{formatCurrency(gain)}</span>
                  </div>
                  <div className="col-6" style={{ borderLeft: "2px solid var(--accent-blue)", paddingLeft: "16px" }}>
                    <span style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.6)", display: "block" }}>Multiple</span>
                    <span style={{ fontSize: "1.25rem", fontWeight: "600", display: "block", color: "var(--bg-surface)" }}>
                      {(projectedValue / amount).toFixed(2)}x Return
                    </span>
                  </div>
                </div>
              </div>

              {/* Lead Capture Form */}
              <div style={{ marginTop: "40px", borderTop: "1px solid rgba(255, 255, 255, 0.1)", paddingTop: "32px" }}>
                {submitted ? (
                  <div style={{ color: "var(--accent-green)", fontWeight: "500" }}>
                    ✓ Consultation Request Registered. An investment advisor will contact you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", gap: "12px", width: "100%", flexDirection: "column" }}>
                    <label htmlFor="advisor-email" style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.6)" }}>
                      Get a detailed investment report for this projection:
                    </label>
                    <div style={{ display: "flex", gap: "8px" }}>
                      <input
                        id="advisor-email"
                        type="email"
                        required
                        placeholder="Enter your email address"
                        style={{
                          flex: 1,
                          padding: "12px 18px",
                          borderRadius: "30px",
                          border: "none",
                          backgroundColor: "rgba(255,255,255,0.08)",
                          color: "#ffffff",
                          fontSize: "0.9rem",
                          outline: "none"
                        }}
                      />
                      <button type="submit" className="btn btn-primary" style={{ padding: "12px 24px", whiteSpace: "nowrap" }}>
                        Talk To Advisor
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
