
'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, CheckCircle2, XCircle, Clock, Save } from 'lucide-react';
import { format, toDate } from 'date-fns';
import { students as allStudents, classes, attendanceRecords as allAttendance } from '@/lib/placeholder-data';
import type { Student, AttendanceStatus, AttendanceRecord } from '@/types';

export default function AttendancePage() {
    const [selectedClass, setSelectedClass] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [students, setStudents] = useState<Student[]>([]);
    const [attendance, setAttendance] = useState<Map<string, AttendanceStatus>>(new Map());

    const handleSearch = () => {
        if (selectedClass && selectedDate) {
            const classStudents = allStudents.filter(s => s.classId === selectedClass);
            setStudents(classStudents);

            const dateString = format(selectedDate, 'yyyy-MM-dd');
            const todaysRecords = allAttendance.filter(r => r.classId === selectedClass && r.date === dateString);
            
            const newAttendance = new Map<string, AttendanceStatus>();
            classStudents.forEach(student => {
                const record = todaysRecords.find(r => r.studentId === student.id);
                newAttendance.set(student.id, record ? record.status : 'present');
            });
            setAttendance(newAttendance);
        }
    };

    const handleStatusChange = (studentId: string, status: AttendanceStatus) => {
        setAttendance(new Map(attendance.set(studentId, status)));
    };
    
    const getStatusCounts = () => {
        const counts = { present: 0, absent: 0, late: 0 };
        attendance.forEach(status => {
            counts[status]++;
        });
        return counts;
    };
    
    const { present, absent, late } = getStatusCounts();


    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Attendance Tracking</h1>
                <p className="text-muted-foreground">Mark and manage student attendance.</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Take Attendance</CardTitle>
                    <CardDescription>Select a class and date to take attendance.</CardDescription>
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
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className="w-full md:w-[240px] justify-start text-left font-normal"
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {selectedDate ? format(selectedDate, 'PPP') : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={selectedDate}
                                    onSelect={(day) => setSelectedDate(day || new Date())}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                        <Button onClick={handleSearch}>Load Students</Button>
                    </div>

                    {students.length > 0 && (
                        <div>
                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <Card>
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="text-green-500"/>
                                            <p>Present: <span className="font-bold">{present}</span></p>
                                        </div>
                                    </CardContent>
                                </Card>
                                 <Card>
                                    <CardContent className="p-4">
                                         <div className="flex items-center gap-2">
                                            <XCircle className="text-red-500"/>
                                            <p>Absent: <span className="font-bold">{absent}</span></p>
                                        </div>
                                    </CardContent>
                                </Card>
                                 <Card>
                                    <CardContent className="p-4">
                                         <div className="flex items-center gap-2">
                                            <Clock className="text-yellow-500"/>
                                            <p>Late: <span className="font-bold">{late}</span></p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="border rounded-md">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Student Name</TableHead>
                                            <TableHead className="text-right">Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {students.map(student => (
                                            <TableRow key={student.id}>
                                                <TableCell className="font-medium">{student.name}</TableCell>
                                                <TableCell className="text-right">
                                                    <RadioGroup 
                                                        value={attendance.get(student.id) || 'present'} 
                                                        onValueChange={(status) => handleStatusChange(student.id, status as AttendanceStatus)}
                                                        className="flex justify-end gap-4"
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="present" id={`present-${student.id}`} />
                                                            <Label htmlFor={`present-${student.id}`}>Present</Label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="absent" id={`absent-${student.id}`} />
                                                            <Label htmlFor={`absent-${student.id}`}>Absent</Label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <RadioGroupItem value="late" id={`late-${student.id}`} />
                                                            <Label htmlFor={`late-${student.id}`}>Late</Label>
                                                        </div>
                                                    </RadioGroup>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <Button><Save className="mr-2 h-4 w-4"/> Save Attendance</Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
