/**
 * Cleans HTML coming from external providers such as
 * Word, Outlook, ATS platforms and email editors.
 *
 * The purpose is to remove presentational attributes
 * while preserving semantic tags so the application
 * can control the final appearance.
 */
export function cleanHtml(html: string): string {
  return (
    html
      /**
       * Remove inline styles.
       */
      .replace(/style="[^"]*"/gi, '')

      /**
       * Remove legacy table attributes.
       */
      .replace(/border="[^"]*"/gi, '')
      .replace(/width="[^"]*"/gi, '')
      .replace(/height="[^"]*"/gi, '')
      .replace(/cellpadding="[^"]*"/gi, '')
      .replace(/cellspacing="[^"]*"/gi, '')

      /**
       * Prevent text nodes from sticking together.
       */
      .replace(/>\s+</g, '> <')

      /**
       * Replace non-breaking spaces.
       */
      .replace(/&nbsp;/gi, ' ')

      /**
       * Remove empty paragraphs.
       */
      .replace(/<p>\s*<\/p>/gi, '')
  );
}
