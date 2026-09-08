import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import type { Locale, Project } from '@/data/portfolio';
import { localize, uiText } from '@/data/portfolio';

type ProjectCardProps = {
  locale: Locale;
  project: Project;
};

export function ProjectCard({ locale, project }: ProjectCardProps) {
  const text = uiText[locale];
  const title = localize(project.title, locale);

  return (
    <article className="group min-w-0 overflow-hidden rounded-[18px] border border-[var(--border)] bg-[var(--project-background)] shadow-[0_18px_45px_rgba(0,0,0,.14),inset_0_1px_0_rgba(255,255,255,.025)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-[5px] hover:border-[rgba(104,135,255,.34)] hover:shadow-[0_24px_55px_rgba(0,0,0,.22),0_0_32px_rgba(72,90,225,.07)] min-[621px]:grid min-[621px]:grid-cols-[42%_1fr] min-[851px]:block">
      <a
        className="relative mx-[13px] mt-[13px] block aspect-[16/8.4] overflow-hidden rounded-xl bg-[#e6e9f4] min-[621px]:h-[calc(100%-26px)] min-[621px]:min-h-[190px] min-[621px]:aspect-auto min-[851px]:h-auto min-[851px]:min-h-0 min-[851px]:aspect-[16/7.4]"
        href={project.href}
        aria-label={`${text.viewProject} ${title}`}
      >
        <Image
          className="block size-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.035]"
          src={project.image}
          alt={`${text.viewProject}: ${title}`}
          fill
          sizes="(max-width: 620px) calc(100vw - 58px), (max-width: 850px) 42vw, (max-width: 1280px) 33vw, 390px"
        />
      </a>
      <div className="p-[15px_17px_17px] min-[621px]:self-center">
        <div className="flex items-center justify-between gap-3.5">
          <h3 className="m-0 text-[.92rem] leading-[1.35] font-semibold tracking-[-.015em] text-[#cbd3ff] min-[391px]:text-[.99rem]">
            {title}
          </h3>
          <a
            className="grid size-[34px] shrink-0 place-items-center rounded-full border border-[var(--border)] text-[var(--secondary)] transition-[color,border-color,transform] duration-200 hover:rotate-[4deg] hover:border-[rgba(112,164,255,.43)] hover:text-[#8ea8ff]"
            href={project.href}
            aria-label={`${text.openProject} ${title}`}
          >
            <ExternalLink size={17} />
          </a>
        </div>
        <p className="mt-1.5 mb-3.5 text-[.86rem] leading-[1.55] text-[var(--secondary)] min-[621px]:min-h-[43px]">
          {localize(project.description, locale)}
        </p>
        <ul
          className="m-0 flex list-none flex-wrap gap-2 p-0"
          aria-label={text.technologies}
        >
          {project.tags.map((tag) => (
            <li
              className="rounded-full border border-[var(--border)] bg-[rgba(102,115,190,.09)] px-[13px] py-[7px] text-[.72rem] text-[#b7c1e7]"
              key={tag}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
