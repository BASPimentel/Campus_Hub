
import StudentForm from "@/components/student-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { students } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function EditStudentPage({ params }: { params: { id: string } }) {
    const student = students.find(s => s.id === params.id);

    if (!student) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-bold">Student not found</h1>
                <Button asChild className="mt-4">
                    <Link href="/students">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Go back to students
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <Button asChild variant="outline">
                <Link href="/students">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Students
                </Link>
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle>Edit Student Information</CardTitle>
                    <CardDescription>Please update the student's details below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <StudentForm student={student} />
                </CardContent>
            </Card>
        </div>
    );
}
