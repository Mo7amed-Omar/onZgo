import { NavigationData } from '../types/navigation';

export const navigationData: NavigationData = {
  links: [
    { id: 'story', label: 'Story', href: '#story' },
    { id: 'menu', label: 'Menu', href: '#menu', badge: 'New' },
    { id: 'experience', label: 'The Brew', href: '#experience' },
    { id: 'atmosphere', label: 'Atmosphere', href: '#atmosphere' },
    { id: 'visit', label: 'Visit Us', href: '#visit' },
  ],
  cta: {
    label: 'Order on the Go',
    href: '#menu',
    sublabel: 'Skip the Queue',
  },
};

