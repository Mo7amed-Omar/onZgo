import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        onzgo: {
          orange: {
            50: '#FFF6F0',
            100: '#FFEBDC',
            200: '#FFD3B3',
            300: '#FFAF7A',
            400: '#FF813B',
            500: '#FF5C00', // Brand Primary Orange
            600: '#E64B00',
            700: '#BF3800',
            800: '#992B00',
            900: '#7A2200',
            DEFAULT: '#FF5C00',
          },
          espresso: {
            50: '#F7F5F3',
            100: '#EBE5DF',
            200: '#D5C7BB',
            300: '#B8A392',
            400: '#8E7562',
            500: '#5E4C3D',
            600: '#46372C',
            700: '#33271E',
            800: '#231913',
            900: '#18110B', // Rich Coffee Ground
            950: '#0F0A06', // Pure Dark Roast
            DEFAULT: '#18110B',
          },
          cream: {
            50: '#FCFAF7',
            100: '#FAF6F0', // Oat Milk / Warm Background
            200: '#F2EADB',
            300: '#E8DCBF',
            400: '#DAC69E',
            DEFAULT: '#FAF6F0',
          },
          turquoise: {
            50: '#F0FDFA',
            100: '#CCFBF1',
            200: '#99F6E4',
            300: '#5EEAD4',
            400: '#2DD4BF',
            500: '#00B4B4', // Brand Accent Cyan/Turquoise
            600: '#009696',
            700: '#0F766E',
            800: '#115E59',
            DEFAULT: '#00B4B4',
          },
          sand: {
            50: '#F9F8F6',
            100: '#F2EFEB',
            200: '#E6E0D6',
            300: '#D5CCBF',
            DEFAULT: '#E6E0D6',
          }
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Cabinet Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'widest-xl': '0.25em',
        'widest-2xl': '0.35em',
      },
      boxShadow: {
        'soft-glow': '0 0 50px -10px rgba(255, 92, 0, 0.25)',
        'turq-glow': '0 0 50px -10px rgba(0, 180, 180, 0.25)',
        'card-warm': '0 20px 40px -15px rgba(24, 17, 11, 0.08)',
        'card-hover': '0 30px 60px -15px rgba(24, 17, 11, 0.16)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(0.98)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

