
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { grades, subjects } from "@/lib/placeholder-data";
import { Badge } from "@/components/ui/badge";

export default function GradesPage() {
  const getGradeInfo = (gradeValue: number) => {
    if (gradeValue >= 90) return { letter: 'A', color: 'bg-green-500' };
    if (gradeValue >= 80) return { letter: 'B', color: 'bg-blue-500' };
    if (gradeValue >= 70) return { letter: 'C', color: 'bg-yellow-500' };
    if (gradeValue >= 60) return { letter: 'D', color: 'bg-orange-500' };
    return { letter: 'F', color: 'bg-red-500' };
  };

  const overallAverage = Math.round(grades.reduce((acc, g) => acc + parseInt(g.grade), 0) / grades.length);
  const overallAttendance = Math.round(grades.reduce((acc, g) => acc + parseInt(g.attendance), 0) / grades.length);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Grades & Performance</h1>
        <p className="text-muted-foreground">An overview of your academic performance for the current semester.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Overall Average</CardTitle>
            <CardDescription>Your average grade across all courses.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <p className="text-4xl font-bold">{overallAverage}%</p>
              <Badge className={`text-lg ${getGradeInfo(overallAverage).color}`}>{getGradeInfo(overallAverage).letter}</Badge>
            </div>
            <Progress value={overallAverage} className="mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Overall Attendance</CardTitle>
            <CardDescription>Your average attendance across all courses.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold mb-2">{overallAttendance}%</p>
            <Progress value={overallAttendance} variant={overallAttendance < 80 ? "destructive" : "default"}/>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Detailed Report Card</CardTitle>
          <CardDescription>A course-by-course breakdown of your grades and attendance.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Teacher</TableHead>
                <TableHead className="text-center">Grade (%)</TableHead>
                <TableHead className="text-center">Letter</TableHead>
                <TableHead className="text-center">Attendance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grades.map((grade) => {
                const gradeValue = parseInt(grade.grade);
                const { letter, color } = getGradeInfo(gradeValue);
                return (
                  <TableRow key={grade.course}>
                    <TableCell className="font-medium">{grade.course}</TableCell>
                    <TableCell>Dr. Smith</TableCell>
                    <TableCell className="text-center">{grade.grade}%</TableCell>
                    <TableCell className="text-center">
                        <Badge className={`w-8 h-8 flex items-center justify-center text-sm ${color}`}>{letter}</Badge>
                    </TableCell>
                    <TableCell className="text-center">{grade.attendance}%</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
