import Hero from "@/components/sections/Hero";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Courses from "@/components/sections/Courses";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CredibilityStrip />
      <About />
      <Services />
      <Courses />
      <Stats />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </main>
  );
}
