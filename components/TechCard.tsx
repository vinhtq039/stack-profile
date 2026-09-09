import Image from 'next/image';

type TechCardProps = {
  skill: { name: string; logo: string; color: string };
};

export function TechCard({ skill }: TechCardProps) {
  return (
    <article
      className="relative flex min-h-[84px] min-w-0 snap-start flex-col items-center justify-center gap-[9px] rounded-[14px] border border-[var(--border)] bg-[linear-gradient(145deg,rgba(255,255,255,.038),rgba(255,255,255,.014))] text-[.72rem] text-[var(--secondary)] shadow-[inset_0_1px_0_rgba(255,255,255,.025)] transition-[transform,border-color,background,box-shadow] duration-200 after:absolute after:right-[22%] after:bottom-[-1px] after:left-[22%] after:h-px after:bg-[var(--skill-color)] after:opacity-0 after:blur-[2px] after:transition-opacity after:duration-200 after:content-[''] hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--skill-color)_45%,transparent)] hover:bg-[linear-gradient(145deg,color-mix(in_srgb,var(--skill-color)_8%,transparent),rgba(255,255,255,.024))] hover:shadow-[0_14px_35px_rgba(0,0,0,.16)] hover:after:opacity-80 min-[621px]:min-h-[86px]"
      style={{ '--skill-color': skill.color } as React.CSSProperties}
    >
      <span className="grid size-8 place-items-center" aria-hidden="true">
        <Image
          className="size-7 object-contain drop-shadow-[0_3px_8px_color-mix(in_srgb,var(--skill-color)_24%,transparent)]"
          src={skill.logo}
          alt=""
          width={28}
          height={28}
        />
      </span>
      <span>{skill.name}</span>
    </article>
  );
}
