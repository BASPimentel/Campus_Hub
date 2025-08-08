import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { courses } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Clock, User, Info } from "lucide-react";

export default function CourseDetailsPage({ params }: { params: { id: string } }) {
  const course = courses.find(c => c.id.toString() === params.id);

  if (!course) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Button asChild className="mt-4">
            <Link href="/courses">
                <ArrowLeft className="mr-2 h-4 w-4" /> Go back to courses
            </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <Button asChild variant="outline">
          <Link href="/courses">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
          </Link>
        </Button>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl">{course.name}</CardTitle>
          <CardDescription className="text-lg">Course Details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                    <p className="text-sm text-muted-foreground">Instructor</p>
                    <p className="font-medium">{course.instructor}</p>
                </div>
            </div>
             <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                    <p className="text-sm text-muted-foreground">Schedule</p>
                    <p className="font-medium">{course.schedule}</p>
                </div>
            </div>
             <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                    <p className="text-sm text-muted-foreground">Description</p>
                    <p className="font-medium">{course.description}</p>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
