'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterModal from '@/components/NewsletterModal';
import { useLanguage } from '@/contexts/LanguageContext';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: 'news' | 'tour' | 'music' | 'story';
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'atherton-music-biography',
    title: 'The Atherton Music Story: A Mother-Son Journey Through Faith and Song',
    date: '2025-01-15',
    excerpt:
      'Discover the inspiring story of Leeann Atherton and her son, a mother-son duo bringing authentic Texas blues, gospel, and Americana to the world. From humble beginnings to international stages, learn about the journey that shaped Atherton Music.',
    category: 'story',
    featured: true,
  },
  {
    slug: 'spain-gospel-tour-announcement',
    title: 'Atherton Music Announces Spain Gospel Tour 2025',
    date: '2025-01-10',
    excerpt:
      "We're thrilled to announce our Spain Gospel Tour, celebrating the release of our new gospel album. Join us for intimate performances across Spain in December 2025 and January 2026.",
    category: 'tour',
    featured: true,
  },
  {
    slug: 'new-gospel-album-december-2025',
    title: 'New Gospel Album Coming December 15, 2025',
    date: '2025-01-05',
    excerpt:
      'Six soul-stirring tracks celebrating faith, community, and the transformative power of song. Our upcoming gospel album represents decades of musical journey and spiritual growth.',
    category: 'music',
    featured: true,
  },
];

export default function BlogPage() {
  const { language } = useLanguage();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
              {language === 'en' ? 'News & Stories' : 'Noticias e Historias'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Updates, tour announcements, and the stories behind the music'
                : 'Actualizaciones, anuncios de gira y las historias detrás de la música'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent-gold)] mb-8">
            {language === 'en' ? 'Featured Stories' : 'Historias Destacadas'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-8 bg-gradient-to-br from-[var(--accent-burgundy)]/40 to-[var(--accent-warm)]/40 rounded-2xl border-2 border-[var(--accent-gold)]/40 hover:border-[var(--accent-gold)] transition-all hover:scale-[1.02] cursor-pointer h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[var(--accent-gold)] text-black text-xs font-bold rounded-full uppercase">
                        {post.category}
                      </span>
                      <time className="text-gray-400 text-sm">
                        {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--accent-gold)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed flex-grow">{post.excerpt}</p>
                    <div className="mt-6">
                      <span className="text-[var(--accent-gold)] font-medium group-hover:underline">
                        {language === 'en' ? 'Read More →' : 'Leer Más →'}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      {regularPosts.length > 0 && (
        <section className="py-16 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--accent-gold)] mb-8">
              {language === 'en' ? 'All Posts' : 'Todas las Publicaciones'}
            </h2>
            <div className="space-y-6">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="p-6 bg-black/50 border-2 border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)] rounded-xl hover:scale-[1.01] transition-all cursor-pointer">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 bg-[var(--accent-burgundy)] border border-[var(--accent-gold)]/30 text-white text-xs font-bold rounded-full uppercase">
                              {post.category}
                            </span>
                            <time className="text-gray-400 text-sm">
                              {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </time>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2 hover:text-[var(--accent-gold)] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-300">{post.excerpt}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-r from-[var(--accent-burgundy)]/40 to-[var(--accent-warm)]/40 rounded-xl border-2 border-[var(--accent-gold)]/50 text-center"
          >
            <p className="text-[var(--accent-gold)] font-bold text-lg mb-2">
              {language === 'en' ? 'More Stories Coming Soon' : 'Más Historias Próximamente'}
            </p>
            <p className="text-gray-300 mb-6">
              {language === 'en'
                ? 'Subscribe to our newsletter to stay updated on new posts, tour announcements, and music releases.'
                : 'Suscríbete a nuestro boletín para mantenerte actualizado sobre nuevas publicaciones, anuncios de gira y lanzamientos de música.'}
            </p>
            <button
              onClick={() => setIsNewsletterModalOpen(true)}
              className="inline-block px-8 py-3 bg-[var(--accent-gold)] text-black font-bold rounded-xl hover:bg-[var(--accent-gold)] shadow-lg hover:shadow-[0_15px_60px_rgba(212,175,55,0.6)] hover:brightness-110 transition-all transform hover:scale-105"
            >
              {language === 'en' ? 'Stay Connected' : 'Mantente Conectado'}
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Newsletter Modal */}
      <NewsletterModal isOpen={isNewsletterModalOpen} onClose={() => setIsNewsletterModalOpen(false)} />
    </main>
  );
}
