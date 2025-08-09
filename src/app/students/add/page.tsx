
import StudentForm from "@/components/student-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function AddStudentPage() {
    return (
        <div className="space-y-6">
            <Button asChild variant="outline">
                <Link href="/students">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Students
                </Link>
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle>Enroll New Student</CardTitle>
                    <CardDescription>Please fill out the form below to register a new student.</CardDescription>
                </CardHeader>
                <CardContent>
                    <StudentForm />
                </CardContent>
            </Card>
        </div>
    );
}
