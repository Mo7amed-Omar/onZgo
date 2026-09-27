/**
 * ONZGO — Content & Config
 * ──────────────────────────────────────────────────────────────
 * THE ONLY PLACE to edit text, links, and business info.
 * All other files reference keys from this object.
 *
 * HOW TO EDIT:
 *  1. Text:        change the string values in ar:{} and en:{}
 *  2. Business:    fill in CONFIG placeholders below
 *  3. Menu PDFs:   drop menu-ar.pdf and menu-en.pdf in assets/menu/
 *  4. Socials:     set CONFIG.instagram and CONFIG.facebook to full URLs
 *                  Leave as empty string '' to hide the icon automatically.
 * ──────────────────────────────────────────────────────────────
 */

/* ── Business Config ─────────────────────────────────────────── */
const CONFIG = {
  menuPdf: {
    ar: 'assets/menu/menu-ar.pdf',
    en: 'assets/menu/menu-en.pdf',
  },
  whatsapp: '201000000000',
  mapsUrl:  'https://maps.google.com',
  instagram: 'https://instagram.com',
  facebook:  'https://facebook.com',
  address:  'القاهرة، مصر',
  hours:    'يومياً: ٧:٠٠ ص – ١٢:٠٠ م',
  phone:    '+20 100 000 0000',
};

/* ── Bilingual Copy ──────────────────────────────────────────── */
const CONTENT = {
  ar: {
    /* Meta */
    pageTitle:        'ONZGO — قهوة ماشية',
    langLabel:        'EN',        // label shown on the toggle button
    langLabelAria:    'Switch to English',

    /* Header / Nav */
    navBrew:          'القهوة',
    navVibes:         'الأجواء',
    navVisit:         'زورونا',
    navMenu:          'شوف المنيو',
    navClose:         'إغلاق',
    logoAlt:          'شعار ONZGO',

    /* Hero */
    heroHeadline:     'قهوتك <span class="onz-highlight">ماشية معاك</span>.',
    heroTagline:      'BREW • VIBES',

    /* Brew */
    brewTitle:        'القهوة',
    brewBody:         'قهوة طازجة على مزاجك.',
    brewBtn:          'شوف المنيو',
    brewBtnAria:      'افتح قائمة المشروبات',

    /* Vibes */
    vibesTitle:       'الأجواء',
    vibesBody:        'اقعد ريّح، أو خدها وامشي.',
    vibesImgAlt:      'واجهة متجر ONZGO',

    /* Visit */
    visitTitle:       'زورونا',
    visitAddress:     CONFIG.address,
    visitHours:       CONFIG.hours,
    visitPhone:       CONFIG.phone,
    visitBtn:         'الاتجاهات',
    visitBtnAria:     'افتح الموقع على الخريطة',

    /* Footer */
    footerLinks: [
      { label: 'القهوة',   href: '#brew'  },
      { label: 'الأجواء',  href: '#vibes' },
      { label: 'زورونا',   href: '#visit' },
    ],
    footerCopy:       '© ONZGO. جميع الحقوق محفوظة.',

    /* Floating button */
    fabAria:          'تواصل معنا على واتساب',

    /* Offcanvas menu PDF label */
    offcanvasMenuAria: 'افتح قائمة المنيو',
  },

  en: {
    /* Meta */
    pageTitle:        'ONZGO — Coffee On The Go',
    langLabel:        'AR',
    langLabelAria:    'التبديل إلى العربية',

    /* Header / Nav */
    navBrew:          'Brew',
    navVibes:         'Vibes',
    navVisit:         'Visit Us',
    navMenu:          'View the menu',
    navClose:         'Close',
    logoAlt:          'ONZGO logo',

    /* Hero */
    heroHeadline:     'Your coffee, <span class="onz-highlight">on the go</span>.',
    heroTagline:      'BREW • VIBES',

    /* Brew */
    brewTitle:        'Brew',
    brewBody:         'Fresh coffee, made your way.',
    brewBtn:          'View the menu',
    brewBtnAria:      'Open the drinks menu',

    /* Vibes */
    vibesTitle:       'Vibes',
    vibesBody:        'Sit back, or grab it and go.',
    vibesImgAlt:      'ONZGO storefront',

    /* Visit */
    visitTitle:       'Visit Us',
    visitAddress:     'Cairo, Egypt',
    visitHours:       'Daily: 7:00 AM – 12:00 AM',
    visitPhone:       '+20 100 000 0000',
    visitBtn:         'Get directions',
    visitBtnAria:     'Open location on map',

    /* Footer */
    footerLinks: [
      { label: 'Brew',     href: '#brew'  },
      { label: 'Vibes',    href: '#vibes' },
      { label: 'Visit Us', href: '#visit' },
    ],
    footerCopy:       '© ONZGO. All rights reserved.',

    /* Floating button */
    fabAria:          'Chat with us on WhatsApp',

    /* Offcanvas menu PDF label */
    offcanvasMenuAria: 'Open the menu PDF',
  },
};

/* ── Placeholder helpers ─────────────────────────────────────── */
/**
 * Returns true if a CONFIG value is still a placeholder string.
 */
function isPlaceholder(val) {
  if (!val) return true;
  return val.startsWith('[') && val.endsWith(']');
}

/**
 * Returns the WhatsApp URL or null if not yet configured.
 */
function getWhatsAppUrl() {
  if (isPlaceholder(CONFIG.whatsapp)) return null;
  return `https://wa.me/${CONFIG.whatsapp}`;
}

/**
 * Returns the Maps URL or '#' fallback.
 */
function getMapsUrl() {
  if (isPlaceholder(CONFIG.mapsUrl)) return '#';
  return CONFIG.mapsUrl;
}

// Expose globals
window.ONZGO = window.ONZGO || {};
window.ONZGO.CONFIG = CONFIG;
window.ONZGO.CONTENT = CONTENT;
window.ONZGO.isPlaceholder = isPlaceholder;
window.ONZGO.getWhatsAppUrl = getWhatsAppUrl;
window.ONZGO.getMapsUrl = getMapsUrl;
