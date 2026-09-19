export const THEME = {
  colors: {
    primary: '#FF5C00', // ONZGO Orange
    dark: '#18110B',    // Espresso Ground
    light: '#FAF6F0',   // Oat Milk Cream
    accent: '#00B4B4',  // Turquoise Cyan
    sand: '#E6E0D6',
  },
  transitions: {
    default: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    smooth: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    bounce: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
} as const;

