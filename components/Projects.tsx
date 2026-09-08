import { ProjectCard } from '@/components/ProjectCard';
import { SectionTitle } from '@/components/SectionTitle';
import type { Locale } from '@/data/portfolio';
import { localize, projects, uiText } from '@/data/portfolio';

type ProjectsProps = {
  locale: Locale;
};

export function Projects({ locale }: ProjectsProps) {
  const text = uiText[locale];

  return (
    <section
      className="relative scroll-mt-[78px] py-6 min-[621px]:pt-[38px] min-[621px]:pb-[34px]"
      id="projects"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1280px] min-[621px]:w-[calc(100%-3rem)]">
        <SectionTitle
          title={text.projectsTitle}
          subtitle={text.projectsSubtitle}
          action={text.projectsAction}
          href="#projects"
        />
        <div className="grid grid-cols-1 gap-3.5 min-[621px]:gap-[18px] min-[1101px]:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={localize(project.title, locale)}
              locale={locale}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
