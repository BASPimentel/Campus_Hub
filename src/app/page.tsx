
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
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useAuth } from '@/contexts/auth-context';
import type { UserRole } from '@/types';

const navItems: {
  href: string;
  label: string;
  icon: React.ElementType;
  roles: UserRole[];
  description: string;
}[] = [
  { href: '/courses', label: 'Courses', icon: BookOpen, roles: ['Student', 'Teacher', 'Admin'], description: 'Browse and manage course enrollments.' },
  { href: '/grades', label: 'Grades', icon: GraduationCap, roles: ['Student'], description: 'View your academic performance.' },
  { href: '/announcements', label: 'Announcements', icon: Megaphone, roles: ['Student', 'Teacher', 'Admin'], description: 'Latest news and information.' },
  { href: '/messages', label: 'Messages', icon: MessageSquare, roles: ['Student', 'Teacher', 'Admin'], description: 'Connect with peers and teachers.' },
  { href: '/contacts', label: 'Contacts', icon: Contact, roles: ['Student', 'Teacher', 'Admin'], description: 'Find school contact information.' },
  { href: '/students', label: 'Students', icon: Users, roles: ['Admin'], description: 'Manage student information.' },
  { href: '/academics', label: 'Academics', icon: School, roles: ['Admin'], description: 'Oversee academic structure.' },
  { href: '/attendance', label: 'Attendance', icon: CalendarCheck, roles: ['Admin', 'Teacher'], description: 'Track student attendance.' },
  { href: '/gradebook', label: 'Gradebook', icon: BookMarked, roles: ['Admin', 'Teacher'], description: 'Input and manage student grades.' },
  { href: '/fees', label: 'Fees', icon: Wallet, roles: ['Admin'], description: 'Manage student fee payments.' },
  { href: '/policy-assistant', label: 'AI Policy Assistant', icon: Bot, roles: ['Student', 'Teacher', 'Admin'], description: 'Get answers to policy questions.' },
];

export default function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  const visibleNavItems = navItems.filter(item => item.roles.includes(user.role));

  return (
    <div className="space-y-8">
       <div className="p-6 rounded-lg bg-card shadow-sm">
        <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground mt-1">Here's a quick overview of your school portal. Select a module to get started.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visibleNavItems.map((item) => (
          <Link href={item.href} key={item.label}>
            <Card className="hover:bg-primary/5 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
              <CardHeader className="flex-row items-center gap-4 space-y-0 p-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                    <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-semibold">{item.label}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                 <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
