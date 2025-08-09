
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
  BookMarked
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
            <Package className="h-6 w-6" />
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
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
         <Separator className="my-2"/>
         <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                  asChild
                  className="bg-primary/10 hover:bg-primary/20 text-primary-foreground"
                  isActive={pathname === '/policy-assistant'}
                  tooltip="AI Policy Assistant"
              >
                <Link href="/policy-assistant">
                  <Bot />
                  <span>AI Assistant</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
