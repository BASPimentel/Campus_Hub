
import Link from "next/link";
import { Search, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { students, fees } from "@/lib/placeholder-data";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function FeesPage() {

  const getStudentBalance = (studentId: string) => {
    const studentFees = fees.filter(f => f.studentId === studentId && f.status !== 'Paid');
    const balance = studentFees.reduce((acc, fee) => acc + fee.amount, 0);
    return balance;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Fee Management</h1>
          <p className="text-muted-foreground">Track and manage student fee payments.</p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Student Balances</CardTitle>
          <CardDescription>An overview of outstanding balances for all students.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="mb-4">
                 <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search students..." className="pl-8" />
                </div>
            </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Name</TableHead>
                <TableHead>Class</TableHead>
                <TableHead className="text-right">Outstanding Balance</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => {
                const balance = getStudentBalance(student.id);
                return (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.classId}</TableCell>
                    <TableCell className="text-right font-medium">
                        {balance > 0 ? `$${balance.toFixed(2)}` : <Badge variant="secondary">Paid Up</Badge>}
                    </TableCell>
                    <TableCell className="text-right">
                       <Button variant="outline" size="sm" asChild>
                         <Link href={`/fees/${student.id}`}>
                            <Eye className="mr-2 h-4 w-4" /> View Details
                         </Link>
                       </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
