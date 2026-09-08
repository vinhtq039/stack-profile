import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    href: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <a className="project-image-wrap" href={project.href} aria-label={`Xem dự án ${project.title}`}>
        <Image
          className="project-image"
          src={project.image}
          alt={`Giao diện dự án ${project.title}`}
          fill
          sizes="(max-width: 620px) calc(100vw - 58px), (max-width: 850px) 42vw, (max-width: 1280px) 33vw, 390px"
        />
      </a>
      <div className="project-content">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <a className="project-link" href={project.href} aria-label={`Mở dự án ${project.title}`}>
            <ExternalLink size={17} />
          </a>
        </div>
        <p>{project.description}</p>
        <ul className="project-tags" aria-label="Công nghệ sử dụng">
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
    </article>
  );
}
