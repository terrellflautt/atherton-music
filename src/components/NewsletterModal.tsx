'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');

        // Close modal after 2 seconds on success
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        console.error('Newsletter signup failed:', data.error);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Newsletter signup error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Close on right-click (context menu)
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          onContextMenu={handleContextMenu}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-gradient-to-br from-[var(--accent-burgundy)] to-[var(--accent-warm)] rounded-2xl border-2 border-[var(--accent-gold)] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-[var(--accent-gold)] transition-colors rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {language === 'en' ? 'Thank You!' : '¡Gracias!'}
                  </h3>
                  <p className="text-[var(--accent-cream)]">
                    {language === 'en'
                      ? "You've been subscribed to our newsletter."
                      : 'Te has suscrito a nuestro boletín.'}
                  </p>
                </motion.div>
              ) : submitStatus === 'error' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {language === 'en' ? 'Oops!' : '¡Ups!'}
                  </h3>
                  <p className="text-[var(--accent-cream)]">
                    {language === 'en'
                      ? 'Something went wrong. Please try again.'
                      : 'Algo salió mal. Por favor, inténtalo de nuevo.'}
                  </p>
                </motion.div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {language === 'en' ? 'Stay Connected' : 'Mantente Conectado'}
                  </h2>
                  <p className="text-[var(--accent-cream)] mb-6">
                    {language === 'en'
                      ? 'Get updates on new music, tour dates, and exclusive content delivered to your inbox.'
                      : 'Recibe actualizaciones sobre nueva música, fechas de gira y contenido exclusivo en tu bandeja de entrada.'}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-white font-medium mb-2">
                        {language === 'en' ? 'Email Address' : 'Correo Electrónico'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder={
                          language === 'en' ? 'your.email@example.com' : 'tu.correo@ejemplo.com'
                        }
                        className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-[0_15px_60px_rgba(212,175,55,0.6)]"
                    >
                      {isSubmitting
                        ? language === 'en'
                          ? 'Subscribing...'
                          : 'Suscribiendo...'
                        : language === 'en'
                        ? 'Subscribe'
                        : 'Suscribirse'}
                    </button>
                  </form>

                  <p className="text-xs text-white/60 mt-4 text-center">
                    {language === 'en'
                      ? 'Right-click or press ESC to close this dialog.'
                      : 'Haz clic derecho o presiona ESC para cerrar este diálogo.'}
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
