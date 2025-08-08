import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { students } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Edit, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function StudentDetailsPage({ params }: { params: { id: string } }) {
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

  const avatarInitial = student.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="space-y-6">
        <div className="flex justify-between items-start">
            <Button asChild variant="outline">
                <Link href="/students">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Students
                </Link>
            </Button>
             <div className="flex gap-2">
                <Button asChild>
                    <Link href={`/students/${student.id}/edit`}>
                        <Edit className="mr-2 h-4 w-4" /> Edit
                    </Link>
                </Button>
                <Button variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
            </div>
        </div>
      
      <Card>
        <CardHeader>
            <div className="flex items-center gap-4">
                 <Avatar className="h-20 w-20">
                    <AvatarImage src={`https://placehold.co/80x80.png?text=${avatarInitial}`} data-ai-hint="student avatar"/>
                    <AvatarFallback className="text-2xl">{avatarInitial}</AvatarFallback>
                </Avatar>
                <div>
                    <CardTitle className="text-4xl">{student.name}</CardTitle>
                    <CardDescription className="text-lg">{student.major}</CardDescription>
                </div>
            </div>
        </CardHeader>
        <CardContent>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base">
                <div className="space-y-1">
                    <p className="text-muted-foreground">Email</p>
                    <p>{student.email}</p>
                </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
