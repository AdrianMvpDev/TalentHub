import { create } from 'zustand';

import { getJobs } from '@shared/services';

import { JobsState } from './jobs.types';

/**
 * Global jobs state.
 */
export const useJobsStore = create<JobsState>((set, get) => ({
  jobs: [],

  filteredJobs: [],

  loading: false,

  error: null,

  search: '',

  fetchJobs: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const response = await getJobs();

      set({
        jobs: response.jobs,
        filteredJobs: response.jobs,
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

  setSearch: (value) => {
    set({
      search: value,
    });

    get().filterJobs();
  },

  filterJobs: () => {
    const { jobs, search } = get();

    const normalizedSearch = search.trim().toLowerCase();

    if (!normalizedSearch) {
      set({
        filteredJobs: jobs,
      });

      return;
    }

    const filteredJobs = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(normalizedSearch) ||
        job.company_name.toLowerCase().includes(normalizedSearch),
    );

    set({
      filteredJobs,
    });
  },

  clearError: () =>
    set({
      error: null,
    }),
}));
