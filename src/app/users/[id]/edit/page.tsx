import UserForm from "@/components/user-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { users } from "@/lib/placeholder-data";

export default function EditUserPage({ params }: { params: { id: string } }) {
    const user = users.find(s => s.id === params.id);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Edit User</h1>
                <p className="text-muted-foreground">Update the user's details.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>User Information</CardTitle>
                    <CardDescription>Please update the form below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <UserForm user={user} />
                </CardContent>
            </Card>
        </div>
    );
}
