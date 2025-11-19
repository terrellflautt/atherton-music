'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.music': 'Music',
    'nav.discography': 'Discography',
    'nav.videos': 'Videos',
    'nav.tour': 'Tour',
    'nav.gallery': 'Gallery',
    'nav.links': 'Links',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',

    // Common
    'common.learn_more': 'Learn More',
    'common.listen_now': 'Listen Now',
    'common.watch_now': 'Watch Now',
    'common.read_more': 'Read More',
    'common.contact': 'Contact',
    'common.subscribe': 'Subscribe',
    'common.loading': 'Loading...',

    // Homepage
    'home.tagline': 'Music is the language of the soul',
    'home.subtitle': 'Texas Songwriter Country Blues & Good God Gospel',
    'home.new_album': 'New Gospel Album',
    'home.album_date': 'Coming December 15, 2025',
    'home.album_desc': 'Six soul-stirring tracks celebrating faith, community, and the transformative power of song',
    'home.pre_order': 'Pre-Order Now',
    'home.tour_cta': 'Spain Gospel Tour',
    'home.listen_everywhere': 'Listen Everywhere',
    'home.stream_platforms': 'Stream on Your Favorite Platform',
    'home.featured_albums': 'Featured Albums',
    'home.upcoming_shows': 'Upcoming Shows',
    'home.view_full_schedule': 'View Full Schedule →',
    'home.view_discography': 'View Complete Discography →',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.music': 'Música',
    'nav.discography': 'Discografía',
    'nav.videos': 'Videos',
    'nav.tour': 'Gira',
    'nav.gallery': 'Galería',
    'nav.links': 'Enlaces',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',

    // Common
    'common.learn_more': 'Saber Más',
    'common.listen_now': 'Escuchar Ahora',
    'common.watch_now': 'Ver Ahora',
    'common.read_more': 'Leer Más',
    'common.contact': 'Contacto',
    'common.subscribe': 'Suscribirse',
    'common.loading': 'Cargando...',

    // Homepage
    'home.tagline': 'La música es el lenguaje del alma',
    'home.subtitle': 'Country Blues de Texas y Buen Evangelio de Dios',
    'home.new_album': 'Nuevo Álbum Gospel',
    'home.album_date': '15 de Diciembre, 2025',
    'home.album_desc': 'Seis pistas conmovedoras que celebran la fe, la comunidad y el poder transformador de la canción',
    'home.pre_order': 'Pre-Ordenar Ahora',
    'home.tour_cta': 'Gira Gospel en España',
    'home.listen_everywhere': 'Escuchar En Todas Partes',
    'home.stream_platforms': 'Transmitir en Tu Plataforma Favorita',
    'home.featured_albums': 'Álbumes Destacados',
    'home.upcoming_shows': 'Próximos Shows',
    'home.view_full_schedule': 'Ver Calendario Completo →',
    'home.view_discography': 'Ver Discografía Completa →',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check localStorage first
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
      setLanguage(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language;
      if (browserLang.startsWith('es')) {
        setLanguage('es');
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
    }
  }, [language, mounted]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
