import { LocationInfo } from '../types/location';

export const locationData: LocationInfo = {
  id: 'onzgo-flagship',
  name: 'ONZGO Coffee Spot',
  subname: 'Flagship Storefront & Outdoor Terrace',
  address: {
    street: '144 Sunlit Boulevard, District 7',
    city: 'Metropolis City',
    district: 'Arts & Design Quarter',
    country: 'CA 90210',
    fullFormatted: '144 Sunlit Boulevard, Arts & Design Quarter, CA 90210',
  },
  contact: {
    phone: '+1 (555) 928-6946',
    displayPhone: '+1 (555) 928-ONZGO',
    email: 'hello@onzgo.cafe',
  },
  schedule: [
    { days: 'Monday – Friday', hours: '07:00 AM – 11:00 PM', isToday: true },
    { days: 'Saturday – Sunday', hours: '07:30 AM – 12:00 AM', isToday: false },
    { days: 'Terrace & Outdoor Bar', hours: 'Open Daily until close', isToday: false },
  ],
  currentStatus: {
    isOpen: true,
    statusText: 'Open Now',
    closingTime: '11:00 PM',
  },
  features: [
    {
      icon: 'Sun',
      title: 'Vibrant Outdoor Terrace',
      description: 'Heated open-air seating with signature turquoise chairs and natural sun shade.',
    },
    {
      icon: 'Wifi',
      title: 'High-Speed Fiber Wi-Fi',
      description: 'Dedicated workspace tables equipped with under-table power ports & fast charging.',
    },
    {
      icon: 'Sparkles',
      title: 'Pet Friendly Atmosphere',
      description: 'Complimentary fresh water bowls and housemade oat-peanut puppuccinos.',
    },
    {
      icon: 'Coffee',
      title: 'Walk-Up Express Bar',
      description: 'Need it on the go? Order ahead or grab a rapid pour straight from the street window.',
    },
  ],
  maps: {
    embedQuery: 'https://maps.google.com/?q=Specialty+Coffee+Terrace',
    googleMapsUrl: 'https://maps.google.com/?q=ONZGO+Coffee+Spot',
    appleMapsUrl: 'https://maps.apple.com/?q=ONZGO+Coffee',
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop',
    outdoor: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1200&auto=format&fit=crop',
    counter: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop',
  },
};

