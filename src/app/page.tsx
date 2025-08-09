
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
  { href: '/grades', label: 'Grade Book', icon: GraduationCap },
  { href: '/announcements', label: 'Notice Board', icon: Megaphone },
  { href: '/messages', label: 'Live Chat', icon: MessageSquare },
  { href: '/contacts', label: 'Contacts', icon: Contact },
  { href: '/users', label: 'Students', icon: Users, adminOnly: true },
  { href: '/academics', label: 'Campus', icon: School, adminOnly: true },
  { href: '/policy-assistant', label: 'AI Assistant', icon: Bot },
  { href: '#', label: 'KPI Dashboard', icon: LayoutDashboard },
  { href: '#', label: 'Calendar', icon: Calendar },
  { href: '#', label: 'Expenses', icon: Wallet },
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
        <p className="text-muted-foreground">Welcome back, {user.name}! Navigate to any section from here.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {visibleNavItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <Card className="hover:bg-primary/5 hover:shadow-lg transition-all duration-200 h-full flex flex-col items-center justify-center text-center p-4">
              <CardHeader className="p-2">
                <div className="bg-primary/10 p-4 rounded-full mx-auto">
                    <item.icon className="w-8 h-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="p-2">
                <CardTitle className="text-base font-semibold">{item.label}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
