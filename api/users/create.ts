import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    const newUser = {
      id: Math.random().toString(36).substr(2, 9),
      ...req.body,
      status: 'active',
      createdAt: new Date().toISOString(),
    };
    return res.status(201).json(newUser);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
