export interface BrewStep {
  step: string;
  name: string;
  subtitle: string;
  description: string;
  details: {
    origin?: string;
    temperature?: string;
    ratio?: string;
    grindSize?: string;
    notes?: string;
  };
  image: string;
  accent: 'orange' | 'turquoise' | 'espresso' | 'cream';
}

export interface AtmosphereHighlight {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tag: string;
  aspectRatio?: 'tall' | 'wide' | 'square';
}

export interface LifestyleMoment {
  id: string;
  tag: string;
  title: string;
  caption: string;
  image: string;
}

