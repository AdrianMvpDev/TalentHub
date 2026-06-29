import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';

import { useTheme } from '@shared/hooks';
import { cleanHtml } from '@shared/utils/html/cleanHtml';

import { createBaseHtmlStyle, createHtmlStyles } from './jobDescription.styles';

interface Props {
  /**
   * HTML description returned by the API.
   */
  html: string;
}

/**
 * JobDescription
 *
 * Renders HTML job descriptions returned by external APIs.
 *
 * The incoming HTML frequently contains:
 * - Microsoft Word / Outlook inline styles.
 * - Table attributes.
 * - Legacy sizing attributes.
 * - Unnecessary spacing between tags.
 *
 * We intentionally preserve the semantic HTML while removing
 * presentation-related attributes so the application theme can
 * control the visual appearance.
 */
export function JobDescription({ html }: Props) {
  /**
   * Available width used by RenderHtml to correctly
   * calculate text, images and table dimensions.
   */
  const { width } = useWindowDimensions();

  /**
   * Current application theme.
   */
  const { theme } = useTheme();

  /**
   * Sanitized HTML content.
   *
   * Removes legacy Word, Outlook and inline styling while
   * preserving semantic tags such as headings, links,
   * lists and tables.
   */
  const sanitizedHtml = cleanHtml(html);

  /**
   * Memoized HTML tag styles.
   *
   * Styles are recreated only when the application theme
   * changes, preventing unnecessary object allocations.
   */
  const tagsStyles = useMemo(() => createHtmlStyles(theme), [theme]);

  /**
   * Base typography styles applied to the entire HTML tree.
   *
   * These styles provide the default text color,
   * font size and line height.
   */
  const baseStyle = useMemo(() => createBaseHtmlStyle(theme), [theme]);

  return (
    <RenderHtml
      contentWidth={width - 32}
      enableExperimentalMarginCollapsing
      source={{
        html: sanitizedHtml,
      }}
      renderersProps={{
        img: {
          enableExperimentalPercentWidth: true,
        },

        table: {
          horizontalScroll: true,
        },
      }}
      baseStyle={baseStyle}
      tagsStyles={tagsStyles}
    />
  );
}
