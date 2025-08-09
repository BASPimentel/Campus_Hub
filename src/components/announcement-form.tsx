import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { Announcement } from "@/types";

interface AnnouncementFormProps {
    announcement?: Announcement;
}

export default function AnnouncementForm({ announcement }: AnnouncementFormProps) {
    return (
        <form className="space-y-4 max-w-lg">
            <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" defaultValue={announcement?.title} />
            </div>
            <div>
                <Label htmlFor="content">Content</Label>
                <Textarea id="content" name="content" defaultValue={announcement?.content} rows={5} />
            </div>
            <Button type="submit">{announcement ? "Update Announcement" : "Add Announcement"}</Button>
        </form>
    );
}
