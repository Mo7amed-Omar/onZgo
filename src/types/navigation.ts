export interface NavLink {
  id: string;
  label: string;
  href: string;
  badge?: string;
}

export interface NavigationData {
  links: NavLink[];
  cta: {
    label: string;
    href: string;
    sublabel?: string;
  };
}

