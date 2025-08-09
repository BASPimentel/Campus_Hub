
import Link from "next/link";
import { PlusCircle, MoreHorizontal, Edit, Trash2 } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { academicYears } from "@/lib/placeholder-data";
import { Badge } from "@/components/ui/badge";
import { format } from 'date-fns';

export default function AcademicYearsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Academic Year Setup</h1>
          <p className="text-muted-foreground">Manage academic years, terms, and semesters.</p>
        </div>
        <Button asChild>
          <Link href="#">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Academic Year
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Academic Year List</CardTitle>
          <CardDescription>A list of all configured academic years.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {academicYears.map((year) => (
              <Card key={year.id} className="overflow-hidden">
                <CardHeader className="bg-muted/50 p-4 flex flex-row justify-between items-center">
                  <div>
                    <CardTitle className="text-xl">{year.year}</CardTitle>
                    <CardDescription>
                      {format(new Date(year.startDate), 'MMMM d, yyyy')} - {format(new Date(year.endDate), 'MMMM d, yyyy')}
                    </CardDescription>
                  </div>
                   <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                           <Link href={`#`}><Edit className="mr-2 h-4 w-4" />Edit Year</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                           <Trash2 className="mr-2 h-4 w-4" />Delete Year
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Term/Semester</TableHead>
                        <TableHead>Start Date</TableHead>
                        <TableHead>End Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {year.terms.map((term) => (
                        <TableRow key={term.id}>
                          <TableCell className="font-medium">{term.name}</TableCell>
                          <TableCell>{format(new Date(term.startDate), 'MMM d, yyyy')}</TableCell>
                          <TableCell>{format(new Date(term.endDate), 'MMM d, yyyy')}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
