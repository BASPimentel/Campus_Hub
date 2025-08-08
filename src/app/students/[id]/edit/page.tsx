import StudentForm from "@/components/student-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { students } from "@/lib/placeholder-data";

export default function EditStudentPage({ params }: { params: { id: string } }) {
    const student = students.find(s => s.id === params.id);

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Edit Student</h1>
                <p className="text-muted-foreground">Update the student's details.</p>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Student Information</CardTitle>
                    <CardDescription>Please update the form below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <StudentForm student={student} />
                </CardContent>
            </Card>
        </div>
    );
}
