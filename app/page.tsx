import Header from '@/components/sections/header/Header';
import Hero from '@/components/sections/hero/Hero';
import ServicesIntro from '@/components/sections/services/ServicesIntro';
import ProjectGallery from '@/components/sections/gallery/ProjectGallery';
import Testimonials from '@/components/sections/testimonials/Testimonials';
import TeamSection from '@/components/sections/team/TeamSection';
import QualitySection from '@/components/sections/quality/QualitySection';
import ContactMap from '@/components/sections/contact/ContactMap';
import Footer from '@/components/sections/footer/Footer';

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <ServicesIntro />
      <ProjectGallery />
      <Testimonials />
      <TeamSection />
      <QualitySection />
      <ContactMap />
      <Footer />
    </main>
  );
}
