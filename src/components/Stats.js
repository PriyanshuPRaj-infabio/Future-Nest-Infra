"use client";

const statData = [
  {
    value: "920+",
    unit: "Sq. Kilometres",
    label: "Total Planned Area",
    desc: "Spanning a total footprint larger than Singapore or Mumbai, master-planned from scratch."
  },
  {
    value: "100 KM",
    unit: "From Ahmedabad",
    label: "Proximity & Transit Link",
    desc: "Seamlessly connected by a brand new high-speed expressway corridor and elevated rapid transit."
  },
  {
    value: "₹500B+",
    unit: "Capital Outlay",
    label: "Infrastructure Investment",
    desc: "Substantial, direct government funding dedicated exclusively to pre-launch core infrastructure."
  },
  {
    value: "No. 1",
    unit: "Greenfield Project",
    label: "Largest Smart City",
    desc: "The premier smart development nodes along the Delhi-Mumbai Industrial Corridor (DMIC)."
  }
];

export default function Stats() {
  return (
    <section id="statistics" className="section-padding" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "96px", maxWidth: "800px", margin: "0 auto 96px auto" }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "12px" }}>
            Dholera in Numbers
          </span>
          <h2 style={{ fontSize: "2.75rem", marginBottom: "20px" }}>Scale That Inspires Confidence</h2>
          <p>Backed by multi-national partnerships and pre-funded sovereign capital, Dholera stands as India's most ambitious urban development initiative.</p>
        </div>

        <div className="grid-12" style={{ rowGap: "80px" }}>
          {statData.map((stat, idx) => (
            <div key={idx} className="col-3" style={{ textAlign: "left" }}>
              <div 
                style={{ 
                  fontFamily: "var(--font-display)", 
                  fontSize: "3.5rem", 
                  fontWeight: "700", 
                  color: "var(--text-primary)", 
                  lineHeight: "1", 
                  marginBottom: "4px",
                  letterSpacing: "-0.04em"
                }}
              >
                {stat.value}
              </div>
              <div 
                style={{ 
                  fontSize: "1.1rem", 
                  fontWeight: "600", 
                  color: "var(--accent-blue)", 
                  marginBottom: "16px",
                  fontFamily: "var(--font-headings)" 
                }}
              >
                {stat.unit}
              </div>
              <div 
                style={{ 
                  fontSize: "0.9rem", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.05em", 
                  color: "var(--text-primary)", 
                  fontWeight: "600", 
                  marginBottom: "12px" 
                }}
              >
                {stat.label}
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
