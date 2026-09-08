import { BookOpen, Camera, Headphones, Plane, UserRound } from 'lucide-react';
import type { CSSProperties } from 'react';
import type { Locale } from '@/data/portfolio';
import { interests, localize, uiText } from '@/data/portfolio';

const interestIcons = {
  BookOpen,
  Camera,
  Plane,
  Headphones,
};

type AboutProps = {
  locale: Locale;
};

export function About({ locale }: AboutProps) {
  const text = uiText[locale];

  return (
    <article
      className="min-w-0 scroll-mt-[90px] rounded-2xl border border-[var(--border)] bg-[var(--detail-background)] px-[19px] py-[21px] shadow-[inset_0_1px_0_rgba(255,255,255,.02)] min-[621px]:rounded-[18px] min-[621px]:px-[27px] min-[621px]:pt-[25px] min-[621px]:pb-[23px]"
      id="about"
    >
      <header className="mb-[17px] flex items-center gap-[13px]">
        <span className="grid size-[37px] place-items-center rounded-[11px] border border-[rgba(108,118,255,.16)] bg-[linear-gradient(145deg,rgba(97,91,255,.15),rgba(79,165,255,.07))] text-[#8276ff]">
          <UserRound size={20} />
        </span>
        <h2 className="m-0 text-[1.25rem] leading-[1.2] font-[720] tracking-[-.035em] text-[var(--foreground)] min-[391px]:text-[1.38rem]">
          {text.aboutTitle}
        </h2>
      </header>
      <p className="m-0 max-w-full text-[.91rem] leading-[1.62] text-[var(--secondary)] min-[851px]:max-w-[570px]">
        {text.aboutBody}
      </p>
      <ul
        className="mt-[23px] mb-0 flex list-none flex-wrap gap-2.5 p-0"
        aria-label={text.interests}
      >
        {interests.map((interest) => {
          const Icon = interestIcons[interest.icon];

          return (
            <li
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/[.025] py-[7px] pr-3.5 pl-2 text-[.78rem] text-[var(--secondary)]"
              key={interest.icon}
              style={{ '--interest-color': interest.color } as CSSProperties}
            >
              <span
                className="grid size-6 place-items-center rounded-[7px] border border-[color-mix(in_srgb,var(--interest-color)_28%,transparent)] bg-[color-mix(in_srgb,var(--interest-color)_12%,transparent)] text-[var(--interest-color)]"
                aria-hidden="true"
              >
                <Icon size={14} strokeWidth={2} />
              </span>
              {localize(interest.label, locale)}
            </li>
          );
        })}
      </ul>
    </article>
  );
}
