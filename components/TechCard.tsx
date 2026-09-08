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
    <article className="tech-card" style={{ '--skill-color': skill.color } as React.CSSProperties}>
      <span className="tech-icon"><Icon size={25} strokeWidth={1.8} /></span>
      <span>{skill.name}</span>
    </article>
  );
}
