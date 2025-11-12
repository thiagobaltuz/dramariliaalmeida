import HeroHome from "@/components/HeroHome";
import FeatureStrip from "@/components/FeatureStrip";
import AboutBlocks from "@/components/AboutBlocks";
import ServicesGrid from "@/components/ServicesGrid";
import Testimonials from "@/components/Testimonials";
import ConteudoStrip from "@/components/ConteudoStrip";

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <FeatureStrip />
      <AboutBlocks />
      <ServicesGrid />
      <Testimonials />
      <ConteudoStrip/>
    </>
  );
}
