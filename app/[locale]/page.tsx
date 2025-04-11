import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main>
      <header className="header">
        <div className="logo">
          <h1>{t('title')}</h1>
        </div>
        <nav className="nav">
          <select 
            aria-label="Language Selector" 
            className="language-selector"
            onChange={(e) => {
              window.location.href = `/${e.target.value}`;
            }}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>{t('heroTitle')}</h2>
          <p className="subtitle">
            {t('heroSubtitle', { returns: '4%' })}
          </p>
          <div className="highlight-box">
            <p>{t('monthlyReturns')}</p>
          </div>
          <div className="chart-wrapper">
            <div className="chart-placeholder"></div>
          </div>
          <Link href="#get-started" className="cta-button">
            {t('getStarted')}
          </Link>
        </div>
      </section>

      <main className="main-content">
        <h3 id="get-started">{t('getStartedTitle')}</h3>
        <p>{t('getStartedContent')}</p>
      </main>

      <footer className="footer">
        <p>{t('copyright')}</p>
      </footer>
    </main>
  );
} 