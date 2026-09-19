import { BrandInfo } from '../types/brand';

export const brandData: BrandInfo = {
  name: 'ONZGO',
  tagline: 'BREW • BITES • VIBES',
  taglineParts: {
    brew: 'BREW',
    bites: 'BITES',
    vibes: 'VIBES',
  },
  headline: 'WHERE SPECIALTY COFFEE MEETS VIBRANT SOCIAL LIVING.',
  subheadline:
    'From masterfully roasted single-origin brews and freshly baked artisan bites to sunny outdoor terrace vibes, ONZGO is your everyday neighborhood sanctuary.',
  story: {
    lead: 'Born from a relentless obsession with extraordinary coffee, lively conversations, and sun-drenched outdoor energy.',
    paragraphs: [
      'ONZGO was founded on a simple conviction: great coffee should never feel cold, rigid, or detached. We believe the magic happens when precision brewing meets an infectious, open-air social atmosphere.',
      'Every bean in our hoppers is ethically sourced from smallholder estates and dialled in daily by our passionate baristas. Every bite is prepared fresh from artisan sourdoughs, flaky croissants, and balanced morning plates.',
      'Whether you are dropping in for a swift espresso on the go, settling in for a sunlit afternoon workspace, or catching up with friends on our turquoise terrace chairs, ONZGO is crafted to be your daily spark.',
    ],
    quote: 'We do not just pour coffee. We curate an everyday ritual of flavor, comfort, and positive energy.',
    quoteAuthor: 'The ONZGO Collective',
  },
  metrics: [
    {
      id: 'beans',
      value: '100%',
      label: 'Specialty Arabica',
      sublabel: 'Ethically sourced microlots',
    },
    {
      id: 'coldbrew',
      value: '18h',
      label: 'Slow Steeped',
      sublabel: 'Signature velvet cold brew',
    },
    {
      id: 'baked',
      value: 'Daily',
      label: 'Fresh Baked Bites',
      sublabel: 'Artisan pastries & brioche',
    },
    {
      id: 'community',
      value: '4.9★',
      label: 'Community Love',
      sublabel: 'Over 2,500+ daily regulars',
    },
  ],
  pillars: [
    {
      id: 'brew',
      tag: '01 / PRECISION CRAFT',
      title: 'Obsessive Brew Science',
      description:
        'Pressure-profiled espresso extraction, custom water mineral profiles, and temperature-controlled pour overs.',
      accentColor: '#FF5C00',
      iconName: 'Coffee',
    },
    {
      id: 'bites',
      tag: '02 / ARTISAN KITCHEN',
      title: 'Handcrafted Daily Bites',
      description:
        'Warm flaky pastries, open-faced gourmet sourdoughs, and vibrant bowls designed to pair flawlessly with your cup.',
      accentColor: '#18110B',
      iconName: 'Utensils',
    },
    {
      id: 'vibes',
      tag: '03 / SOCIAL SANCTUARY',
      title: 'Sunlit Outdoor Energy',
      description:
        'Open storefronts, lively playlist curation, signature turquoise seating, and friendly neighborhood smiles.',
      accentColor: '#00B4B4',
      iconName: 'Sparkles',
    },
  ],
  socialLinks: [
    {
      platform: 'instagram',
      label: 'Instagram',
      url: 'https://instagram.com/onzgo.cafe',
      handle: '@onzgo.cafe',
    },
    {
      platform: 'tiktok',
      label: 'TikTok',
      url: 'https://tiktok.com/@onzgo.cafe',
      handle: '@onzgo.cafe',
    },
    {
      platform: 'maps',
      label: 'Google Maps',
      url: 'https://maps.google.com/?q=ONZGO+Coffee',
      handle: 'ONZGO Coffee Spot',
    },
  ],
  copyright: `© ${new Date().getFullYear()} ONZGO Coffee Co. All rights reserved. Brew • Bites • Vibes.`,
};

