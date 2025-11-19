'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link with form data
    const mailtoLink = `mailto:leeannatherton@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              {language === 'en' ? 'Get in Touch' : 'Ponte en Contacto'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {language === 'en'
                ? "We'd love to hear from you. Contact us for bookings, collaborations, or just to say hello."
                : 'Nos encantaría saber de ti. Contáctanos para reservas, colaboraciones o simplemente para saludar.'}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[var(--accent-gold)] mb-6">
                  {language === 'en' ? 'Contact Information' : 'Información de Contacto'}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {language === 'en'
                    ? 'Whether you want to book us for an event, discuss a collaboration, or just connect, we look forward to hearing from you.'
                    : 'Ya sea que quieras reservarnos para un evento, discutir una colaboración o simplemente conectar, esperamos saber de ti.'}
                </p>
              </div>

              <div className="space-y-12">
                <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 rounded-xl hover:bg-[var(--accent-burgundy)]/30 transition-all">
                  <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-4">
                    {language === 'en' ? 'Email' : 'Correo'}
                  </h3>
                  <a
                    href="mailto:leeannatherton@gmail.com"
                    className="text-white hover:text-[var(--accent-gold)] transition-colors text-lg"
                  >
                    leeannatherton@gmail.com
                  </a>
                </div>

                <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 rounded-xl hover:bg-[var(--accent-burgundy)]/30 transition-all">
                  <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-4">
                    {language === 'en' ? 'Location' : 'Ubicación'}
                  </h3>
                  <p className="text-white text-lg">Austin, Texas</p>
                </div>

                <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 rounded-xl hover:bg-[var(--accent-burgundy)]/30 transition-all">
                  <h3 className="text-xl font-bold text-[var(--accent-gold)] mb-4">
                    {language === 'en' ? 'Booking' : 'Reservas'}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {language === 'en'
                      ? 'Available for churches, festivals, and private events.'
                      : 'Disponible para iglesias, festivales y eventos privados.'}
                  </p>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 rounded-xl">
                <h3 className="text-2xl font-bold text-[var(--accent-gold)] mb-4">
                  {language === 'en' ? 'Connect on Social Media' : 'Conéctate en Redes Sociales'}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'YouTube', url: 'https://www.youtube.com/@LeeannAtherton' },
                    { name: 'Facebook', url: 'https://www.facebook.com/leeannatherton' },
                    { name: 'Instagram', url: 'https://www.instagram.com/leeannatherton' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[var(--accent-burgundy)] hover:bg-[var(--accent-burgundy)]/80 border border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)] rounded-lg text-white font-medium transition-all"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="p-12 bg-gradient-to-br from-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 rounded-2xl text-center w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent-gold)] mb-8">
                  {language === 'en' ? 'Get in Touch' : 'Contáctanos'}
                </h2>
                <button
                  onClick={() => setShowModal(true)}
                  className="px-12 py-5 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all duration-300 transform hover:scale-105 text-lg shadow-2xl"
                >
                  {language === 'en' ? 'Contact' : 'Contacto'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal Contact Form */}
      <AnimatePresence>
        {showModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="bg-gradient-to-br from-black via-[var(--accent-burgundy)]/20 to-[var(--accent-warm)]/20 rounded-2xl border-2 border-[var(--accent-gold)] p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-[var(--accent-gold)]">
                    {language === 'en' ? 'Send a Message' : 'Enviar un Mensaje'}
                  </h2>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-white transition-colors text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={(e) => { handleSubmit(e); setShowModal(false); }} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      {language === 'en' ? 'Name' : 'Nombre'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-[var(--accent-gold)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                      placeholder={language === 'en' ? 'Your name' : 'Tu nombre'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      {language === 'en' ? 'Email' : 'Correo Electrónico'}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-[var(--accent-gold)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                      placeholder={language === 'en' ? 'your.email@example.com' : 'tu.correo@ejemplo.com'}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      {language === 'en' ? 'Subject' : 'Asunto'}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-[var(--accent-gold)]/30 rounded-lg text-white focus:outline-none focus:border-[var(--accent-gold)] transition-colors"
                    >
                      <option value="">
                        {language === 'en' ? 'Select a subject' : 'Selecciona un asunto'}
                      </option>
                      <option value="Booking Inquiry">
                        {language === 'en' ? 'Booking Inquiry' : 'Consulta de Reserva'}
                      </option>
                      <option value="General Question">
                        {language === 'en' ? 'General Question' : 'Pregunta General'}
                      </option>
                      <option value="Collaboration">
                        {language === 'en' ? 'Collaboration' : 'Colaboración'}
                      </option>
                      <option value="Press/Media">
                        {language === 'en' ? 'Press/Media' : 'Prensa/Medios'}
                      </option>
                      <option value="Other">{language === 'en' ? 'Other' : 'Otro'}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      {language === 'en' ? 'Message' : 'Mensaje'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-black/50 border border-[var(--accent-gold)]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--accent-gold)] transition-colors resize-none"
                      placeholder={language === 'en' ? 'Your message...' : 'Tu mensaje...'}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)]/90 transition-all duration-300 transform hover:scale-105 text-lg"
                  >
                    {language === 'en' ? 'Send Message' : 'Enviar Mensaje'}
                  </button>

                  <p className="text-gray-400 text-sm text-center">
                    {language === 'en'
                      ? 'This will open your email client to send the message.'
                      : 'Esto abrirá tu cliente de correo para enviar el mensaje.'}
                  </p>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
