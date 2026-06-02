import Header from "@/components/layout/Header";
import Hero from "@/components/sections/hero/Hero";
import ServicesIntro from "@/components/sections/services/ServicesIntro";
import StrategicLocation from "@/components/sections/location/StrategicLocation";
import ProjectGallery from "@/components/sections/gallery/ProjectGallery";
import WhyChooseMEC from "@/components/sections/why-choose/WhyChooseMEC";
import VisionMission from "@/components/sections/vision/VisionMission";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import CTABanner from "@/components/sections/cta/CTABanner";
import ContactSection from "@/components/sections/contact/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Who We Are / What We Do */}
      <ServicesIntro />

      {/* 3. Strategic Location */}
      <StrategicLocation />

      {/* 4. Facilities / Opportunities Gallery */}
      <ProjectGallery />

      {/* 5. Why Choose MEC */}
      <WhyChooseMEC />

      {/* 6. Vision, Mission, Commitment */}
      <VisionMission />

      {/* 7. Testimonials + Logo Strip */}
      <Testimonials />

      {/* 8. CTA Banner */}
      <CTABanner />

      {/* 9. Contact / Map / Footer */}
      <ContactSection />
      <Footer />
    </main>
  );
}
