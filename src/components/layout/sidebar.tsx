
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  GraduationCap,
  Megaphone,
  MessageSquare,
  Users,
  Bot,
  Package,
  Contact,
  School,
  CalendarCheck,
  BookMarked,
  Wallet,
} from 'lucide-react';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/auth-context';
import type { UserRole } from '@/types';
import { Badge } from '../ui/badge';

const navItems: {
  href: string;
  label: string;
  icon: React.ElementType;
  roles: UserRole[];
}[] = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard, roles: ['Admin', 'Teacher', 'Student'] },
  { href: '/courses', label: 'Courses', icon: BookOpen, roles: ['Admin', 'Teacher', 'Student'] },
  { href: '/grades', label: 'Grades', icon: GraduationCap, roles: ['Student'] },
  { href: '/announcements', label: 'Announcements', icon: Megaphone, roles: ['Admin', 'Teacher', 'Student'] },
  { href: '/messages', label: 'Messages', icon: MessageSquare, roles: ['Admin', 'Teacher', 'Student'] },
  { href: '/contacts', label: 'Contacts', icon: Contact, roles: ['Admin', 'Teacher', 'Student'] },
  { href: '/students', label: 'Students', icon: Users, roles: ['Admin'] },
  { href: '/academics', label: 'Academics', icon: School, roles: ['Admin'] },
  { href: '/attendance', label: 'Attendance', icon: CalendarCheck, roles: ['Admin', 'Teacher'] },
  { href: '/gradebook', label: 'Gradebook', icon: BookMarked, roles: ['Admin', 'Teacher'] },
  { href: '/fees', label: 'Fees', icon: Wallet, roles: ['Admin'] },
  { href: '/policy-assistant', label: 'AI Assistant', icon: Bot, roles: ['Admin', 'Teacher', 'Student'] },
];

const AppSidebar = () => {
  const pathname = usePathname();
  const { user } = useAuth();

  if (!user) {
    return null;
  }
  
  const visibleNavItems = navItems.filter(item => item.roles.includes(user.role));

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary rounded-lg p-2 text-primary-foreground">
            <GraduationCap className="h-6 w-6" />
          </div>
          <span className="font-bold text-lg text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            Campus Hub
          </span>
        </Link>
      </SidebarHeader>
      <Separator />
      <SidebarContent className="p-2">
        <SidebarMenu>
          {visibleNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(item.href) && (item.href !== '/' || pathname === '/')}
                tooltip={item.label}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                   {item.label === 'AI Assistant' && (
                    <Badge variant="secondary" className="ml-auto group-data-[collapsible=icon]:hidden">Beta</Badge>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
