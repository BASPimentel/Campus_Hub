
'use client'
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { students, fees as allFees, payments as allPayments } from "@/lib/placeholder-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, PlusCircle, DollarSign, Receipt, CircleAlert, CircleCheck } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import type { Fee } from '@/types';

export default function StudentFeeDetailsPage({ params }: { params: { studentId: string } }) {
  const student = students.find(s => s.id === params.studentId);
  const studentFees = allFees.filter(f => f.studentId === params.studentId);

  const totalFees = studentFees.reduce((acc, fee) => acc + fee.amount, 0);
  const totalPaid = allPayments
    .filter(p => studentFees.some(f => f.id === p.feeId))
    .reduce((acc, payment) => acc + payment.amount, 0);
  const outstandingBalance = totalFees - totalPaid;

  if (!student) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold">Student not found</h1>
        <Button asChild className="mt-4">
            <Link href="/fees">
                <ArrowLeft className="mr-2 h-4 w-4" /> Go back to fees
            </Link>
        </Button>
      </div>
    );
  }
  
  const getStatusVariant = (status: Fee['status']) => {
    if (status === 'Paid') return 'default';
    if (status === 'Overdue') return 'destructive';
    return 'secondary';
  }

  return (
    <div className="space-y-6">
        <div className="flex justify-between items-start">
            <Button asChild variant="outline">
                <Link href="/fees">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Fee Management
                </Link>
            </Button>
             <div className="flex gap-2">
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" /> Add New Fee
                </Button>
                 <Button variant="secondary">
                    <Receipt className="mr-2 h-4 w-4" /> Record Payment
                </Button>
            </div>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="text-3xl">{student.name}</CardTitle>
                <CardDescription>Fee and payment details for {student.email}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center justify-center gap-2"><DollarSign /> Total Billed</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">${totalFees.toFixed(2)}</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center justify-center gap-2"><CircleCheck className="text-green-500" /> Total Paid</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <p className="text-2xl font-bold">${totalPaid.toFixed(2)}</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center justify-center gap-2"><CircleAlert className="text-red-500" /> Balance Due</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <p className="text-2xl font-bold text-red-500">${outstandingBalance.toFixed(2)}</p>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
      
      <Card>
        <CardHeader>
            <CardTitle>Fee Breakdown</CardTitle>
            <CardDescription>A list of all assigned fees for this student.</CardDescription>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Description</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {studentFees.map((fee) => (
                        <TableRow key={fee.id}>
                            <TableCell className="font-medium">{fee.description}</TableCell>
                            <TableCell>{format(new Date(fee.dueDate), 'MMM d, yyyy')}</TableCell>
                            <TableCell><Badge variant={getStatusVariant(fee.status)}>{fee.status}</Badge></TableCell>
                            <TableCell className="text-right">${fee.amount.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
