export type Locale = 'lt' | 'en';

export const translations = {
  lt: {
    // Navigation
    nav: {
      inventory: 'Inventorius',
      about: 'Apie mus',
      services: 'Paslaugos',
      contact: 'Kontaktai',
      contactCta: 'Susisiekite',
    },
    
    // Hero Section
    hero: {
      badge: 'Premium komerciniai automobiliai',
      headline: 'APEX PRO',
      subheadline: 'Kokybė, kuri dirba',
      description: 'Premium komerciniai automobiliai iš Vokietijos. Patikrinti, paruošti ir pristatyti jūsų verslui.',
      ctaPrimary: 'Peržiūrėti inventorių',
      ctaSecondary: 'Susisiekti',
      scrollHint: 'Slinkite žemyn',
    },
    
    // Inventory Section
    inventory: {
      title: 'Mūsų Inventorius',
      subtitle: 'Šiuo metu turimi automobiliai',
      inquire: 'Teirautis',
      reserved: 'Rezervuota',
      sold: 'Parduota',
      mileage: 'km',
      emptyState: 'Šiuo metu inventorius atnaujinamas. Susisiekite dėl būsimų pasiūlymų.',
      loading: 'Kraunama...',
      viewAll: 'Peržiūrėti visus',
    },
    
    // About Section
    about: {
      title: 'Apie Apex Pro',
      subtitle: 'Jūsų patikimas partneris komercinių automobilių srityje',
      story: {
        p1: 'Apex Pro – tai premium komercinių automobilių importo ir pardavimo įmonė, įsikūrusi Lietuvoje. Mūsų misija – teikti aukščiausios kokybės transporto priemones Baltijos šalių verslo klientams.',
        p2: 'Kiekvieną automobilį kruopščiai atrenkame iš patikimų Vokietijos šaltinių, pirmiausia iš Copart Germany aukcionų. Mūsų griežti atrankos kriterijai užtikrina, kad kiekviena transporto priemonė atitinka aukščiausius standartus.',
        p3: 'Su Apex Pro jūs gaunate ne tik automobilį – gaunate partnerį, kuris rūpinasi jūsų verslo sėkme.',
      },
      features: {
        german: {
          title: 'Vokiška kilmė',
          description: 'Automobiliai iš patikimų Vokietijos šaltinių su pilna istorija',
        },
        inspection: {
          title: 'Kruopštus patikrinimas',
          description: 'Kiekviena transporto priemonė praeina išsamų techninį patikrinimą',
        },
        transparent: {
          title: 'Skaidri istorija',
          description: 'Pilna dokumentacija ir serviso istorija kiekvienam automobiliui',
        },
        ready: {
          title: 'Paruošta darbui',
          description: 'Registracija, draudimas ir visi formalumai sutvarkyti',
        },
      },
      stats: {
        vehicles: 'Parduotų automobilių',
        clients: 'Patenkintų klientų',
        years: 'Metų patirties',
      },
    },
    
    // How It Works Section
    howItWorks: {
      title: 'Kaip Veikia',
      subtitle: 'Paprastas ir skaidrus procesas',
      steps: {
        sourcing: {
          title: 'Paieška',
          description: 'Randame geriausias transporto priemones Vokietijos rinkoje pagal jūsų poreikius',
        },
        inspection: {
          title: 'Patikrinimas',
          description: 'Kruopščiai patikriname techninę būklę ir dokumentus',
        },
        preparation: {
          title: 'Paruošimas',
          description: 'Paruošiame registracijai Lietuvoje ir sutvarkome visus formalumus',
        },
        delivery: {
          title: 'Pristatymas',
          description: 'Pristatome paruoštą darbui automobilį tiesiai jums',
        },
      },
    },
    
    // Contact Section
    contact: {
      title: 'Susisiekite',
      subtitle: 'Mes pasiruošę padėti',
      info: {
        headline: 'Pasiruošę padėti',
        description: 'Turite klausimų? Susisiekite su mumis bet kuriuo patogiu būdu.',
        phone: 'Telefonas',
        email: 'El. paštas',
        whatsapp: 'WhatsApp',
        location: 'Vieta',
        locationValue: 'Vilnius, Lietuva',
        hours: 'Darbo laikas',
        hoursValue: 'I-V 9:00-18:00',
      },
      form: {
        title: 'Siųsti užklausą',
        name: 'Vardas',
        namePlaceholder: 'Jūsų vardas',
        email: 'El. paštas',
        emailPlaceholder: 'jusu@elpastas.lt',
        phone: 'Telefonas',
        phonePlaceholder: '+370 XXX XXXXX',
        vehicle: 'Dominanti transporto priemonė',
        vehicleDefault: 'Pasirinkite arba bendra užklausa',
        vehicleGeneral: 'Bendra užklausa',
        message: 'Žinutė',
        messagePlaceholder: 'Jūsų žinutė...',
        submit: 'Siųsti užklausą',
        sending: 'Siunčiama...',
        success: 'Ačiū! Susisieksime per 24 valandas.',
        error: 'Klaida. Bandykite dar kartą.',
      },
    },
    
    // Footer
    footer: {
      description: 'Premium komercinių automobilių importas ir pardavimas Lietuvoje.',
      quickLinks: 'Nuorodos',
      contact: 'Kontaktai',
      privacy: 'Privatumo politika',
      terms: 'Naudojimo sąlygos',
      copyright: '© 2025 Apex Pro. Visos teisės saugomos.',
      madeWith: 'Sukurta su',
      inLithuania: 'Lietuvoje',
    },
    
    // Cookie Consent
    cookies: {
      message: 'Ši svetainė naudoja slapukus, kad pagerintų jūsų naršymo patirtį.',
      accept: 'Sutinku',
      reject: 'Nesutinku',
      customize: 'Nustatymai',
      learnMore: 'Sužinoti daugiau',
    },
  },
  
  en: {
    // Navigation
    nav: {
      inventory: 'Inventory',
      about: 'About',
      services: 'Services',
      contact: 'Contact',
      contactCta: 'Contact Us',
    },
    
    // Hero Section
    hero: {
      badge: 'Premium Commercial Vehicles',
      headline: 'APEX PRO',
      subheadline: 'Quality That Works',
      description: 'Premium commercial vehicles sourced from Germany. Inspected, prepared, and delivered to your fleet.',
      ctaPrimary: 'View Inventory',
      ctaSecondary: 'Contact Us',
      scrollHint: 'Scroll down',
    },
    
    // Inventory Section
    inventory: {
      title: 'Our Inventory',
      subtitle: 'Currently Available Vehicles',
      inquire: 'Inquire',
      reserved: 'Reserved',
      sold: 'Sold',
      mileage: 'km',
      emptyState: 'Inventory currently updating. Contact us for upcoming offers.',
      loading: 'Loading...',
      viewAll: 'View All',
    },
    
    // About Section
    about: {
      title: 'About Apex Pro',
      subtitle: 'Your trusted partner in commercial vehicles',
      story: {
        p1: 'Apex Pro is a premium commercial vehicle import and sales company based in Lithuania. Our mission is to provide top-quality vehicles to Baltic business clients.',
        p2: 'We carefully select each vehicle from trusted German sources, primarily from Copart Germany auctions. Our strict selection criteria ensure that every vehicle meets the highest standards.',
        p3: 'With Apex Pro, you get more than just a vehicle – you get a partner who cares about your business success.',
      },
      features: {
        german: {
          title: 'German Origin',
          description: 'Vehicles from trusted German sources with complete history',
        },
        inspection: {
          title: 'Thorough Inspection',
          description: 'Every vehicle undergoes comprehensive technical inspection',
        },
        transparent: {
          title: 'Transparent History',
          description: 'Complete documentation and service history for every vehicle',
        },
        ready: {
          title: 'Ready to Work',
          description: 'Registration, insurance, and all formalities handled',
        },
      },
      stats: {
        vehicles: 'Vehicles Sold',
        clients: 'Satisfied Clients',
        years: 'Years Experience',
      },
    },
    
    // How It Works Section
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Simple and transparent process',
      steps: {
        sourcing: {
          title: 'Sourcing',
          description: 'We find the best vehicles in the German market according to your needs',
        },
        inspection: {
          title: 'Inspection',
          description: 'We thoroughly check technical condition and documentation',
        },
        preparation: {
          title: 'Preparation',
          description: 'We prepare for registration in Lithuania and handle all formalities',
        },
        delivery: {
          title: 'Delivery',
          description: 'We deliver the work-ready vehicle directly to you',
        },
      },
    },
    
    // Contact Section
    contact: {
      title: 'Contact Us',
      subtitle: 'We are ready to help',
      info: {
        headline: 'Ready to Help',
        description: 'Have questions? Contact us through any convenient method.',
        phone: 'Phone',
        email: 'Email',
        whatsapp: 'WhatsApp',
        location: 'Location',
        locationValue: 'Vilnius, Lithuania',
        hours: 'Working Hours',
        hoursValue: 'Mon-Fri 9:00-18:00',
      },
      form: {
        title: 'Send Inquiry',
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        phone: 'Phone',
        phonePlaceholder: '+370 XXX XXXXX',
        vehicle: 'Vehicle of Interest',
        vehicleDefault: 'Select or general inquiry',
        vehicleGeneral: 'General Inquiry',
        message: 'Message',
        messagePlaceholder: 'Your message...',
        submit: 'Send Inquiry',
        sending: 'Sending...',
        success: 'Thank you! We\'ll contact you within 24 hours.',
        error: 'Error. Please try again.',
      },
    },
    
    // Footer
    footer: {
      description: 'Premium commercial vehicle import and sales in Lithuania.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2025 Apex Pro. All rights reserved.',
      madeWith: 'Made with',
      inLithuania: 'in Lithuania',
    },
    
    // Cookie Consent
    cookies: {
      message: 'This website uses cookies to improve your browsing experience.',
      accept: 'Accept',
      reject: 'Reject',
      customize: 'Customize',
      learnMore: 'Learn more',
    },
  },
};

export function getTranslation(locale: Locale) {
  return translations[locale];
}
