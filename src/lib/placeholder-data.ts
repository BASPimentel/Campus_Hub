
import type { Course, Grade, Announcement, MessageContact, ChatMessage, DepartmentContact, User, Subject, AcademicYear, Student, AttendanceRecord } from '@/types';

export const courses: Course[] = [
  {
    id: 1,
    name: 'Introduction to Computer Science',
    schedule: 'Mon, Wed, Fri 10:00-11:00',
    instructor: 'Dr. Alan Turing',
    description: 'A foundational course on programming, algorithms, and data structures.',
  },
  {
    id: 2,
    name: 'World History: Ancient Civilizations',
    schedule: 'Tue, Thu 13:00-14:30',
    instructor: 'Prof. Ada Lovelace',
    description: 'Explore the rise and fall of great empires from Mesopotamia to Rome.',
  },
  {
    id: 3,
    name: 'Calculus I',
    schedule: 'Mon, Wed, Fri 09:00-10:00',
    instructor: 'Dr. Isaac Newton',
    description: 'An introduction to differential and integral calculus.',
  },
  {
    id: 4,
    name: 'English Composition',
    schedule: 'Tue, Thu 11:00-12:30',
    instructor: 'Prof. Mary Shelley',
    description: 'Develop your skills in critical reading and academic writing.',
  },
];

export const grades: Grade[] = [
  { course: 'Intro to CS', grade: '92', attendance: '98%' },
  { course: 'World History', grade: '88', attendance: '95%' },
  { course: 'Calculus I', grade: '95', attendance: '100%' },
  { course: 'English Composition', grade: '85', attendance: '92%' },
];

export const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Mid-term Examinations Schedule',
    date: 'Oct 05',
    content: 'The schedule for mid-term examinations has been posted. Please check the student portal for your specific dates and locations.',
  },
  {
    id: 2,
    title: 'Campus Career Fair',
    date: 'Oct 02',
    content: 'Join us for the annual career fair on October 15th in the main gymnasium. Top companies will be recruiting for internships and full-time positions.',
  },
  {
    id: 3,
    title: 'Library Hours Extended',
    date: 'Sep 28',
    content: 'To support preparations for mid-terms, the library will have extended hours until midnight starting from October 1st.',
  },
];

export const messageContacts: MessageContact[] = [
  {
    id: 1,
    name: 'Alex Johnson',
    avatar: 'AJ',
    lastMessage: 'Hey, are you going to the review session?',
    lastMessageTime: '10:42 AM',
    online: true,
  },
  {
    id: 2,
    name: 'Samantha Lee',
    avatar: 'SL',
    lastMessage: 'Can you send me the notes from today?',
    lastMessageTime: '9:15 AM',
    online: false,
  },
  {
    id: 3,
    name: 'Prof. Lovelace',
    avatar: 'AL',
    lastMessage: 'Your essay draft is looking good.',
    lastMessageTime: 'Yesterday',
    online: true,
  },
];

export const chatHistory: ChatMessage[] = [
    { id: 1, sender: 'other', text: 'Hey, are you going to the review session for CS101?', timestamp: '10:40 AM' },
    { id: 2, sender: 'me', text: 'Yeah, I plan to. It\'s at 2 PM in the main hall, right?', timestamp: '10:41 AM' },
    { id: 3, sender: 'other', text: 'That\'s the one. See you there!', timestamp: '10:42 AM' },
];

export const departments: DepartmentContact[] = [
  {
    id: 1,
    name: 'Admissions Office',
    email: 'admissions@university.edu',
    phone: '(123) 456-7890',
    office: 'Main Hall, Room 101',
  },
  {
    id: 2,
    name: 'Financial Aid',
    email: 'finaid@university.edu',
    phone: '(123) 456-7891',
    office: 'Main Hall, Room 102',
  },
  {
    id: 3,
    name: 'Registrar\'s Office',
    email: 'registrar@university.edu',
    phone: '(123) 456-7892',
    office: 'Main Hall, Room 103',
  },
   {
    id: 4,
    name: 'IT Help Desk',
    email: 'helpdesk@university.edu',
    phone: '(123) 456-7893',
    office: 'Library, First Floor',
  },
];

export const users: User[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Student',
        major: 'Computer Science'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'Teacher',
    },
    {
        id: '3',
        name: 'Peter Jones',
        email: 'peter.jones@example.com',
        role: 'Admin',
    }
];

export const students: Student[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Student',
        major: 'Computer Science',
        dateOfBirth: '2005-08-15',
        address: '123 University Ave, Learnington, LG 54321',
        guardianName: 'Richard Doe',
        guardianPhone: '111-222-3333',
        classId: 'G10-A'
    },
     {
        id: '4',
        name: 'Emily White',
        email: 'emily.white@example.com',
        role: 'Student',
        major: 'Fine Arts',
        dateOfBirth: '2006-03-22',
        address: '456 College Rd, Scholarville, SV 65432',
        guardianName: 'Sarah White',
        guardianPhone: '444-555-6666',
        classId: 'G9-B'
    },
     {
        id: '5',
        name: 'Michael Brown',
        email: 'michael.brown@example.com',
        role: 'Student',
        major: 'History',
        dateOfBirth: '2005-11-30',
        address: '789 Main St, Learnington, LG 54321',
        guardianName: 'David Brown',
        guardianPhone: '777-888-9999',
        classId: 'G10-A'
    },
];

users.push(...students.filter(s => !users.some(u => u.id === s.id)));


export let subjects: Subject[] = [
  { id: '1', name: 'Mathematics', code: 'MATH' },
  { id: '2', name: 'Science', code: 'SCI' },
  { id: '3', name: 'History', code: 'HIST' },
  { id: '4', name: 'English', code: 'ENGL' },
];

export let academicYears: AcademicYear[] = [
    {
        id: '1',
        year: '2023-2024',
        startDate: '2023-09-01',
        endDate: '2024-06-15',
        terms: [
            { id: 't1', name: 'Fall 2023', startDate: '2023-09-01', endDate: '2023-12-20' },
            { id: 't2', name: 'Spring 2024', startDate: '2024-01-10', endDate: '2024-06-15' },
        ]
    },
     {
        id: '2',
        year: '2024-2025',
        startDate: '2024-09-01',
        endDate: '2025-06-15',
        terms: [
            { id: 't3', name: 'Fall 2024', startDate: '2024-09-01', endDate: '2024-12-20' },
            { id: 't4', name: 'Spring 2025', startDate: '2025-01-10', endDate: '2025-06-15' },
        ]
    }
];

export const classes = [
    { id: 'G10-A', name: 'Grade 10 - Section A' },
    { id: 'G9-B', name: 'Grade 9 - Section B' }
];

export const attendanceRecords: AttendanceRecord[] = [
    { studentId: '1', studentName: 'John Doe', classId: 'G10-A', date: '2024-10-26', status: 'present' },
    { studentId: '5', studentName: 'Michael Brown', classId: 'G10-A', date: '2024-10-26', status: 'absent' },
    { studentId: '4', studentName: 'Emily White', classId: 'G9-B', date: '2024-10-26', status: 'present' },
];
