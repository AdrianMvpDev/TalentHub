/**
 * Formats a publication date.
 */
export function formatDate(value: string) {
  return new Date(value).toLocaleDateString();
}
