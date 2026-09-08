import { ArrowRight } from 'lucide-react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  action?: string;
  href?: string;
};

export function SectionTitle({
  title,
  subtitle,
  action,
  href = '#contact',
}: SectionTitleProps) {
  return (
    <div className="mb-[17px] flex flex-col items-start gap-[7px] min-[621px]:mb-5 min-[621px]:flex-row min-[621px]:items-end min-[621px]:justify-between min-[621px]:gap-6">
      <div>
        <h2 className="m-0 text-[1.25rem] leading-[1.2] font-[720] tracking-[-.035em] text-[var(--foreground)] min-[391px]:text-[1.38rem]">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-[7px] mb-0 text-[.9rem] leading-normal text-[var(--secondary)]">
            {subtitle}
          </p>
        ) : null}
      </div>
      {action ? (
        <a
          className="inline-flex shrink-0 items-center gap-2 px-px py-[5px] text-[.83rem] font-[580] text-[#69a5ff] transition-[color,gap] duration-200 hover:gap-[11px] hover:text-[#9c8dff]"
          href={href}
        >
          {action} <ArrowRight size={17} />
        </a>
      ) : null}
    </div>
  );
}
