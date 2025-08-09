
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { Student } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface StudentFormProps {
    student?: Student;
}

export default function StudentForm({ student }: StudentFormProps) {
    return (
        <form className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Basic details about the student.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" defaultValue={student?.name} placeholder="e.g. John Doe" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" defaultValue={student?.email} placeholder="e.g. john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" name="dob" type="date" defaultValue={student?.dateOfBirth} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" defaultValue={student?.address} placeholder="e.g. 123 University Ave" />
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Guardian Information</CardTitle>
                    <CardDescription>Contact details for the student's guardian.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="guardianName">Guardian's Full Name</Label>
                        <Input id="guardianName" name="guardianName" defaultValue={student?.guardianName} placeholder="e.g. Jane Doe"/>
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="guardianPhone">Guardian's Phone</Label>
                        <Input id="guardianPhone" name="guardianPhone" type="tel" defaultValue={student?.guardianPhone} placeholder="e.g. 555-123-4567" />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Academic Information</CardTitle>
                    <CardDescription>Details about the student's enrollment.</CardDescription>
                </CardHeader>
                 <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Label htmlFor="major">Major</Label>
                        <Input id="major" name="major" defaultValue={student?.major} placeholder="e.g. Computer Science" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="classId">Class ID</Label>
                        <Input id="classId" name="classId" defaultValue={student?.classId} placeholder="e.g. G10-A" />
                    </div>
                </CardContent>
            </Card>
            
            <div className="flex justify-end">
                <Button type="submit">{student ? "Update Student" : "Enroll Student"}</Button>
            </div>
        </form>
    );
}
