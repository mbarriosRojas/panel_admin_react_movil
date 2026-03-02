import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6 lg:px-8">
      <div className="flex-1">
        <h2 className="text-lg font-semibold">Welcome back, Admin</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}
