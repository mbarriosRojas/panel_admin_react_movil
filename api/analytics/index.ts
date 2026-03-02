import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    const data = {
      stats: {
        totalUsers: 1234,
        activeSessions: 56,
        revenue: 45678,
        growth: 12.5,
      },
      activities: [
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
        {
          id: '4',
          user: 'Alice Williams',
          action: 'Deleted old content',
          timestamp: new Date(Date.now() - 10800000).toISOString(),
        },
      ],
    };
    return res.status(200).json(data);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
