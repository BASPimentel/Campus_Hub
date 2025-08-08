import StudentForm from "@/components/student-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function AddStudentPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Add Student</h1>
                <p className="text-muted-foreground">Enter the details of the new student.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Student Information</CardTitle>
                    <CardDescription>Please fill out the form below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <StudentForm />
                </CardContent>
            </Card>
        </div>
    );
}
