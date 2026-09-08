import {
  Atom,
  Braces,
  Boxes,
  Container,
  Database,
  GitBranch,
  Hexagon,
  Leaf,
  Palette,
  ShieldCheck,
  Waypoints,
  Wind,
} from 'lucide-react';

const iconMap = {
  Atom,
  N: Boxes,
  TS: Braces,
  Wind,
  Hexagon: Waypoints,
  Py: Braces,
  Database,
  Leaf,
  Container,
  GitBranch,
  Figma: Palette,
  Shield: ShieldCheck,
};

type TechCardProps = {
  skill: { name: string; icon: string; color: string };
};

export function TechCard({ skill }: TechCardProps) {
  const Icon = iconMap[skill.icon as keyof typeof iconMap] ?? Hexagon;

  return (
    <article
      className="relative flex min-h-[84px] min-w-0 snap-start flex-col items-center justify-center gap-[9px] rounded-[14px] border border-[var(--border)] bg-[linear-gradient(145deg,rgba(255,255,255,.038),rgba(255,255,255,.014))] text-[.72rem] text-[var(--secondary)] shadow-[inset_0_1px_0_rgba(255,255,255,.025)] transition-[transform,border-color,background,box-shadow] duration-200 after:absolute after:right-[22%] after:bottom-[-1px] after:left-[22%] after:h-px after:bg-[var(--skill-color)] after:opacity-0 after:blur-[2px] after:transition-opacity after:duration-200 after:content-[''] hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--skill-color)_45%,transparent)] hover:bg-[linear-gradient(145deg,color-mix(in_srgb,var(--skill-color)_8%,transparent),rgba(255,255,255,.024))] hover:shadow-[0_14px_35px_rgba(0,0,0,.16)] hover:after:opacity-80 min-[621px]:min-h-[86px]"
      style={{ '--skill-color': skill.color } as React.CSSProperties}
    >
      <span className="grid place-items-center text-[var(--skill-color)]">
        <Icon size={25} strokeWidth={1.8} />
      </span>
      <span>{skill.name}</span>
    </article>
  );
}
