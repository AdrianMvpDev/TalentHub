import { ENV } from '@shared/constants/env';

/**
 * Generic HTTP client.
 */
class ApiClient {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${ENV.API_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error('Request failed.');
    }

    return response.json();
  }
}

export const api = new ApiClient();
