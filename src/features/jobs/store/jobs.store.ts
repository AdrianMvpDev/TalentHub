import { create } from 'zustand';

import { getJobs } from '@shared/services';

import { JobsState } from './jobs.types';

/**
 * Global jobs state.
 */
export const useJobsStore = create<JobsState>((set) => ({
  jobs: [],

  loading: false,

  error: null,

  fetchJobs: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const response = await getJobs();

      set({
        jobs: response.jobs,
        loading: false,
      });
    } catch (error) {
      console.error(error);

      set({
        error: 'Unable to load jobs.',
        loading: false,
      });
    }
  },

  clearError: () =>
    set({
      error: null,
    }),
}));
