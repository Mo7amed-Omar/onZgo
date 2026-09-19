export interface BrandMetric {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
}

export interface BrandPillar {
  id: string;
  tag: string;
  title: string;
  description: string;
  accentColor?: string;
  iconName: string;
}

export interface SocialLink {
  platform: 'instagram' | 'tiktok' | 'twitter' | 'facebook' | 'maps';
  label: string;
  url: string;
  handle: string;
}

export interface BrandInfo {
  name: string;
  tagline: string;
  taglineParts: {
    brew: string;
    bites: string;
    vibes: string;
  };
  headline: string;
  subheadline: string;
  story: {
    lead: string;
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
  };
  metrics: BrandMetric[];
  pillars: BrandPillar[];
  socialLinks: SocialLink[];
  copyright: string;
}

