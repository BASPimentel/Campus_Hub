
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { students } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Edit, Trash2, User, Mail, Phone, Calendar, Home, Shield, GraduationCap, Briefcase } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
            <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                     <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={`https://placehold.co/96x96.png?text=${avatarInitial}`} data-ai-hint="student avatar" />
                        <AvatarFallback className="text-3xl">{avatarInitial}</AvatarFallback>
                    </Avatar>
                    <h2 className="text-2xl font-bold">{student.name}</h2>
                    <p className="text-muted-foreground">{student.email}</p>
                    <Badge className="mt-2">{student.role}</Badge>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Shield className="w-5 h-5" /> Guardian Information
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                   <div className="flex items-center gap-3">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{student.guardianName}</span>
                    </div>
                     <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{student.guardianPhone}</span>
                    </div>
                </CardContent>
             </Card>
        </div>

        <div className="lg:col-span-2">
             <Card>
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                       <User className="w-5 h-5" /> Personal & Academic Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
                    <div className="space-y-1">
                        <p className="font-medium text-muted-foreground flex items-center gap-2"><Calendar className="w-4 h-4"/> Date of Birth</p>
                        <p>{format(new Date(student.dateOfBirth), 'MMMM d, yyyy')}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="font-medium text-muted-foreground flex items-center gap-2"><GraduationCap className="w-4 h-4"/> Major</p>
                        <p>{student.major}</p>
                    </div>
                    <div className="space-y-1 md:col-span-2">
                        <p className="font-medium text-muted-foreground flex items-center gap-2"><Home className="w-4 h-4"/> Address</p>
                        <p>{student.address}</p>
                    </div>
                     <div className="space-y-1">
                        <p className="font-medium text-muted-foreground flex items-center gap-2"><Briefcase className="w-4 h-4"/> Class</p>
                        <p>{student.classId}</p>
                    </div>
                </CardContent>
            </Card>
        </div>

      </div>
    </div>
  );
}
