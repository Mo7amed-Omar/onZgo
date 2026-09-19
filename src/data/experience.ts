import { BrewStep, AtmosphereHighlight, LifestyleMoment } from '../types/experience';

export const brewJourneySteps: BrewStep[] = [
  {
    step: '01',
    name: 'Direct Farm Sourcing',
    subtitle: 'High Altitude Single Origins',
    description: 'We partner directly with high-elevation family farms in Ethiopia, Colombia, and Guatemala. Hand-picked ripe cherries ensuring clean, nuanced terroir.',
    details: {
      origin: '1,900m - 2,200m Elevation',
      ratio: 'Direct-Trade Micro-lots',
      notes: 'Floral, stone fruit & crisp citrus',
    },
    image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=900&auto=format&fit=crop',
    accent: 'orange',
  },
  {
    step: '02',
    name: 'Small-Batch Roasting',
    subtitle: 'Precision Thermal Profiling',
    description: 'Roasted weekly on custom drum roasters. Every batch profile is tailored to preserve delicate aromatics while developing velvety sweetness.',
    details: {
      temperature: 'Tailored Curve Profiling',
      ratio: 'Weekly Small Batches',
      notes: 'Caramelization without bitterness',
    },
    image: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=900&auto=format&fit=crop',
    accent: 'espresso',
  },
  {
    step: '03',
    name: 'Micron-Exact Grinding',
    subtitle: 'Zero Heat Retention Burrs',
    description: 'Flat titanium burrs calibrated to the exact humidity and barometric pressure of the morning. Consistent particle distribution prevents channeling.',
    details: {
      grindSize: '98mm Titanium Flat Burrs',
      ratio: 'Gravimetric Precision (±0.05g)',
      notes: 'Peak surface area extraction',
    },
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop',
    accent: 'turquoise',
  },
  {
    step: '04',
    name: 'Multi-Stage Extraction',
    subtitle: 'Reverse Osmosis Re-mineralized Water',
    description: 'Custom mineralized brew water dialed to 120ppm with magnesium & calcium balance, pulled under 9-bar pre-infusion pressure for maximum crema.',
    details: {
      temperature: '93.5°C Multi-Boiler Stability',
      ratio: '1:2.1 Brew Ratio in 28s',
      notes: 'Full body & golden microfoam',
    },
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=900&auto=format&fit=crop',
    accent: 'orange',
  },
  {
    step: '05',
    name: 'The ONZGO Experience',
    subtitle: 'Brew • Bites • Vibes',
    description: 'Poured into pre-warmed ceramic, served with an iced water palater-cleanser, alongside your favorite fresh bite on the sunny outdoor terrace.',
    details: {
      notes: 'Pure sensory delight',
      ratio: 'Handcrafted in real time',
    },
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=900&auto=format&fit=crop',
    accent: 'turquoise',
  },
];

export const atmosphereHighlights: AtmosphereHighlight[] = [
  {
    id: 'outdoor-terrace',
    title: 'The Turquoise Sun Terrace',
    category: 'Outdoor Seating',
    description: 'Bask in natural daylight surrounded by lush greenery, open umbrellas, and signature turquoise chairs.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop',
    tag: 'Outdoor Living',
    aspectRatio: 'wide',
  },
  {
    id: 'espresso-bar',
    title: 'Custom Onyx & Orange Bar',
    category: 'Craft Station',
    description: 'Watch our baristas dial in custom espresso shots on our bespoke La Marzocco machinery.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop',
    tag: 'Barista Craft',
    aspectRatio: 'tall',
  },
  {
    id: 'bakes-counter',
    title: 'Morning Bakery Display',
    category: 'Daily Oven',
    description: 'Warm, golden brioche toasts, twice-baked croissants, and artisan sourdough straight from the oven.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1000&auto=format&fit=crop',
    tag: 'Fresh Oven',
    aspectRatio: 'square',
  },
  {
    id: 'evening-vibes',
    title: 'Golden Hour & Twilight Glow',
    category: 'Vibes & Sounds',
    description: 'As the sun dips, warm festoon lighting and relaxed soulful beats set the tone for evening chillouts.',
    image: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1000&auto=format&fit=crop',
    tag: 'Evening Mood',
    aspectRatio: 'wide',
  },
];

export const lifestyleMoments: LifestyleMoment[] = [
  {
    id: 'morning-rush',
    tag: '07:30 AM',
    title: 'The Morning Ignition',
    caption: 'First sips, crisp air, and fresh croissants that turn early risers into morning lovers.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'afternoon-social',
    tag: '02:00 PM',
    title: 'Terrace Conversations',
    caption: 'Laptops hum, ice clinks in cold brew glasses, and laughter fills the outdoor tables.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'weekend-brunch',
    tag: 'WEEKENDS',
    title: 'Long Unrushed Mornings',
    caption: 'Avocado sourdough, pistachio lattes, and dogs relaxing beside turquoise chair legs.',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=900&auto=format&fit=crop',
  },
];

