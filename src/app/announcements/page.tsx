import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { announcements } from "@/lib/placeholder-data";
import { Separator } from "@/components/ui/separator";

export default function AnnouncementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Announcements</h1>
        <p className="text-muted-foreground">Stay up-to-date with the latest news and information.</p>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <Card key={announcement.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{announcement.title}</CardTitle>
                    <CardDescription>Posted on {announcement.date}</CardDescription>
                  </div>
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
