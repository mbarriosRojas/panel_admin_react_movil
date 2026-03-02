import type { VercelRequest, VercelResponse } from '@vercel/node';

const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'editor',
    status: 'active',
    createdAt: new Date().toISOString(),
  },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const user = mockUsers.find(u => u.id === id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    return res.status(200).json(user);
  }

  if (req.method === 'PUT') {
    const user = mockUsers.find(u => u.id === id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const updatedUser = { ...user, ...req.body };
    return res.status(200).json(updatedUser);
  }

  if (req.method === 'DELETE') {
    return res.status(200).json({ success: true, message: 'User deleted' });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
