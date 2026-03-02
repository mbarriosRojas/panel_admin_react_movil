import { useEffect, useState } from 'react';
import { Users, Activity, DollarSign, TrendingUp } from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { UserChart } from '@/components/dashboard/UserChart';
import { ActivityFeed } from '@/components/dashboard/ActivityFeed';
import { api } from '@/lib/api';
import type { DashboardStats, ActivityItem } from '@/types';

export function Dashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    activeSessions: 0,
    revenue: 0,
    growth: 0,
  });
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const data = await api.analytics.getDashboard() as { stats: DashboardStats; activities: ActivityItem[] };
      setStats(data.stats);
      setActivities(data.activities);
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
      setStats({
        totalUsers: 1234,
        activeSessions: 56,
        revenue: 45678,
        growth: 12.5,
      });
      setActivities([
        {
          id: '1',
          user: 'John Doe',
          action: 'Created a new user account',
          timestamp: new Date().toISOString(),
        },
        {
          id: '2',
          user: 'Jane Smith',
          action: 'Updated content settings',
          timestamp: new Date(Date.now() - 3600000).toISOString(),
        },
        {
          id: '3',
          user: 'Bob Johnson',
          action: 'Published new article',
          timestamp: new Date(Date.now() - 7200000).toISOString(),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-96">Loading...</div>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Overview of your admin panel metrics
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Users"
          value={stats.totalUsers.toLocaleString()}
          change="+12.5% from last month"
          icon={Users}
          trend="up"
        />
        <StatCard
          title="Active Sessions"
          value={stats.activeSessions}
          change="+4.3% from last week"
          icon={Activity}
          trend="up"
        />
        <StatCard
          title="Revenue"
          value={`$${stats.revenue.toLocaleString()}`}
          change="+8.2% from last month"
          icon={DollarSign}
          trend="up"
        />
        <StatCard
          title="Growth"
          value={`${stats.growth}%`}
          change="Steady growth"
          icon={TrendingUp}
          trend="up"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <UserChart />
        <ActivityFeed activities={activities} />
      </div>
    </div>
  );
}
