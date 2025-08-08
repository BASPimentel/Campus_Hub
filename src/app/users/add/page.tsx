import UserForm from "@/components/user-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function AddUserPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Add User</h1>
                <p className="text-muted-foreground">Enter the details of the new user.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>User Information</CardTitle>
                    <CardDescription>Please fill out the form below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <UserForm />
                </CardContent>
            </Card>
        </div>
    );
}
