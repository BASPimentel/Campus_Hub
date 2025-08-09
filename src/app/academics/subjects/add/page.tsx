
import SubjectForm from "@/components/subject-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AddSubjectPage() {
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
                    <CardTitle>Add New Subject</CardTitle>
                    <CardDescription>Please fill out the form below to create a new subject.</CardDescription>
                </CardHeader>
                <CardContent>
                    <SubjectForm />
                </CardContent>
            </Card>
        </div>
    );
}
