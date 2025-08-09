
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from '@/components/ui/input';
import { Save } from 'lucide-react';
import { students as allStudents, classes, subjects, grades as allGrades } from '@/lib/placeholder-data';
import type { Student, Grade } from '@/types';

export default function GradebookPage() {
    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
    const [students, setStudents] = useState<Student[]>([]);
    const [grades, setGrades] = useState<Map<string, string>>(new Map());

    const handleSearch = () => {
        if (selectedClass && selectedSubject) {
            const classStudents = allStudents.filter(s => s.classId === selectedClass);
            setStudents(classStudents);

            const subjectName = subjects.find(s => s.id === selectedSubject)?.name || '';
            const newGrades = new Map<string, string>();
            classStudents.forEach(student => {
                const gradeRecord = allGrades.find(g => g.studentId === student.id && g.course === subjectName);
                newGrades.set(student.id, gradeRecord ? gradeRecord.grade : '');
            });
            setGrades(newGrades);
        }
    };

    const handleGradeChange = (studentId: string, grade: string) => {
        setGrades(new Map(grades.set(studentId, grade)));
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Gradebook</h1>
                <p className="text-muted-foreground">Input and manage student grades.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Enter Grades</CardTitle>
                    <CardDescription>Select a class and subject to enter grades.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <Select onValueChange={setSelectedClass}>
                            <SelectTrigger className="w-full md:w-[240px]">
                                <SelectValue placeholder="Select Class" />
                            </SelectTrigger>
                            <SelectContent>
                                {classes.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Select onValueChange={setSelectedSubject}>
                            <SelectTrigger className="w-full md:w-[240px]">
                                <SelectValue placeholder="Select Subject" />
                            </SelectTrigger>
                            <SelectContent>
                                {subjects.map(s => <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Button onClick={handleSearch}>Load Gradebook</Button>
                    </div>

                    {students.length > 0 && (
                        <div>
                            <div className="border rounded-md">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Student Name</TableHead>
                                            <TableHead className="text-right w-[120px]">Grade (%)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {students.map(student => (
                                            <TableRow key={student.id}>
                                                <TableCell className="font-medium">{student.name}</TableCell>
                                                <TableCell className="text-right">
                                                    <Input
                                                        type="number"
                                                        className="text-right"
                                                        placeholder="N/A"
                                                        value={grades.get(student.id) || ''}
                                                        onChange={(e) => handleGradeChange(student.id, e.target.value)}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <Button><Save className="mr-2 h-4 w-4"/> Save Grades</Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
