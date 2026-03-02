import { useEffect, useState } from 'react';
import { FileText, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { api } from '@/lib/api';
import type { Content } from '@/types';

export function ContentPage() {
  const [content, setContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const data = await api.content.getAll() as Content[];
      setContent(data);
    } catch (error) {
      console.error('Failed to load content:', error);
      setContent([
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
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-96">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Content</h1>
          <p className="text-muted-foreground mt-2">Manage your content library</p>
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {content.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <FileText className="h-8 w-8 text-primary" />
                <Badge variant={item.status === 'published' ? 'success' : 'warning'}>
                  {item.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Category: {item.category}</p>
                <p>Author: {item.author}</p>
                <p>Created: {new Date(item.createdAt).toLocaleDateString()}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
