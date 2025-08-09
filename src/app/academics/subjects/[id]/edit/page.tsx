
import SubjectForm from "@/components/subject-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { subjects } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function EditSubjectPage({ params }: { params: { id: string } }) {
    const subject = subjects.find(s => s.id === params.id);

     if (!subject) {
        return (
            <div className="text-center">
                <h1 className="text-2xl font-bold">Subject not found</h1>
                <Button asChild className="mt-4">
                    <Link href="/academics/subjects">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Go back to subjects
                    </Link>
                </Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-start">
                 <Button asChild variant="outline">
                    <Link href="/academics/subjects">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Subjects
                    </Link>
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Edit Subject</CardTitle>
                    <CardDescription>Please update the form below.</CardDescription>
                </CardHeader>
                <CardContent>
                    <SubjectForm subject={subject} />
                </CardContent>
            </Card>
        </div>
    );
}
