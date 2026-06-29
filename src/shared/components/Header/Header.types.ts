import { ReactNode } from 'react';

export interface HeaderProps {
  title: string;

  subtitle?: string;

  backButton?: boolean;

  rightComponent?: ReactNode;

  paddingTop?: boolean;
}
