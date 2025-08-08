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
import { grades } from "@/lib/placeholder-data";

export default function GradesPage() {
  const overallAverage = Math.round(grades.reduce((acc, g) => acc + parseInt(g.grade), 0) / grades.length);
  const overallAttendance = Math.round(grades.reduce((acc, g) => acc + parseInt(g.attendance), 0) / grades.length);

  return (
    <div className="space-y-6">
        <div>
            <h1 className="text-3xl font-bold">Grades & Attendance</h1>
            <p className="text-muted-foreground">An overview of your academic performance.</p>
        </div>
      
        <div className="grid gap-6 md:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Overall Average</CardTitle>
                    <CardDescription>Your average grade across all courses.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold mb-2">{overallAverage}%</p>
                    <Progress value={overallAverage} />
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Overall Attendance</CardTitle>
                    <CardDescription>Your average attendance across all courses.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-4xl font-bold mb-2">{overallAttendance}%</p>
                    <Progress value={overallAttendance} variant={overallAttendance < 90 ? "destructive" : "default"}/>
                </CardContent>
            </Card>
        </div>

      <Card>
          <CardHeader>
              <CardTitle>Detailed Report</CardTitle>
              <CardDescription>A course-by-course breakdown of your grades and attendance.</CardDescription>
          </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Course</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead className="text-right">Attendance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {grades.map((grade) => (
                <TableRow key={grade.course}>
                  <TableCell className="font-medium">{grade.course}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <span className="w-8">{grade.grade}%</span>
                      <Progress value={parseInt(grade.grade)} className="h-2 flex-1" />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{grade.attendance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
