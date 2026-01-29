'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function Hero() {
  const { t } = useLanguage();

  const scrollToInventory = () => {
    const element = document.getElementById('inventory');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://media.drive.com.au/obj/tx_q:70,rs:auto:1920:1080:1/caradvice/private/7018a9ada60f713543390d262610250b')`,
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-apex-black/70 via-apex-black/60 to-apex-black" />
        {/* Vignette */}
        <div className="absolute inset-0 vignette" />
        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay opacity-30" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-apex-gold/50 to-transparent hidden lg:block"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-px h-48 bg-gradient-to-b from-transparent via-apex-gold/30 to-transparent hidden lg:block"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="badge badge-gold">{t.hero.badge}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="mt-8 font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-apex-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="text-apex-white">APEX</span>
          <span className="text-apex-gold ml-2 sm:ml-4">PRO</span>
        </motion.h1>

        {/* Gold Line */}
        <motion.div
          className="mx-auto mt-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="gold-line-animated w-24 mx-auto" />
        </motion.div>

        {/* Subheadline */}
        <motion.p
          className="mt-6 font-display text-2xl sm:text-3xl md:text-4xl tracking-apex text-apex-platinum uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {t.hero.subheadline}
        </motion.p>

        {/* Description */}
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl font-body font-light text-apex-silver leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {t.hero.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToInventory}
            className="btn-primary min-w-[200px]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t.hero.ctaPrimary}
          </motion.button>
          <motion.button
            onClick={scrollToContact}
            className="btn-secondary min-w-[200px]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t.hero.ctaSecondary}
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer group"
        onClick={scrollToInventory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <span className="text-apex-silver text-xs font-body font-medium tracking-wider uppercase mb-2 group-hover:text-apex-gold transition-colors">
          {t.hero.scrollHint}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6 text-apex-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
