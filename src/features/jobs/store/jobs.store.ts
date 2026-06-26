import { create } from 'zustand';

import { JobsState } from './jobs.types';

/**
 * Global jobs state.
 */
export const useJobsStore = create<JobsState>((set) => ({
  loading: false,

  setLoading: (loading) =>
    set({
      loading,
    }),
}));
