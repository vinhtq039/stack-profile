'use client';

import { Download, Menu, MoonStar, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import type { Locale } from '@/data/portfolio';
import { localize, navigation, profile, uiText } from '@/data/portfolio';

const iconButtonClasses =
  'inline-flex size-[42px] cursor-pointer items-center justify-center rounded-[11px] border border-[var(--border)] bg-white/[.025] transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[rgba(112,164,255,.4)] hover:bg-[rgba(91,140,255,.09)]';

type NavbarProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

export function Navbar({ locale, onLocaleChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const text = uiText[locale];

  useEffect(() => {
    document.documentElement.dataset.theme = isLight ? 'light' : 'dark';
  }, [isLight]);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);
    let frame = 0;
    const updateActiveSection = () => {
      const isAtBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8;
      const requestedId = window.location.hash.slice(1);
      if (isAtBottom) {
        setActiveSection(
          ['about', 'experience', 'contact'].includes(requestedId)
            ? requestedId
            : 'contact',
        );
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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-background)] backdrop-blur-[18px]">
      <div className="mx-auto grid h-[66px] w-[calc(100%-2rem)] max-w-[1280px] grid-cols-[1fr_auto] items-center min-[621px]:h-[72px] min-[621px]:w-[calc(100%-3rem)] min-[1101px]:grid-cols-[1fr_auto_1fr]">
        <a
          className="inline-flex w-fit items-center gap-[11px] text-[1.05rem] font-[740] tracking-[-.025em]"
          href="#home"
          aria-label={text.homeLabel}
        >
          <span
            className="flex gap-1 [&_i]:block [&_i]:rotate-[-4deg] [&_i]:text-[1.85rem] [&_i]:leading-[.7] [&_i]:font-extrabold [&_i]:not-italic [&_i]:text-[var(--accent-blue)] [&_i:last-child]:text-[var(--accent-purple)]"
            aria-hidden="true"
          >
            <i>&lt;</i>
            <i>&gt;</i>
          </span>
          <span>
            {profile.firstName} {profile.lastName}
          </span>
        </a>

        <nav
          className="hidden h-full items-stretch gap-[26px] min-[1101px]:flex min-[1241px]:gap-[34px]"
          aria-label={text.mainNavigation}
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                className={`relative flex items-center text-[.88rem] transition-colors duration-200 hover:text-[var(--foreground)] ${
                  isActive
                    ? "text-[var(--foreground)] after:absolute after:inset-x-0 after:bottom-[15px] after:h-0.5 after:rounded-full after:bg-[linear-gradient(90deg,var(--accent-blue),var(--accent-purple))] after:shadow-[0_0_12px_rgba(124,108,255,.72)] after:content-['']"
                    : 'text-[var(--secondary)]'
                }`}
                href={item.href}
                key={item.href}
                onClick={() => setActiveSection(item.href.slice(1))}
              >
                {localize(item.label, locale)}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button
            className={`${iconButtonClasses} max-[620px]:hidden`}
            type="button"
            aria-label={
              isLight ? text.switchToDark : text.switchToLight
            }
            onClick={() => setIsLight((value) => !value)}
          >
            {isLight ? <MoonStar size={18} /> : <Sun size={18} />}
          </button>
          <LanguageSwitcher
            locale={locale}
            label={text.language}
            onChange={onLocaleChange}
          />
          <a
            className="inline-flex h-[43px] w-[42px] items-center justify-center gap-2.5 rounded-[11px] border border-[rgba(117,118,255,.75)] bg-[linear-gradient(135deg,rgba(91,140,255,.15),rgba(124,108,255,.22))] px-0 text-[.88rem] font-[650] shadow-[inset_0_0_20px_rgba(94,118,255,.05),0_0_20px_rgba(80,83,225,.1)] transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 min-[621px]:w-auto min-[621px]:px-[17px]"
            href={profile.cv}
            download
          >
            <Download size={16} />
            <span className="hidden min-[621px]:inline">{text.downloadCv}</span>
          </a>
          <button
            className={`${iconButtonClasses} min-[1101px]:hidden`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? text.closeMenu : text.openMenu}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className={`grid overflow-hidden border-t transition-[max-height,opacity,border-color] duration-200 min-[1101px]:hidden ${
          menuOpen
            ? 'max-h-[430px] border-[var(--border)] opacity-100'
            : 'max-h-0 border-transparent opacity-0'
        }`}
        aria-label={text.mobileNavigation}
      >
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1280px] grid-cols-2 gap-2 pt-3.5 pb-[18px] min-[621px]:w-[calc(100%-3rem)] min-[621px]:grid-cols-3">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                className={`rounded-[10px] px-3 py-[11px] text-center transition-colors hover:bg-[rgba(91,140,255,.09)] hover:text-[var(--foreground)] ${
                  isActive
                    ? 'bg-[rgba(91,140,255,.09)] text-[var(--accent-link)]'
                    : 'text-[var(--secondary)]'
                }`}
                href={item.href}
                key={item.href}
                onClick={() => {
                  setActiveSection(item.href.slice(1));
                  setMenuOpen(false);
                }}
              >
                {localize(item.label, locale)}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
