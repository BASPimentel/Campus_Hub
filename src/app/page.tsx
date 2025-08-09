
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
  Wallet,
  CalendarCheck,
  BookMarked
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth-context';
import type { UserRole } from '@/types';

const navItems: {
  href: string;
  label: string;
  icon: React.ElementType;
  roles: UserRole[];
}[] = [
  { href: '/courses', label: 'Courses', icon: BookOpen, roles: ['Student', 'Teacher', 'Admin'] },
  { href: '/grades', label: 'Grades', icon: GraduationCap, roles: ['Student'] },
  { href: '/announcements', label: 'Announcements', icon: Megaphone, roles: ['Student', 'Teacher', 'Admin'] },
  { href: '/messages', label: 'Messages', icon: MessageSquare, roles: ['Student', 'Teacher', 'Admin'] },
  { href: '/contacts', label: 'Contacts', icon: Contact, roles: ['Student', 'Teacher', 'Admin'] },
  { href: '/students', label: 'Students', icon: Users, roles: ['Admin'] },
  { href: '/academics', label: 'Academics', icon: School, roles: ['Admin'] },
  { href: '/attendance', label: 'Attendance', icon: CalendarCheck, roles: ['Admin', 'Teacher'] },
  { href: '/gradebook', label: 'Gradebook', icon: BookMarked, roles: ['Admin', 'Teacher'] },
  { href: '/policy-assistant', label: 'AI Policy Assistant', icon: Bot, roles: ['Student', 'Teacher', 'Admin'] },
];

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const visibleNavItems = navItems.filter(item => item.roles.includes(user.role));

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
