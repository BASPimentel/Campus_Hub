export type Course = {
  id: number;
  name: string;
  schedule: string;
  instructor: string;
  description: string;
};

export type Grade = {
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
