import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyFutureNest from "@/components/WhyFutureNest";
import DholeraStory from "@/components/DholeraStory";
import MapSection from "@/components/MapSection";
import FeaturedOpportunity from "@/components/FeaturedOpportunity";
import Stats from "@/components/Stats";
import Opportunities from "@/components/Opportunities";
import BentoGrid from "@/components/BentoGrid";
import Calculator from "@/components/Calculator";
import InvestorJourney from "@/components/InvestorJourney";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Section 01: Hero Scroll Narrative */}
        <HeroSection />
        
        {/* Section 02: Why Future Nest */}
        <WhyFutureNest />
        
        {/* Section 03: The Dholera Story */}
        <DholeraStory />
        
        {/* Section 04: Ecosystem Map */}
        <MapSection />
        
        {/* Section 05: Featured Opportunity */}
        <FeaturedOpportunity />
        
        {/* Section 06: Key Statistics */}
        <Stats />
        
        {/* Section 07: Investment Opportunities */}
        <Opportunities />
        
        {/* Section 08: Why Dholera Matters */}
        <BentoGrid />
        
        {/* Section 09: Value Calculator */}
        <Calculator />
        
        {/* Section 10: Investor Journey Roadmap */}
        <InvestorJourney />
        
        {/* Section 11: About Future Nest */}
        <AboutSection />
        
        {/* Section 12: Testimonials */}
        <Testimonials />
        
        {/* Section 13: FAQ Section */}
        <FAQSection />
        
        {/* Section 14: Final Call To Action */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
