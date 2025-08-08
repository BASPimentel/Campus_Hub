import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { User } from "@/types";

interface UserFormProps {
    user?: User;
}

export default function UserForm({ user }: UserFormProps) {
    return (
        <form className="space-y-4 max-w-lg">
            <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" defaultValue={user?.name} />
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" defaultValue={user?.email} />
            </div>
             <div>
                <Label htmlFor="role">Role</Label>
                <Select name="role" defaultValue={user?.role}>
                    <SelectTrigger id="role">
                        <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="Teacher">Teacher</SelectItem>
                        <SelectItem value="Student">Student</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Label htmlFor="major">Major (if Student)</Label>
                <Input id="major" name="major" defaultValue={user?.major} />
            </div>
            <Button type="submit">{user ? "Update User" : "Add User"}</Button>
        </form>
    );
}
