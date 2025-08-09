import AnnouncementForm from "@/components/announcement-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AddAnnouncementPage() {
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
                    <CardTitle>Add New Announcement</CardTitle>
                    <CardDescription>Please fill out the form below to post a new announcement.</CardDescription>
                </CardHeader>
                <CardContent>
                    <AnnouncementForm />
                </CardContent>
            </Card>
        </div>
    );
}
