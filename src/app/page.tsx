'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import SectionHeading from '@/components/ui/SectionHeading';
import { bioContent } from '@/data/bio';
import { tourDates } from '@/data/tourDates';
import { musicLinks } from '@/data/musicLinks';
import { completeAlbums } from '@/data/albums-complete';
import { useLanguage } from '@/contexts/LanguageContext';
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from '@/lib/animations';

export default function Home() {
  const { language, t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/atherton-duo-1.jpeg"
            alt="Atherton Music Duo"
            fill
            className="object-cover object-[center_35%] opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 pb-20">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            {/* Tagline at Top */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl mb-8 text-[var(--accent-cream)] font-light italic"
              variants={fadeInUp}
            >
              "{bioContent.tagline}"
            </motion.p>

            {/* Tonight's Show Flyer */}
            <motion.div variants={scaleIn} className="mb-8">
              <Image
                src="/images/tonight-show-flyer.jpg"
                alt="Tonight's Show - Walburg German Restaurant"
                width={600}
                height={800}
                className="mx-auto rounded-2xl shadow-2xl border-2 border-[var(--accent-gold)]"
                priority
              />
            </motion.div>

            {/* Tonight's Show Info Card */}
            <motion.div variants={scaleIn} className="mb-12">
              <Card variant="highlight" padding="lg" className="max-w-3xl mx-auto bg-gradient-to-r from-red-600/50 to-orange-600/50 border-2 border-[var(--accent-gold)]">
                <p className="text-[var(--accent-gold)] font-bold text-base md:text-lg mb-2 uppercase tracking-wider animate-pulse">
                  TONIGHT - November 19th
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  Walburg German Restaurant
                </h2>
                <p className="text-gray-100 text-base md:text-lg mb-6 font-semibold">
                  3777 FM 972, Walburg, TX
                </p>
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center">
                  <Button
                    as="link"
                    href="https://www.google.com/maps/search/?api=1&query=3777+FM+972+Walburg+TX"
                    variant="primary"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </Button>
                  <Button as="link" href="/tour" variant="ghost" size="lg">
                    View All Shows
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 gradient-text"
              variants={fadeInUp}
            >
              Atherton
            </motion.h1>

            <motion.p
              className="text-lg md:text-2xl lg:text-3xl mb-16 text-gray-200 max-w-4xl mx-auto font-medium"
              variants={fadeInUp}
            >
              {t('home.subtitle')}
            </motion.p>

            <motion.div variants={scaleIn}>
              <Card variant="highlight" padding="lg" className="max-w-3xl mx-auto mb-12">
                <p className="text-[var(--accent-gold)] font-bold text-base md:text-lg mb-3 uppercase tracking-wider">
                  {t('home.new_album')}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {t('home.album_date')}
                </h2>
                <p className="text-gray-100 text-base md:text-lg mb-8 leading-relaxed">
                  {t('home.album_desc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center">
                  <Button as="link" href="/music" variant="primary" size="lg">
                    {t('home.pre_order')}
                  </Button>
                  <Button as="link" href="/tour" variant="ghost" size="lg">
                    {t('home.tour_cta')}
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={fadeInUp}
            >
              <Button as="link" href="/music" variant="outline" size="lg">
                {t('common.listen_now')}
              </Button>
              <Button as="link" href="/about" variant="ghost" size="lg">
                {language === 'en' ? 'Our Story' : 'Nuestra Historia'}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-32 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-16"
          >
            {[
              { title: t('nav.discography'), desc: '11 Albums', href: '/discography' },
              { title: t('nav.videos'), desc: language === 'en' ? 'Watch Performances' : 'Ver Presentaciones', href: '/videos' },
              { title: t('nav.tour'), desc: '2025 Shows', href: '/tour' },
              { title: t('nav.gallery'), desc: language === 'en' ? 'Photos' : 'Fotos', href: '/gallery' },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div variants={staggerItem}>
                  <Card hover padding="lg" className="text-center group cursor-pointer">
                    <h3 className="text-2xl font-bold text-[var(--accent-gold)] mb-2 group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-100 text-sm">{item.desc}</p>
                  </Card>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Music Platforms */}
      <section className="py-32 bg-gradient-to-b from-black via-[var(--accent-burgundy)]/10 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading size="xl" className="mb-6">
            {t('home.listen_everywhere')}
          </SectionHeading>
          <p className="text-xl text-[var(--accent-cream)] mb-16 max-w-2xl mx-auto">
            {t('home.stream_platforms')}
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
          >
            {musicLinks.map((link) => (
              <motion.div key={link.platform} variants={staggerItem}>
                <Card
                  as="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="highlight"
                  padding="lg"
                  hover
                  className="text-center group flex flex-col items-center justify-center min-h-[120px]"
                >
                  <div className="text-3xl mb-2 text-[var(--accent-gold)] group-hover:text-white transition-colors">♪</div>
                  <p className="text-[var(--accent-gold)] font-bold text-base group-hover:text-white transition-colors">
                    {link.platform}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Albums */}
      <section className="py-32 bg-gradient-to-b from-black to-[var(--accent-burgundy)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <SectionHeading size="xl" className="mb-6">
              {t('home.featured_albums')}
            </SectionHeading>
            <Link
              href="/discography"
              className="text-[var(--accent-gold)] hover:text-white transition-colors duration-300 text-lg inline-block"
            >
              {t('home.view_discography')}
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-16"
          >
            {completeAlbums.slice(0, 3).map((album) => (
              <motion.div key={album.title} variants={staggerItem} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-2xl">
                  <Image
                    src={album.coverArt}
                    alt={album.title}
                    width={500}
                    height={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {album.featured && (
                    <div className="absolute top-4 right-4 px-4 py-2 bg-[var(--accent-gold)] text-black font-bold rounded-full text-sm">
                      NEW
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{album.title}</h3>
                <p className="text-[var(--accent-gold)] font-semibold mb-4">{album.year}</p>
                <p className="text-gray-100 text-sm leading-relaxed mb-4">
                  {album.description.substring(0, 150)}...
                </p>
                <Button as="link" href="/discography" variant="secondary" size="sm">
                  {t('common.learn_more')}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tour Dates Preview */}
      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <SectionHeading size="xl" className="mb-6">
              {t('home.upcoming_shows')}
            </SectionHeading>
            <Link
              href="/tour"
              className="text-[var(--accent-gold)] hover:text-white transition-colors duration-300 text-lg inline-block"
            >
              {t('home.view_full_schedule')}
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16 max-w-4xl mx-auto"
          >
            {tourDates.slice(0, 5).map((show, index) => (
              <motion.div key={`${show.date}-${index}`} variants={staggerItem}>
                <Card
                  variant={show.isSpainTour ? 'highlight' : 'default'}
                  padding="lg"
                  hover
                  className={!show.isSpainTour ? 'border-2 border-[var(--accent-gold)]/30 hover:border-[var(--accent-gold)]' : ''}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    {show.isSpainTour && (
                      <div className="md:w-48 h-32 relative rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src="/images/spain-tour-leeann.jpeg"
                          alt="Spain Gospel Tour"
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 192px"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        {show.isSpainTour && (
                          <span className="px-3 py-1 bg-[var(--accent-gold)] text-black text-xs font-bold rounded-full">
                            SPAIN
                          </span>
                        )}
                        <p className="text-[var(--accent-gold)] font-bold text-lg">
                          {new Date(show.date).toLocaleDateString(
                            language === 'en' ? 'en-US' : 'es-ES',
                            {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            }
                          )}
                        </p>
                        {show.time && <span className="text-gray-400 text-sm">{show.time}</span>}
                      </div>
                      <h4 className="text-white font-bold text-xl mb-1">{show.venue}</h4>
                      <p className="text-gray-100 text-base">{show.location}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
