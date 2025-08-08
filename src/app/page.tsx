import Link from 'next/link';
import {
  BookOpen,
  GraduationCap,
  Megaphone,
  Bot,
  ArrowRight,
} from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  courses,
  grades,
  announcements,
} from '@/lib/placeholder-data';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Today's Courses
            </CardTitle>
            <CardDescription>Your scheduled classes for today.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.slice(0, 2).map((course) => (
                <div key={course.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{course.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {course.schedule}
                    </p>
                  </div>
                  <Badge variant="secondary">{course.instructor}</Badge>
                </div>
              ))}
            </div>
            <Button asChild variant="link" className="px-0 mt-2">
              <Link href="/courses">View all courses <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Recent Grades
            </CardTitle>
            <CardDescription>Your latest academic performance.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {grades.slice(0, 2).map((grade) => (
                <div key={grade.course}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{grade.course}</span>
                    <span className="text-muted-foreground">{grade.grade}</span>
                  </div>
                  <Progress value={parseInt(grade.grade)} className="h-2" />
                </div>
              ))}
            </div>
             <Button asChild variant="link" className="px-0 mt-2">
              <Link href="/grades">View all grades <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="h-5 w-5 text-primary" />
              Announcements
            </CardTitle>
            <CardDescription>Latest news and updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {announcements.slice(0, 2).map((announcement) => (
                <li key={announcement.id} className="flex items-start gap-2">
                   <div className="font-semibold text-sm text-primary pt-1">{announcement.date}</div>
                   <div>
                     <p className="font-medium text-sm">{announcement.title}</p>
                   </div>
                </li>
              ))}
            </ul>
             <Button asChild variant="link" className="px-0 mt-2">
              <Link href="/announcements">View all announcements <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-primary/10 border-primary/20">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-primary text-primary-foreground p-3 rounded-full">
              <Bot className="h-8 w-8" />
            </div>
            <div>
              <CardTitle>AI Policy Assistant</CardTitle>
              <CardDescription>
                Have questions about school policies? Get instant answers from our AI assistant.
              </CardDescription>
            </div>
          </div>
          <Button asChild>
            <Link href="/policy-assistant">
              Ask a Question <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
}
