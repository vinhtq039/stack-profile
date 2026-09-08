import { SectionTitle } from '@/components/SectionTitle';
import { TechCard } from '@/components/TechCard';
import type { Locale } from '@/data/portfolio';
import { skills, uiText } from '@/data/portfolio';

type SkillsProps = {
  locale: Locale;
};

export function Skills({ locale }: SkillsProps) {
  const text = uiText[locale];

  return (
    <section
      className="relative scroll-mt-[78px] py-6 min-[621px]:pt-3 min-[621px]:pb-[34px]"
      id="skills"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1280px] min-[621px]:w-[calc(100%-3rem)]">
        <SectionTitle
          title={text.skillsTitle}
          action={text.skillsAction}
          href="#contact"
        />
        <div className="mr-[-16px] grid snap-x snap-proximity grid-cols-[repeat(6,90px)] gap-[11px] overflow-x-auto pb-[9px] pr-4 [scrollbar-width:thin] min-[621px]:mr-0 min-[621px]:grid-cols-4 min-[621px]:gap-3.5 min-[621px]:overflow-visible min-[621px]:pb-0 min-[621px]:pr-0 min-[851px]:grid-cols-6 min-[1101px]:grid-cols-12">
          {skills.map((skill) => (
            <TechCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
