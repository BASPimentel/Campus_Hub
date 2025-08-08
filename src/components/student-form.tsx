import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { Student } from "@/types";

interface StudentFormProps {
    student?: Student;
}

export default function StudentForm({ student }: StudentFormProps) {
    return (
        <form className="space-y-4 max-w-lg">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" defaultValue={student?.name} />
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" defaultValue={student?.email} />
            </div>
            <div>
                <Label htmlFor="major">Major</Label>
                <Input id="major" name="major" defaultValue={student?.major} />
            </div>
            <Button type="submit">{student ? "Update Student" : "Add Student"}</Button>
        </form>
    );
}
