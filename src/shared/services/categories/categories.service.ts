import { api } from '../api';

import { Category, CategoriesResponse } from '@shared/types';

/**
 * Retrieves available job categories.
 */
export async function getCategories(): Promise<Category[]> {
  const response = await api.get<CategoriesResponse>('/remote-jobs/categories');

  return response.jobs;
}
