export interface NavItem {
  name: string;
  href: string;
  disabled?: boolean;
  label?: string;
  icon: React.FC;
}

export type IconProps = React.HTMLAttributes<SVGElement>;
