'use client';

import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import { Locale } from '@/lib/translations';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const languages: { code: Locale; label: string }[] = [
    { code: 'lt', label: 'LT' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <div className="flex items-center space-x-1 bg-apex-gunmetal/50 rounded-sm p-0.5">
      {languages.map((lang) => (
        <motion.button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-3 py-1.5 text-xs font-body font-semibold tracking-wider transition-all duration-300 rounded-sm ${
            locale === lang.code
              ? 'bg-apex-gold text-apex-black'
              : 'text-apex-silver hover:text-apex-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.label}
        </motion.button>
      ))}
    </div>
  );
}
