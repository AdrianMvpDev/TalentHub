/**
 * Remote job entity.
 */
export interface Job {
  id: number;

  url: string;

  title: string;

  company_name: string;

  company_logo: string | null;

  company_logo_url: string | null;

  category: string;

  tags: string[];

  job_type: string;

  publication_date: string;

  candidate_required_location: string;

  salary: string;

  description: string;
}
