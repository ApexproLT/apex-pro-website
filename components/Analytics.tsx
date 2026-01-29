'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export function Analytics() {
  const [consentGiven, setConsentGiven] = useState(false);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    // Check for existing consent
    const consent = localStorage.getItem('apex-cookie-consent');
    if (consent === 'accepted') {
      setConsentGiven(true);
    }

    // Listen for consent event
    const handleConsent = () => {
      setConsentGiven(true);
    };

    window.addEventListener('cookieConsentAccepted', handleConsent);
    return () => window.removeEventListener('cookieConsentAccepted', handleConsent);
  }, []);

  // Don't render analytics if no GA ID or no consent
  if (!gaId || !consentGiven) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_title: document.title,
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
