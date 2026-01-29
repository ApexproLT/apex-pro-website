'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Flag, Search, FileCheck, Truck } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function About() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Flag,
      title: t.about.features.german.title,
      description: t.about.features.german.description,
    },
    {
      icon: Search,
      title: t.about.features.inspection.title,
      description: t.about.features.inspection.description,
    },
    {
      icon: FileCheck,
      title: t.about.features.transparent.title,
      description: t.about.features.transparent.description,
    },
    {
      icon: Truck,
      title: t.about.features.ready.title,
      description: t.about.features.ready.description,
    },
  ];

  const stats = [
    { value: '50+', label: t.about.stats.vehicles },
    { value: '100%', label: t.about.stats.clients },
    { value: '5+', label: t.about.stats.years },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-apex-charcoal overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-apex-gold/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-px bg-gradient-to-l from-transparent via-apex-gold/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-subtitle mt-4">{t.about.subtitle}</p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <p className="text-apex-platinum text-lg font-body leading-relaxed">
                {t.about.story.p1}
              </p>
              <p className="text-apex-silver text-base font-body leading-relaxed">
                {t.about.story.p2}
              </p>
              <p className="text-apex-silver text-base font-body leading-relaxed">
                {t.about.story.p3}
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <div className="font-display text-4xl md:text-5xl text-apex-gold tracking-wide">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-apex-silver text-xs font-body font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-apex-black/50 border border-apex-gunmetal hover:border-apex-gold/50 rounded-sm transition-all duration-500 group"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-apex-gold/10 group-hover:bg-apex-gold/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-apex-gold" />
                </div>
                <h3 className="mt-4 font-display text-lg tracking-wide text-apex-white uppercase">
                  {feature.title}
                </h3>
                <p className="mt-2 text-apex-silver text-sm font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
