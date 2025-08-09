import AnnouncementForm from "@/components/announcement-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { announcements } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function EditAnnouncementPage({ params }: { params: { id: string } }) {
    const announcement = announcements.find(a => a.id.toString() === params.id);

     if (!announcement) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-bold">Announcement not found</h1>
                <Button asChild className="mt-4">
                    <Link href="/announcements">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Go back to announcements
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-start">
                 <Button asChild variant="outline">
                    <Link href="/announcements">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Announcements
                    </Link>
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Edit Announcement</CardTitle>
                    <CardDescription>Please update the form below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <AnnouncementForm announcement={announcement} />
                </CardContent>
            </Card>
        </div>
    );
}
