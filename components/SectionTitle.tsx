import { ArrowRight } from 'lucide-react';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  action?: string;
  href?: string;
};

export function SectionTitle({ title, subtitle, action, href = '#contact' }: SectionTitleProps) {
  return (
    <div className="section-heading">
      <div>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {action ? (
        <a className="section-link" href={href}>
          {action} <ArrowRight size={17} />
        </a>
      ) : null}
    </div>
  );
}
