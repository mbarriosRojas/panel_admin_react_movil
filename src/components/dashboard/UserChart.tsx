import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 600 },
  { name: 'Apr', users: 800 },
  { name: 'May', users: 700 },
  { name: 'Jun', users: 900 },
];

export function UserChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
