import { Workflow } from 'lucide-react';
import { experiences } from '@/data/portfolio';

export function Experience() {
  return (
    <article className="detail-card experience-card section-animate" id="experience">
      <header className="card-heading">
        <span className="card-heading-icon"><Workflow size={20} /></span>
        <h2>Kinh nghiệm làm việc</h2>
      </header>
      <ol className="timeline">
        {experiences.map((experience) => (
          <li key={experience.period}>
            <time>{experience.period}</time>
            <span className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-title-row">
                <h3>{experience.role}</h3>
                <span>{experience.company}</span>
              </div>
              <p>{experience.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}
