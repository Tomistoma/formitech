import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import TechSection from "./components/TechSection";
import PHBSection from "./components/PHBSection";
import ImpactSection from "./components/ImpactSection";
import InvestorSection from "./components/InvestorSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <ProcessSection />
        <TechSection />
        <PHBSection />
        <ImpactSection />
        <InvestorSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
