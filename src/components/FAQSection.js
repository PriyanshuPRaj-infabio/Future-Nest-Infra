"use client";
import { useState } from "react";
import { MessageSquare, Cpu } from "lucide-react";

const faqData = [
  {
    question: "What exactly is Dholera SIR?",
    answer: "Dholera Special Investment Region (SIR) is India's first platinum-rated greenfield industrial smart city. Spanning over 920 Sq. KM, it is designed with massive underground utility ducts, wide road grids, and high-speed cargo links to serve as a manufacturing and logistics powerhouse."
  },
  {
    question: "Is land ownership here secure and title-clear?",
    answer: "Yes. Every parcel offered by Future Nest Infra undergoes rigorous due diligence, local registration verification, and government zoning clearance tests. We only offer title-clear, immediately registrable land with precise geographic coordinates."
  },
  {
    question: "What is driving the capital appreciation here?",
    answer: "Appreciation is fueled by heavy infrastructure completion. Key catalysts include the 109 km Ahmedabad-Dholera Expressway (slated for completion soon), the international airport cargo hub, and India's first commercial semiconductor fabrication nodes attracting global suppliers."
  },
  {
    question: "How does the purchase process work for out-of-state/NRI investors?",
    answer: "We offer completely digitized transaction tracking. You can select the parcel, verify the papers online, complete virtual drone site visits, and execute the registration paperwork remotely or via verified power of attorney."
  }
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: "transparent" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "80px", maxWidth: "800px", margin: "0 auto 80px auto" }}>
          <span style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-blue)", fontWeight: "600", display: "block", marginBottom: "12px" }}>
            FAQ Dialogue
          </span>
          <h2 style={{ marginBottom: "20px" }}>Investment Consultations</h2>
          <p>Click on any message below to converse with our data system and find answers to common registry, infrastructure, and timeline questions.</p>
        </div>

        <div className="faq-chat-container">
          {faqData.map((item, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "12px",
                  borderBottom: "1px solid var(--border-color)",
                  paddingBottom: "24px"
                }}
              >
                {/* User Message (Question) */}
                <div 
                  className="chat-bubble user"
                  onClick={() => setExpandedIndex(isExpanded ? -1 : index)}
                  style={{
                    backgroundColor: isExpanded ? "var(--accent-blue)" : "var(--bg-secondary)",
                    color: isExpanded ? "#ffffff" : "var(--text-primary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    maxWidth: "fit-content"
                  }}
                >
                  <MessageSquare size={16} />
                  <span>{item.question}</span>
                </div>

                {/* Agent Message (Answer) */}
                <div
                  style={{
                    maxHeight: isExpanded ? "200px" : "0px",
                    overflow: "hidden",
                    opacity: isExpanded ? 1 : 0,
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                >
                  <div 
                    className="chat-bubble agent"
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      maxWidth: "80%",
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-color)",
                      borderBottomRightRadius: "4px",
                      padding: "20px"
                    }}
                  >
                    <div 
                      style={{
                        backgroundColor: "var(--accent-soft-blue)",
                        color: "var(--accent-blue)",
                        padding: "6px",
                        borderRadius: "50%",
                        flexShrink: 0
                      }}
                    >
                      <Cpu size={16} />
                    </div>
                    <p style={{ fontSize: "0.95rem", color: "var(--text-primary)", margin: 0, lineHeight: "1.6" }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
