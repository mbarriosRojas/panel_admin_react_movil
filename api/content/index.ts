import type { VercelRequest, VercelResponse } from '@vercel/node';

const mockContent = [
  {
    id: '1',
    title: 'Getting Started Guide',
    category: 'Documentation',
    author: 'John Doe',
    status: 'published',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'API Reference',
    category: 'Documentation',
    author: 'Jane Smith',
    status: 'published',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Product Announcement',
    category: 'Blog',
    author: 'Bob Johnson',
    status: 'draft',
    createdAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Tutorial: Advanced Features',
    category: 'Tutorial',
    author: 'Alice Williams',
    status: 'published',
    createdAt: new Date().toISOString(),
  },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(mockContent);
  }

  if (req.method === 'POST') {
    const newContent = {
      id: Math.random().toString(36).substr(2, 9),
      ...req.body,
      createdAt: new Date().toISOString(),
    };
    return res.status(201).json(newContent);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
