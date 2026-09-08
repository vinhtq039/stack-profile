import {
  ArrowRight,
  BriefcaseBusiness,
  CodeXml,
  Files,
  MapPin,
  UsersRound,
} from 'lucide-react';
import Image from 'next/image';
import type { Locale } from '@/data/portfolio';
import { localize, profile, stats, uiText } from '@/data/portfolio';

const statIcons = {
  users: BriefcaseBusiness,
  projects: Files,
  clients: UsersRound,
  location: MapPin,
};

const buttonClasses =
  'inline-flex h-12 items-center justify-center gap-3 rounded-[11px] border px-3 text-[.9rem] font-[650] transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 min-[621px]:px-6';

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const text = uiText[locale];

  return (
    <section
      className="relative overflow-hidden pt-7 pb-11 min-[621px]:pt-[38px] min-[621px]:pb-[52px] min-[851px]:pt-12"
      id="home"
    >
      <div className="absolute top-[70px] left-[-270px] -z-10 size-[420px] rounded-full bg-[#613cff] opacity-[.14] blur-[40px]" />
      <div className="absolute top-[-130px] right-[-280px] -z-10 size-[420px] rounded-full bg-[#3b7cff] opacity-[.14] blur-[40px]" />
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1280px] grid-cols-1 items-center gap-[34px] min-[621px]:w-[calc(100%-3rem)] min-[621px]:grid-cols-[minmax(225px,260px)_1fr] min-[851px]:grid-cols-[265px_minmax(0,1fr)] min-[851px]:gap-[42px] min-[1101px]:grid-cols-[292px_minmax(0,1fr)_220px] min-[1101px]:gap-[clamp(44px,5vw,72px)]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[310px] animate-[reveal-up_.65s_both_ease-out] overflow-hidden rounded-[22px] border border-white/15 bg-[linear-gradient(145deg,#cad6e1,#202938_78%)] shadow-[var(--card-shadow),inset_0_1px_0_rgba(255,255,255,.1)] min-[621px]:mx-0 min-[621px]:max-w-none">
          <div
            className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_50%_28%,rgba(130,163,196,.42),transparent_25%),linear-gradient(155deg,#182334,#080d17)] text-[5rem] font-extrabold text-white/15"
            aria-hidden="true"
          >
            <span>AD</span>
          </div>
          <Image
            className="absolute inset-0 size-full object-cover"
            src={profile.avatar}
            alt={text.avatarAlt}
            fill
            priority
            sizes="(max-width: 620px) 310px, (max-width: 1100px) 265px, 292px"
          />
          <div className="absolute right-4 bottom-[15px] left-4 flex min-h-[39px] items-center justify-center gap-[9px] rounded-full border border-white/10 bg-[rgba(10,17,30,.78)] text-[.75rem] text-[#d9e2ef] backdrop-blur-xl">
            <span className="size-[9px] rounded-full bg-[#39d98a] shadow-[0_0_0_5px_rgba(57,217,138,.11),0_0_14px_rgba(57,217,138,.65)]" />
            {localize(profile.availability, locale)}
          </div>
        </div>

        <div className="max-w-[610px] animate-[reveal-up_.65s_both_ease-out] text-center [animation-delay:.08s] min-[621px]:text-left">
          <div className="mb-3.5 inline-flex items-center gap-[9px] rounded-full border border-[var(--border)] bg-white/[.035] px-3.5 py-[7px] text-[.84rem] text-[var(--secondary)] min-[621px]:mb-2.5">
            <span aria-hidden="true">👋</span> {text.greeting}
          </div>
          <h1 className="m-0 text-[clamp(3.7rem,19vw,5rem)] leading-[.98] font-bold tracking-[-.062em] text-shadow-[0_8px_35px_rgba(0,0,0,.28)] min-[621px]:text-[clamp(3.5rem,9vw,4.6rem)] min-[851px]:text-[clamp(4rem,5.15vw,5.15rem)]">
            {profile.firstName}{' '}
            <span className="bg-[linear-gradient(135deg,#6ab6ff_8%,#5b8cff_48%,#8c73ff)] bg-clip-text text-transparent">
              {profile.lastName}
            </span>
          </h1>
          <div className="mt-3.5 flex flex-col items-center gap-[3px] text-[1.05rem] text-[var(--foreground)] min-[621px]:items-start min-[851px]:mt-[13px] min-[851px]:flex-row min-[851px]:items-center min-[851px]:gap-3.5 min-[851px]:text-[1.15rem]">
            <strong className="font-bold">{localize(profile.role, locale)}</strong>
            <i className="hidden h-[22px] w-px bg-[var(--muted)] min-[851px]:block" />
            <span className="text-[var(--secondary)]">
              {localize(profile.tagline, locale)}
            </span>
          </div>
          <p className="mt-4 mb-0 max-w-[610px] text-[.95rem] leading-[1.62] text-[var(--secondary)] min-[621px]:text-[.98rem]">
            {localize(profile.introduction, locale)}
          </p>
          <div className="mt-6 grid grid-cols-[1fr_1fr_48px] items-center gap-2.5 min-[391px]:grid-cols-[1fr_1fr_48px] min-[621px]:flex min-[621px]:gap-3.5 max-[390px]:grid-cols-[1fr_48px]">
            <a
              className={`${buttonClasses} border-transparent bg-[linear-gradient(135deg,#7668ff,#4fa5ff)] text-white shadow-[0_12px_28px_rgba(78,110,255,.23),inset_0_1px_0_rgba(255,255,255,.25)] hover:shadow-[0_15px_34px_rgba(78,110,255,.34)] max-[390px]:col-span-full`}
              href="#contact"
            >
              {text.contactMe} <ArrowRight size={18} />
            </a>
            <a
              className={`${buttonClasses} border-[var(--border)] bg-white/[.02] hover:border-[rgba(112,164,255,.42)] hover:bg-[rgba(91,140,255,.07)]`}
              href="#projects"
            >
              {text.viewProjects}
            </a>
            <a
              className="inline-flex size-12 items-center justify-center rounded-[13px] border border-[var(--border)] bg-white/[.025] transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5 hover:border-[rgba(112,164,255,.4)] hover:bg-[rgba(91,140,255,.09)]"
              href="https://github.com/"
              aria-label={text.viewGithub}
              target="_blank"
              rel="noreferrer"
            >
              <CodeXml size={20} />
            </a>
          </div>
        </div>

        <div
          className="col-span-full grid grid-cols-2 gap-6 animate-[reveal-up_.65s_both_ease-out] [animation-delay:.16s] min-[851px]:grid-cols-4 min-[1101px]:col-span-1 min-[1101px]:grid-cols-1 max-[390px]:gap-2.5"
          aria-label={text.statsLabel}
        >
          {stats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <div
                className="grid grid-cols-[38px_1fr] items-center gap-2.5 rounded-2xl border border-[var(--border)] bg-[var(--stat-background)] p-3 min-[621px]:grid-cols-[46px_1fr] min-[621px]:gap-[13px] min-[621px]:p-[15px] min-[1101px]:rounded-none min-[1101px]:border-0 min-[1101px]:bg-transparent min-[1101px]:p-0 max-[390px]:block"
                key={stat.icon}
              >
                <div className="grid size-[38px] place-items-center rounded-[13px] border border-[rgba(107,128,255,.12)] bg-[linear-gradient(145deg,rgba(76,105,255,.11),rgba(74,129,255,.05))] text-[var(--accent-icon)] min-[621px]:size-[46px] max-[390px]:mb-[9px]">
                  <Icon size={22} />
                </div>
                <div>
                  <strong className="block text-[1.05rem] tracking-[-.02em] min-[621px]:text-xl">
                    {localize(stat.value, locale)}
                  </strong>
                  <span className="mt-[3px] block text-[.8rem] leading-[1.35] text-[var(--secondary)]">
                    {localize(stat.label, locale)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
