
'use client';

import Link from 'next/link';
import {
  BookOpen,
  GraduationCap,
  Megaphone,
  MessageSquare,
  Users,
  Bot,
  Contact,
  School,
  LayoutDashboard,
  Calendar,
  Wallet
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth-context';

const navItems = [
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/grades', label: 'Grades', icon: GraduationCap },
  { href: '/announcements', label: 'Announcements', icon: Megaphone },
  { href: '/messages', label: 'Messages', icon: MessageSquare },
  { href: '/contacts', label: 'Contacts', icon: Contact },
  { href: '/users', label: 'Users', icon: Users, adminOnly: true },
  { href: '/academics', label: 'Academics', icon: School, adminOnly: true },
  { href: '/policy-assistant', label: 'AI Policy Assistant', icon: Bot },
];

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const visibleNavItems = navItems.filter(item => !item.adminOnly || user.role === 'Admin');

  return (
    <div className="space-y-6">
       <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, {user.name}! Here's a quick overview of your school portal.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleNavItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
                <item.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">...</div>
                 <p className="text-xs text-muted-foreground">
                  Manage {item.label.toLowerCase()}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
