
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { Subject } from "@/types";

interface SubjectFormProps {
    subject?: Subject;
}

export default function SubjectForm({ subject }: SubjectFormProps) {
    return (
        <form className="space-y-4 max-w-lg">
            <div>
                <Label htmlFor="name">Subject Name</Label>
                <Input id="name" name="name" defaultValue={subject?.name} />
            </div>
            <div>
                <Label htmlFor="code">Subject Code</Label>
                <Input id="code" name="code" defaultValue={subject?.code} />
            </div>
            <Button type="submit">{subject ? "Update Subject" : "Add Subject"}</Button>
        </form>
    );
}
