'use client';

import { useEffect, useState } from 'react';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import type { Locale } from '@/data/portfolio';
import { uiText } from '@/data/portfolio';

const LANGUAGE_STORAGE_KEY = 'alex-dev-language';

export function PortfolioApp() {
  const [locale, setLocale] = useState<Locale>('vi');
  const text = uiText[locale];

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLocale === 'vi' || savedLocale === 'en') {
      setLocale(savedLocale);
      document.documentElement.lang = savedLocale;
    }
  }, []);

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    document.documentElement.lang = nextLocale;
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLocale);
  };

  return (
    <main>
      <Navbar
        locale={locale}
        onLocaleChange={handleLocaleChange}
      />
      <Hero locale={locale} />
      <Skills locale={locale} />
      <Projects locale={locale} />
      <section
        className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-[22px] px-4 pt-5 pb-[30px] min-[621px]:w-[calc(100%-3rem)] min-[621px]:px-0 min-[621px]:pt-[26px] min-[621px]:pb-[34px] min-[851px]:grid-cols-[.95fr_1.15fr]"
        aria-label={text.aboutExperienceLabel}
      >
        <About locale={locale} />
        <Experience locale={locale} />
      </section>
      <Footer locale={locale} />
    </main>
  );
}
