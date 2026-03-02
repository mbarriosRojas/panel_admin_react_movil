export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor' | 'user';
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeSessions: number;
  revenue: number;
  growth: number;
}

export interface Content {
  id: string;
  title: string;
  category: string;
  author: string;
  status: 'published' | 'draft';
  createdAt: string;
}

export interface ActivityItem {
  id: string;
  user: string;
  action: string;
  timestamp: string;
}
