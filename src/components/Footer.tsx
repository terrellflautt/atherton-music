'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { musicLinks, socialLinks } from '@/data/musicLinks';
import NewsletterModal from './NewsletterModal';

export default function Footer() {
  const { language } = useLanguage();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsNewsletterModalOpen(true);
  };

  return (
    <footer className="bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20 border-t border-[var(--accent-gold)]/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div>
            <Image
              src="/images/atherton-logo.png"
              alt="Atherton Music"
              width={150}
              height={50}
              className="mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              "God speaks, we listen, Atherton sings."
            </p>
            <p className="text-gray-400 text-sm">
              Mother & Son Duo • Austin, Texas
            </p>
            <p className="text-[var(--accent-gold)] font-semibold text-sm mt-2">
              Texas Songwriter Country Blues & Good God Gospel
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[var(--accent-gold)] font-bold mb-4 text-lg">
              {language === 'en' ? 'Quick Links' : 'Enlaces Rápidos'}
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Music', 'Discography', 'Videos', 'Tour', 'Gallery', 'Blog', 'Links', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[var(--accent-gold)] transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Listen */}
          <div>
            <h3 className="text-[var(--accent-gold)] font-bold mb-4 text-lg">
              {language === 'en' ? 'Listen' : 'Escuchar'}
            </h3>
            <ul className="space-y-2">
              {musicLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[var(--accent-gold)] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-[var(--accent-gold)]">♪</span>
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-[var(--accent-gold)] font-bold mb-4 text-lg">
              {language === 'en' ? 'Stay Connected' : 'Mantente Conectado'}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              {language === 'en'
                ? 'Get updates on new music, tour dates, and more.'
                : 'Recibe actualizaciones sobre nueva música, fechas de gira y más.'}
            </p>
            <form className="space-y-2" onSubmit={handleNewsletterSubmit}>
              <label htmlFor="footer-email" className="sr-only">
                {language === 'en' ? 'Email address' : 'Correo electrónico'}
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder={language === 'en' ? 'Your email' : 'Tu correo'}
                className="w-full px-4 py-2 bg-black/50 border border-[var(--accent-gold)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-gold)] transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[var(--accent-gold)] text-black font-bold rounded-lg hover:bg-[var(--accent-gold)] shadow-lg hover:shadow-[0_15px_60px_rgba(212,175,55,0.6)] hover:brightness-110 transition-all text-sm"
              >
                {language === 'en' ? 'Subscribe' : 'Suscribirse'}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-[var(--accent-gold)]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[var(--accent-burgundy)]/40 hover:bg-[var(--accent-burgundy)] border border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)] rounded-lg text-white font-medium transition-all text-sm"
                >
                  {link.platform}
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Atherton Music
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {language === 'en' ? 'All rights reserved' : 'Todos los derechos reservados'}
              </p>
              <p className="text-[var(--accent-gold)] text-xs mt-2">
                Austin, Texas • USA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Modal */}
      <NewsletterModal isOpen={isNewsletterModalOpen} onClose={() => setIsNewsletterModalOpen(false)} />
    </footer>
  );
}
