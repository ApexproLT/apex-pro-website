'use client';

import { motion } from 'framer-motion';
import { Heart, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'inventory', label: t.nav.inventory },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'contact', label: t.nav.contact },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const phone = process.env.NEXT_PUBLIC_PHONE || '+370 XXX XXXXX';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'info@apexpro.lt';

  return (
    <footer className="relative bg-apex-black border-t border-apex-gunmetal/50">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - Logo & Description */}
          <div className="lg:col-span-1">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block"
            >
              <span className="apex-logo text-2xl">
                <span className="apex-logo-white">APEX</span>
                <span className="apex-logo-gold ml-1">PRO</span>
              </span>
            </a>
            <p className="mt-4 text-apex-silver text-sm font-body leading-relaxed max-w-xs">
              {t.footer.description}
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-sm bg-apex-charcoal text-apex-silver hover:bg-apex-gold hover:text-apex-black transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-apex-white uppercase mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-apex-silver hover:text-apex-gold text-sm font-body transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-apex-white uppercase mb-4">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="text-apex-silver hover:text-apex-gold text-sm font-body transition-colors duration-300"
                >
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="text-apex-silver hover:text-apex-gold text-sm font-body transition-colors duration-300"
                >
                  {email}
                </a>
              </li>
              <li>
                <span className="text-apex-silver text-sm font-body">
                  Vilnius, Lithuania
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h4 className="font-display text-sm tracking-wider text-apex-white uppercase mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-apex-silver hover:text-apex-gold text-sm font-body transition-colors duration-300"
                >
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-apex-silver hover:text-apex-gold text-sm font-body transition-colors duration-300"
                >
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-apex-gunmetal/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-apex-silver text-xs font-body">
              {t.footer.copyright}
            </p>
            <p className="text-apex-silver text-xs font-body flex items-center">
              {t.footer.madeWith}{' '}
              <Heart className="w-3 h-3 mx-1 text-apex-gold fill-apex-gold" />{' '}
              {t.footer.inLithuania}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
