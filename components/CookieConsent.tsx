'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function CookieConsent() {
  const { t } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('apex-cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setHasInteracted(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('apex-cookie-consent', 'accepted');
    localStorage.setItem('apex-cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setHasInteracted(true);
    // Enable analytics
    window.dispatchEvent(new Event('cookieConsentAccepted'));
  };

  const rejectCookies = () => {
    localStorage.setItem('apex-cookie-consent', 'rejected');
    localStorage.setItem('apex-cookie-consent-date', new Date().toISOString());
    setShowBanner(false);
    setHasInteracted(true);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-apex-charcoal border border-apex-gunmetal rounded-sm p-6 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={rejectCookies}
                className="absolute top-4 right-4 text-apex-silver hover:text-apex-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                {/* Icon */}
                <div className="hidden sm:flex w-12 h-12 items-center justify-center rounded-full bg-apex-gold/10">
                  <Cookie className="w-6 h-6 text-apex-gold" />
                </div>

                {/* Content */}
                <div className="flex-1 pr-8 sm:pr-0">
                  <p className="text-apex-platinum text-sm font-body leading-relaxed">
                    {t.cookies.message}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <motion.button
                    onClick={rejectCookies}
                    className="flex-1 sm:flex-none px-5 py-2.5 text-apex-silver hover:text-apex-white text-sm font-body font-medium tracking-wide transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.cookies.reject}
                  </motion.button>
                  <motion.button
                    onClick={acceptCookies}
                    className="flex-1 sm:flex-none px-5 py-2.5 bg-apex-gold text-apex-black text-sm font-body font-semibold tracking-wide rounded-sm hover:bg-apex-gold-light transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t.cookies.accept}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
