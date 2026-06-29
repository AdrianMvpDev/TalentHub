import { Job } from '@shared/types';

export interface JobsListProps {
  /**
   * Jobs to render.
   */
  jobs: Job[];

  /**
   * Loading state.
   */
  loading?: boolean;

  /**
   * Pull to refresh state.
   */
  refreshing?: boolean;

  /**
   * Pull to refresh callback.
   */
  onRefresh?: () => void;

  /**
   * Job press callback.
   */
  onJobPress?: (job: Job) => void;

  /**
   * Optional list title.
   */
  title?: string;

  /**
   * Optional list subtitle.
   */
  subtitle?: string;

  /**
   * Empty state title.
   */
  emptyTitle?: string;

  /**
   * Empty state description.
   */
  emptyDescription?: string;

  /**
   * Controls whether the header is rendered.
   */
  showHeader?: boolean;
}
