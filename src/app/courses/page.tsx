
'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { courses } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CoursesPage() {
  const router = useRouter();

  const handleViewDetails = (courseId: number) => {
    router.push(`/courses/${courseId}`);
  };

  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-3xl font-bold">Courses</h1>
            <p className="text-muted-foreground">Browse and manage your course enrollments.</p>
        </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
              <CardDescription>{course.instructor}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{course.schedule}</p>
              <p className="mt-2 text-sm">{course.description}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => handleViewDetails(course.id)}>View Details</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
