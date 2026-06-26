import { CategoriesResponse } from '@shared/types';

import { api } from '../api';

/**
 * Retrieves job categories.
 */
export async function getCategories() {
  return api.get<CategoriesResponse>('/remote-jobs/categories');
}
