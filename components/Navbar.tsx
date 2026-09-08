'use client';

import { Download, Menu, MoonStar, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation, profile } from '@/data/portfolio';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
  }, [isLight]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);
    let frame = 0;
    const updateActiveSection = () => {
      const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      const requestedId = window.location.hash.slice(1);
      if (isAtBottom) {
        setActiveSection(['about', 'experience', 'contact'].includes(requestedId) ? requestedId : 'contact');
        return;
      }
      const marker = window.scrollY + 150;
      const current = sections.reduce(
        (match, section) => (section.offsetTop <= marker ? section : match),
        sections[0],
      );
      if (current?.id) setActiveSection(current.id);
    };
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };
    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="navbar-shell">
      <div className="container navbar-inner">
        <a className="brand" href="#home" aria-label="Alex Dev - Trang chủ">
          <span className="brand-mark" aria-hidden="true">
            <i>&lt;</i><i>&gt;</i>
          </span>
          <span>{profile.firstName} {profile.lastName}</span>
        </a>

        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {navigation.map((item) => (
            <a
              className={activeSection === item.href.slice(1) ? 'active' : ''}
              href={item.href}
              key={item.href}
              onClick={() => setActiveSection(item.href.slice(1))}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button theme-button"
            type="button"
            aria-label={isLight ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng'}
            onClick={() => setIsLight((value) => !value)}
          >
            {isLight ? <MoonStar size={18} /> : <Sun size={18} />}
          </button>
          <a className="cv-button" href={profile.cv} download>
            <Download size={16} />
            <span>Download CV</span>
          </a>
          <button
            className="icon-button mobile-menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? 'open' : ''}`}
        aria-label="Điều hướng trên di động"
      >
        <div className="container mobile-nav-inner">
          {navigation.map((item) => (
            <a
              className={activeSection === item.href.slice(1) ? 'active' : ''}
              href={item.href}
              key={item.href}
              onClick={() => {
                setActiveSection(item.href.slice(1));
                setMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
