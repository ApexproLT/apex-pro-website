'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, ClipboardCheck, Wrench, Package } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function HowItWorks() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      icon: Search,
      title: t.howItWorks.steps.sourcing.title,
      description: t.howItWorks.steps.sourcing.description,
    },
    {
      number: '02',
      icon: ClipboardCheck,
      title: t.howItWorks.steps.inspection.title,
      description: t.howItWorks.steps.inspection.description,
    },
    {
      number: '03',
      icon: Wrench,
      title: t.howItWorks.steps.preparation.title,
      description: t.howItWorks.steps.preparation.description,
    },
    {
      number: '04',
      icon: Package,
      title: t.howItWorks.steps.delivery.title,
      description: t.howItWorks.steps.delivery.description,
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-apex-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 162, 39, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 162, 39, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title">{t.howItWorks.title}</h2>
          <p className="section-subtitle mt-4">{t.howItWorks.subtitle}</p>
        </motion.div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-apex-gold/30 to-transparent transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {/* Step Card */}
                <div className="group relative p-6 lg:p-8 bg-apex-charcoal border border-apex-gunmetal hover:border-apex-gold/50 rounded-sm transition-all duration-500 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 lg:left-8">
                    <span className="inline-block px-3 py-1 bg-apex-gold text-apex-black font-display text-lg tracking-wider">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 w-14 h-14 flex items-center justify-center rounded-full bg-apex-gold/10 group-hover:bg-apex-gold/20 transition-colors duration-300">
                    <step.icon className="w-7 h-7 text-apex-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 font-display text-xl tracking-wide text-apex-white uppercase">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-apex-silver text-sm font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow to next step - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-apex-gold"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {t.nav.contactCta}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
