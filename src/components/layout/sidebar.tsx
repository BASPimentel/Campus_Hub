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

const navItems = [
  { href: '/', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/courses', label: 'Courses', icon: BookOpen },
  { href: '/grades', label: 'Grades', icon: GraduationCap },
  { href: '/announcements', label: 'Announcements', icon: Megaphone },
  { href: '/messages', label: 'Messages', icon: MessageSquare },
  { href: '/contacts', label: 'Contacts', icon: Users },
];

const AppSidebar = () => {
  const pathname = usePathname();

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
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-2">
         <Separator className="my-2"/>
         <SidebarMenu>
            <SidebarMenuItem>
                <Link href="/policy-assistant" legacyBehavior passHref>
                    <SidebarMenuButton
                        className="bg-primary/10 hover:bg-primary/20 text-primary-foreground"
                        isActive={pathname === '/policy-assistant'}
                        tooltip="AI Policy Assistant"
                    >
                        <Bot />
                        <span>AI Assistant</span>
                    </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
         </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
