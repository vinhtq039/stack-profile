import type { Locale } from '@/data/portfolio';

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  onChange: (locale: Locale) => void;
};

const languages: Array<{ value: Locale; label: string; title: string }> = [
  { value: 'vi', label: 'VI', title: 'Tiếng Việt' },
  { value: 'en', label: 'EN', title: 'English' },
];

export function LanguageSwitcher({
  locale,
  label,
  onChange,
}: LanguageSwitcherProps) {
  return (
    <div
      className="flex h-[38px] items-center gap-0.5 rounded-[10px] border border-[var(--border)] bg-white/[.025] p-[3px]"
      role="group"
      aria-label={label}
    >
      {languages.map((language) => {
        const isActive = locale === language.value;
        return (
          <button
            className={`h-[30px] min-w-[31px] cursor-pointer rounded-[7px] px-1.5 text-[.68rem] font-bold tracking-[.04em] transition-[color,background-color,box-shadow] duration-200 ${
              isActive
                ? 'bg-[linear-gradient(135deg,rgba(91,140,255,.3),rgba(124,108,255,.38))] text-white shadow-[inset_0_1px_0_rgba(255,255,255,.16),0_4px_12px_rgba(71,83,210,.16)]'
                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
            }`}
            key={language.value}
            type="button"
            aria-pressed={isActive}
            title={language.title}
            onClick={() => onChange(language.value)}
          >
            {language.label}
          </button>
        );
      })}
    </div>
  );
}
