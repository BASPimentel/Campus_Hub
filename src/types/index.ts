

export type Course = {
  id: number;
  name: string;
  schedule: string;
  instructor: string;
  description: string;
};

export type Grade = {
  studentId?: string;
  course: string;
  grade: string;
  attendance: string;
};

export type Announcement = {
  id: number;
  title: string;
  date: string;
  content: string;
};

export type MessageContact = {
  id: number;
  name:string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  online: boolean;
};

export type ChatMessage = {
  id: number;
  text: string;
  timestamp: string;
  sender: 'me' | 'other';
};

export type DepartmentContact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  office: string;
};

export type UserRole = 'Admin' | 'Teacher' | 'Student';

export type User = {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    major?: string; // Optional, as it may not apply to all roles
};

export type Student = User & {
    role: 'Student';
    dateOfBirth: string;
    address: string;
    guardianName: string;
    guardianPhone: string;
    classId: string;
    major: string;
};


export type Subject = {
  id: string;
  name: string;
  code: string;
};

export type Term = {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
};

export type AcademicYear = {
  id: string;
  year: string; // e.g., '2024-2025'
  startDate: string;
  endDate: string;
  terms: Term[];
};

export type AttendanceStatus = 'present' | 'absent' | 'late';

export type AttendanceRecord = {
    studentId: string;
    studentName: string;
    classId: string;
    date: string;
    status: AttendanceStatus;
};

export type FeeStatus = 'Paid' | 'Unpaid' | 'Overdue';

export type Fee = {
  id: string;
  studentId: string;
  description: string;
  amount: number;
  dueDate: string;
  status: FeeStatus;
};

export type Payment = {
    id: string;
    feeId: string;
    amount: number;
    date: string;
    method: 'Card' | 'Cash' | 'Bank Transfer';
};

