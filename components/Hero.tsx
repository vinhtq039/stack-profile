import {
  ArrowRight,
  BriefcaseBusiness,
  CodeXml,
  Files,
  MapPin,
  UsersRound,
} from 'lucide-react';
import Image from 'next/image';
import { profile, stats } from '@/data/portfolio';

const statIcons = {
  users: BriefcaseBusiness,
  projects: Files,
  clients: UsersRound,
  location: MapPin,
};

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-glow hero-glow-left" />
      <div className="hero-glow hero-glow-right" />
      <div className="container hero-layout">
        <div className="profile-frame reveal-up">
          <div className="profile-placeholder" aria-hidden="true">
            <span>AD</span>
          </div>
          <Image
            className="profile-photo"
            src={profile.avatar}
            alt="Chân dung Alex Dev"
            fill
            priority
            sizes="(max-width: 620px) 310px, (max-width: 1100px) 265px, 292px"
          />
          <div className="availability-badge">
            <span className="status-dot" />
            {profile.availability}
          </div>
        </div>

        <div className="hero-copy reveal-up delay-1">
          <div className="eyebrow"><span aria-hidden="true">👋</span> Xin chào, tôi là</div>
          <h1>
            {profile.firstName} <span>{profile.lastName}</span>
          </h1>
          <div className="hero-role">
            <strong>{profile.role}</strong>
            <i />
            <span>{profile.tagline}</span>
          </div>
          <p>{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Liên hệ với tôi <ArrowRight size={18} />
            </a>
            <a className="button button-secondary" href="#projects">Xem dự án</a>
            <a
              className="icon-button github-button"
              href="https://github.com/"
              aria-label="Xem GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <CodeXml size={20} />
            </a>
          </div>
        </div>

        <div className="stats-list reveal-up delay-2" aria-label="Thống kê nổi bật">
          {stats.map((stat) => {
            const Icon = statIcons[stat.icon];
            return (
              <div className="stat-item" key={stat.label}>
                <div className="stat-icon"><Icon size={22} /></div>
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
