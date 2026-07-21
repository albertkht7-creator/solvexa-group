import Hero from "@/components/sections/Hero";
import Manifest from "@/components/sections/Manifest";
import CredibilityStrip from "@/components/sections/CredibilityStrip";
import About from "@/components/sections/About";
import Speaking from "@/components/sections/Speaking";
import Services from "@/components/sections/Services";
import Courses from "@/components/sections/Courses";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import { getAllPosts } from "@/lib/posts";
import Contact from "@/components/sections/Contact";
import WhyItWorks from "@/components/sections/WhyItWorks";
import { InfiniteGrid } from "@/components/ui/the-infinite-grid";

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);
  return (
    <main>
      <Hero />

      {/* Section bridge- warm glow seam between Hero and Manifest */}
      <div className="relative z-10 -mt-24 h-24 pointer-events-none overflow-hidden">
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "160px",
          background: "radial-gradient(ellipse at center bottom, rgba(251,146,60,0.18) 0%, transparent 65%)",
          filter: "blur(12px)",
        }} />
      </div>

      <Manifest />
      <InfiniteGrid>
        <About />
        <Speaking />
        <CredibilityStrip />
        <Services />
        <WhyItWorks />
        <Courses />
        <BlogPreview posts={latestPosts} />
        <FAQ />
        <Contact />
      </InfiniteGrid>
    </main>
  );
}
