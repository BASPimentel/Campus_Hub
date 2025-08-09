

'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { announcements } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/auth-context";

export default function AnnouncementsPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold">Announcements</h1>
            <p className="text-muted-foreground">Stay up-to-date with the latest news and information.</p>
        </div>
        {user?.role === 'Admin' && (
            <Button asChild>
                <Link href="/announcements/add">
                    <PlusCircle className="mr-2 h-4 w-4" /> Add Announcement
                </Link>
            </Button>
        )}
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <Card key={announcement.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{announcement.title}</CardTitle>
                    <CardDescription>Posted on {announcement.date}</CardDescription>
                  </div>
                   {user?.role === 'Admin' && (
                       <div className="flex gap-2">
                           <Button variant="outline" size="icon" asChild>
                               <Link href={`/announcements/${announcement.id}/edit`}>
                                   <Edit className="h-4 w-4" />
                               </Link>
                           </Button>
                           <Button variant="destructive" size="icon">
                               <Trash2 className="h-4 w-4" />
                           </Button>
                       </div>
                   )}
              </div>
            </CardHeader>
            <CardContent>
              <p>{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
