/**
 * Remote job entity.
 */
export interface Job {
  id: number;
  title: string;
  company_name: string;
  company_logo: string | null;
  candidate_required_location: string;
  category: string;
  job_type: string;
  publication_date: string;
  salary: string;
  description: string;
  url: string;
}
