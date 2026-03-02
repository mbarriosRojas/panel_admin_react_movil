const API_URL = import.meta.env.VITE_API_URL || '/api';

export async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  users: {
    getAll: () => fetchApi('/users'),
    getById: (id: string) => fetchApi(`/users/${id}`),
    create: (data: unknown) => fetchApi('/users/create', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
    update: (id: string, data: unknown) => fetchApi(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    }),
    delete: (id: string) => fetchApi(`/users/${id}`, {
      method: 'DELETE',
    }),
  },
  analytics: {
    getDashboard: () => fetchApi('/analytics'),
  },
  content: {
    getAll: () => fetchApi('/content'),
  },
};
