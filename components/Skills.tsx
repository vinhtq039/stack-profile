import { SectionTitle } from '@/components/SectionTitle';
import { TechCard } from '@/components/TechCard';
import { skills } from '@/data/portfolio';

export function Skills() {
  return (
    <section className="page-section skills-section section-animate" id="skills">
      <div className="container">
        <SectionTitle
          title="Công nghệ tôi sử dụng"
          action="Luôn khám phá những công nghệ mới"
          href="#contact"
        />
        <div className="skills-grid">
          {skills.map((skill) => <TechCard key={skill.name} skill={skill} />)}
        </div>
      </div>
    </section>
  );
}
