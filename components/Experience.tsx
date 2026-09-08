import { Workflow } from "lucide-react";
import type { Locale } from "@/data/portfolio";
import { experiences, localize, uiText } from "@/data/portfolio";

type ExperienceProps = {
  locale: Locale;
};

export function Experience({ locale }: ExperienceProps) {
  const text = uiText[locale];

  return (
    <article
      className="min-w-0 scroll-mt-[90px] rounded-2xl border border-[var(--border)] bg-[var(--detail-background)] px-[19px] py-[21px] shadow-[inset_0_1px_0_rgba(255,255,255,.02)] min-[621px]:rounded-[18px] min-[621px]:px-[27px] min-[621px]:pt-[25px] min-[621px]:pb-5"
      id="experience"
    >
      <header className="mb-[17px] flex items-center gap-[13px]">
        <span className="grid size-[37px] place-items-center rounded-[11px] border border-[rgba(108,118,255,.16)] bg-[linear-gradient(145deg,rgba(97,91,255,.15),rgba(79,165,255,.07))] text-[#8276ff]">
          <Workflow size={20} />
        </span>
        <h2 className="m-0 text-[1.25rem] leading-[1.2] font-[720] tracking-[-.035em] text-[var(--foreground)] min-[391px]:text-[1.38rem]">
          {text.experienceTitle}
        </h2>
      </header>
      <ol className="relative m-0 grid list-none gap-[17px] p-0 before:absolute before:top-2.5 before:bottom-[13px] before:left-2 before:w-px before:bg-[linear-gradient(#8174ff,rgba(91,140,255,.18))] before:content-[''] min-[621px]:before:left-[109px]">
        {experiences.map((experience) => (
          <li
            className="relative grid grid-cols-[16px_minmax(0,1fr)] items-start gap-x-2.5 min-[621px]:grid-cols-[90px_14px_minmax(0,1fr)] min-[621px]:gap-x-[13px]"
            key={experience.company}
          >
            <time className="col-start-2 row-start-1 pb-0.5 text-[.74rem] whitespace-nowrap text-[#7ea2f5] min-[621px]:col-start-1 min-[621px]:row-start-1 min-[621px]:pt-0.5 min-[621px]:pb-0 min-[621px]:text-[var(--secondary)]">
              {localize(experience.period, locale)}
            </time>
            <span className="z-[1] col-start-1 row-start-1 row-span-2 mx-auto mt-1 size-[9px] rounded-full bg-[linear-gradient(135deg,#8c72ff,#59adff)] shadow-[0_0_0_4px_rgba(91,140,255,.07)] min-[621px]:col-start-2 min-[621px]:row-span-1" />
            <div className="col-start-2 row-start-2 min-w-0 min-[621px]:col-start-3 min-[621px]:row-start-1">
              <div className="block min-[621px]:flex min-[621px]:items-baseline min-[621px]:justify-between min-[621px]:gap-3.5">
                <h3 className="m-0 text-[.85rem] leading-[1.4]">
                  {localize(experience.role, locale)}
                </h3>
                <span className="mt-0.5 block text-[.72rem] whitespace-nowrap text-[var(--secondary)] min-[621px]:mt-0">
                  {experience.company}
                </span>
              </div>
              <p className="mt-1 mb-0 text-[.76rem] leading-normal text-[var(--secondary)]">
                {localize(experience.description, locale)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
