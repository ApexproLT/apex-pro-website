'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useLanguage } from './LanguageProvider';
import { ContactForm } from './ContactForm';
import { Vehicle } from '@/lib/types';

interface ContactProps {
  vehicles: Vehicle[];
}

export function Contact({ vehicles }: ContactProps) {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const phone = process.env.NEXT_PUBLIC_PHONE || '+370 XXX XXXXX';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'info@apexpro.lt';
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '370XXXXXXXX';

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.info.phone,
      value: phone,
      href: `tel:${phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: t.contact.info.email,
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: MessageCircle,
      label: t.contact.info.whatsapp,
      value: 'WhatsApp',
      href: `https://wa.me/${whatsappNumber}`,
    },
    {
      icon: MapPin,
      label: t.contact.info.location,
      value: t.contact.info.locationValue,
      href: null,
    },
    {
      icon: Clock,
      label: t.contact.info.hours,
      value: t.contact.info.hoursValue,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-apex-charcoal overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-apex-gold/20 to-transparent" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201, 162, 39, 0.2) 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="gold-line mx-auto mb-6" />
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle mt-4">{t.contact.subtitle}</p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl tracking-wide text-apex-white uppercase mb-4">
              {t.contact.info.headline}
            </h3>
            <p className="text-apex-silver text-base font-body leading-relaxed mb-8">
              {t.contact.info.description}
            </p>

            {/* Contact Items */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="flex items-start group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-apex-black/50 group-hover:bg-apex-gold/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-apex-gold" />
                  </div>
                  <div className="ml-4">
                    <p className="text-apex-silver text-xs font-body font-medium uppercase tracking-wider">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-apex-white text-lg font-body hover:text-apex-gold transition-colors duration-300"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-apex-white text-lg font-body">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-8 px-6 py-3 bg-[#25D366] text-white font-body font-semibold text-sm tracking-wider uppercase rounded-sm hover:bg-[#22c55e] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </motion.a>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-apex-black/50 border border-apex-gunmetal p-6 sm:p-8 rounded-sm">
              <h3 className="font-display text-2xl tracking-wide text-apex-white uppercase mb-6">
                {t.contact.form.title}
              </h3>
              <ContactForm vehicles={vehicles} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
