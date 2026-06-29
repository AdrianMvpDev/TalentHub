import { create } from 'zustand';

import { getJobs } from '@shared/services';

import { JobsState } from './jobs.types';

/**
 * Global jobs state.
 */
export const useJobsStore = create<JobsState>((set, get) => ({
  jobs: [],

  filteredJobs: [],

  jobTypes: [],

  loading: false,

  error: null,

  fetchJobs: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      const response = await getJobs();

      const jobTypes = [...new Set(response.jobs.map((job) => job.job_type))];

      set({
        jobs: response.jobs,
        filteredJobs: response.jobs,
        jobTypes,
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

  filterJobs: ({ search, category, jobType }) => {
    const normalizedSearch = search.trim().toLowerCase();

    const filteredJobs = get().jobs.filter((job) => {
      const matchesSearch =
        !normalizedSearch ||
        job.title.toLowerCase().includes(normalizedSearch) ||
        job.company_name.toLowerCase().includes(normalizedSearch);

      const matchesCategory = !category || job.category === category;

      const matchesJobType = !jobType || job.job_type === jobType;

      return matchesSearch && matchesCategory && matchesJobType;
    });

    set({
      filteredJobs,
    });
  },

  clearError: () =>
    set({
      error: null,
    }),
}));
