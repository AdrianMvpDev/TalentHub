/**
 * Creates the HTML tag styles used by react-native-render-html.
 *
 * All presentation concerns live here so the JobDescription
 * component remains focused on rendering.
 *
 * Styles are theme-aware and automatically adapt to
 * light and dark mode.
 */

import { useTheme } from '@shared/hooks';
import { MixedStyleDeclaration } from 'react-native-render-html';

type Theme = ReturnType<typeof useTheme>['theme'];

export function createHtmlStyles(theme: Theme): Record<string, MixedStyleDeclaration> {
  return {
    body: {
      color: theme.colors.text,
      fontSize: 15,
      lineHeight: 26,
    },

    p: {
      color: theme.colors.text,
      lineHeight: 26,
    },

    h1: {
      fontSize: 30,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
      lineHeight: 38,
    },

    h2: {
      fontSize: 24,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.primary,
      lineHeight: 32,
    },

    h3: {
      fontSize: 20,
      fontWeight: theme.typography.fontWeight.bold,
      color: theme.colors.text,
      lineHeight: 28,
    },

    h4: {
      fontSize: 17,
      fontWeight: '600',
      color: theme.colors.text,
    },

    strong: {
      color: theme.colors.text,
      fontWeight: theme.typography.fontWeight.bold,
    },

    b: {
      fontWeight: theme.typography.fontWeight.bold,
    },

    em: {
      color: theme.colors.textSecondary,
      fontStyle: 'italic',
    },

    a: {
      color: theme.colors.primary,
      textDecorationLine: 'underline',
      fontWeight: '600',
    },

    ul: {
      paddingLeft: 12,
    },

    ol: {
      paddingLeft: 12,
    },

    li: {
      color: theme.colors.text,
      lineHeight: 24,
    },

    hr: {
      borderColor: theme.colors.border,
      borderBottomWidth: 1,
    },

    blockquote: {
      borderLeftWidth: 4,
      borderLeftColor: theme.colors.primary,
      paddingLeft: 16,
      paddingVertical: 8,
      color: theme.colors.textSecondary,
      backgroundColor: theme.colors.surface,
      borderRadius: 8,
    },

    pre: {
      backgroundColor: theme.colors.surface,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 12,
      padding: 16,
    },

    code: {
      color: theme.colors.primary,
      fontSize: 14,
    },

    table: {
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: 16,
      overflow: 'hidden',
      backgroundColor: theme.colors.background,
    },

    thead: {
      backgroundColor: theme.colors.surface,
    },

    tbody: {
      backgroundColor: theme.colors.background,
    },

    tr: {
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },

    th: {
      paddingVertical: 14,
      paddingHorizontal: 16,
      backgroundColor: theme.colors.surface,
      color: theme.colors.text,
      fontWeight: theme.typography.fontWeight.bold,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },

    td: {
      paddingVertical: 14,
      paddingHorizontal: 16,
      color: theme.colors.text,
      borderWidth: 1,
      borderColor: theme.colors.border,
      lineHeight: 22,
    },

    img: {
      borderRadius: 16,
    },

    div: {
      color: theme.colors.text,
    },
  };
}

export function createBaseHtmlStyle(theme: Theme) {
  return {
    color: theme.colors.text,
    fontSize: 15,
    lineHeight: 26,
  };
}
