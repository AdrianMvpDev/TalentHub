export type BadgeVariant = 'primary' | 'secondary' | 'success';

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}
