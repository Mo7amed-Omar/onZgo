export type Size = 'sm' | 'md' | 'lg' | 'xl';

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'turquoise' | 'dark';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

