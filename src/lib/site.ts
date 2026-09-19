import matter from 'gray-matter';
import rawSite from '@data/site.md?raw';

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroSettings {
  badge: string;
  title: string;
  subtitle: string;
  imageDesktop: string;
  imageMobile: string;
  ctaText: string;
  ctaUrl: string;
  stats: HeroStat[];
}

export interface CredentialItem {
  title: string;
  description: string;
}

export interface PageSettings {
  title: string;
  description: string;
  heading?: string;
  intro?: string;
  badge?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  hero: HeroSettings;
  credentials: CredentialItem[];
  pages: {
    layanan: PageSettings;
    portofolio: PageSettings;
    blog: PageSettings;
    kontak: PageSettings;
  };
}

const { data } = matter(rawSite);

export const SITE_SETTINGS: SiteSettings = {
  siteName: data.siteName || 'Sriwijaya Grafika',
  tagline: data.tagline || 'Spesialis Signage & Advertising di Palembang',
  hero: {
    badge: data.hero?.badge || 'Spesialis Signage & Advertising di Palembang',
    title: data.hero?.title || 'Kembangkan Bisnis bersama Sriwijaya Grafika',
    subtitle: data.hero?.subtitle || '',
    imageDesktop: data.hero?.imageDesktop || '/img/hero/hero.webp',
    imageMobile: data.hero?.imageMobile || '/img/hero/hero_mobile.webp',
    ctaText: data.hero?.ctaText || 'Hubungi Kami',
    ctaUrl: data.hero?.ctaUrl || '/kontak',
    stats: Array.isArray(data.hero?.stats) ? data.hero.stats : [],
  },
  credentials: Array.isArray(data.credentials) ? data.credentials : [],
  pages: {
    layanan: data.pages?.layanan || {
      title: 'Jasa Advertising Palembang: Huruf Timbul & Neon Box Bergaransi',
      description: '',
    },
    portofolio: data.pages?.portofolio || {
      title: 'Galeri Portofolio | Hasil Karya Reklame & Huruf Timbul Palembang',
      description: '',
    },
    blog: data.pages?.blog || {
      title: 'Blog & Tips Advertising Palembang | Sriwijaya Grafika',
      description: '',
    },
    kontak: data.pages?.kontak || {
      title: 'Hubungi Kami | Sriwijaya Grafika Palembang',
      description: '',
    },
  },
};
