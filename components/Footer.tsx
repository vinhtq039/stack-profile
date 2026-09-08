import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  Code2,
  MessageCircle,
  Play,
} from 'lucide-react';
import { profile, socials } from '@/data/portfolio';

const socialIcons = {
  Github: Code2,
  Linkedin: BriefcaseBusiness,
  Facebook: MessageCircle,
  Instagram: Camera,
  Youtube: Play,
};

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true"><i>&lt;</i><i>&gt;</i></span>
            <span>{profile.firstName} {profile.lastName}</span>
          </a>
          <p>Building a better web, one line of code at a time.</p>
        </div>

        <nav className="social-list" aria-label="Mạng xã hội">
          {socials.map((social) => {
            const Icon = socialIcons[social.icon];
            return (
              <a href={social.href} key={social.label} target="_blank" rel="noreferrer" aria-label={social.label}>
                <Icon size={17} />
              </a>
            );
          })}
        </nav>

        <div className="footer-cta">
          <p>Let&apos;s build something amazing together!</p>
          <a className="cv-button" href={`mailto:${profile.email}`}>
            Liên hệ ngay <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
