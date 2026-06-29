/**
 * Formats job type labels.
 */
export function formatJobType(type: string): string {
  const types: Record<string, string> = {
    full_time: 'Full Time',
    part_time: 'Part Time',
    contract: 'Contract',
    freelance: 'Freelance',
  };

  return types[type] ?? type;
}
