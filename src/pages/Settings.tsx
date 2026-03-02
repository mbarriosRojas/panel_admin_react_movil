import { Save } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your application settings</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Full Name</label>
              <Input placeholder="Enter your name" defaultValue="Admin User" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="admin@example.com" defaultValue="admin@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Phone</label>
              <Input type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Configuration</CardTitle>
            <CardDescription>Configure application settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">API Endpoint</label>
              <Input placeholder="https://api.example.com" defaultValue="/api" />
            </div>
            <div>
              <label className="text-sm font-medium">Timezone</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>UTC</option>
                <option>America/New_York</option>
                <option>Europe/London</option>
                <option>Asia/Tokyo</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="notifications" className="h-4 w-4" />
              <label htmlFor="notifications" className="text-sm font-medium">
                Enable Email Notifications
              </label>
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Configuration
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Update your security preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Current Password</label>
              <Input type="password" />
            </div>
            <div>
              <label className="text-sm font-medium">New Password</label>
              <Input type="password" />
            </div>
            <div>
              <label className="text-sm font-medium">Confirm Password</label>
              <Input type="password" />
            </div>
            <Button variant="destructive">
              Update Password
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Customize your interface</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Theme</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Language</label>
              <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
              </select>
            </div>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Preferences
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
