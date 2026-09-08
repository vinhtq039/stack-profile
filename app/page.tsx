import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <section className="container about-experience-section" aria-label="Giới thiệu và kinh nghiệm">
        <About />
        <Experience />
      </section>
      <Footer />
    </main>
  );
}
