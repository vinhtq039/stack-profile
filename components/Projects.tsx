import { ProjectCard } from '@/components/ProjectCard';
import { SectionTitle } from '@/components/SectionTitle';
import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <section className="page-section projects-section section-animate" id="projects">
      <div className="container">
        <SectionTitle
          title="Dự án nổi bật"
          subtitle="Một số sản phẩm tôi đã xây dựng và đóng góp."
          action="Xem tất cả dự án"
          href="#projects"
        />
        <div className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}
