export type UserRole = 'super_admin' | 'admin' | 'teacher' | 'student_parent';

export type SchoolSection = 'primary' | 'secondary' | 'madrasah';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  section?: SchoolSection;
  studentId?: string; // For parent/student link
  assignedClasses?: string[]; // For teachers
}

export interface Student {
  id: string;
  admissionNo: string;
  fullName: string;
  gender: 'Male' | 'Female';
  dob: string;
  section: SchoolSection;
  class: string;
  arm?: string; // e.g. "Gold", "Diamond"
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  address: string;
  photoUrl: string;
  status: 'Active' | 'Graduated' | 'Suspended' | 'Pending';
  hifzProgress?: {
    surahsMemorized: number; // e.g. 15 out of 114
    currentSurah: string;
    tajweedLevel: 'Basic' | 'Intermediate' | 'Advanced' | 'Mumtaz';
    lastTestedDate: string;
    hifzTeacherRemark: string;
  };
  attendancePercentage: number;
}

export interface Teacher {
  id: string;
  staffId: string;
  fullName: string;
  email: string;
  phone: string;
  section: SchoolSection;
  qualification: string;
  assignedSubjects: string[];
  assignedClasses: string[];
  photoUrl: string;
  status: 'Active' | 'On Leave';
}

export interface SubjectScore {
  studentId: string;
  subjectName: string;
  ca1: number; // max 15
  ca2: number; // max 15
  exam: number; // max 70
  total: number; // ca1 + ca2 + exam
  grade: 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  rank?: number;
  remarks: string;
}

export interface ReportCard {
  id: string;
  studentId: string;
  studentName: string;
  class: string;
  section: SchoolSection;
  term: 'Term 1' | 'Term 2' | 'Term 3';
  session: string; // e.g. "2025/2026"
  scores: SubjectScore[];
  totalScore: number;
  averageScore: number;
  position: number;
  outOf: number;
  classTeacherRemarks: string;
  principalRemarks: string;
  attendanceDays: number;
  totalDays: number;
  nextTermBegins: string;
  status: 'Draft' | 'Published';
}

export type CRMStage = 
  | 'new_inquiry' 
  | 'contacted' 
  | 'tour_scheduled' 
  | 'application_submitted' 
  | 'enrolled' 
  | 'not_proceeding';

export interface CRMActivity {
  id: string;
  type: 'Call' | 'Email' | 'Visit' | 'Note';
  description: string;
  createdByName: string;
  createdAt: string;
}

export interface CRMTask {
  id: string;
  title: string;
  dueDate: string;
  completed: boolean;
}

export interface CRMLead {
  id: string;
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: number;
  intendedSection: SchoolSection;
  stage: CRMStage;
  source: 'Website Form' | 'Referral' | 'Walk-In' | 'Social Media' | 'Other';
  notes: string;
  createdAt: string;
  updatedAt: string;
  activities: CRMActivity[];
  tasks: CRMTask[];
}

export interface FeeRecord {
  id: string;
  studentId: string;
  studentName: string;
  class: string;
  section: SchoolSection;
  term: string;
  session: string;
  totalAmount: number;
  paidAmount: number;
  balance: number;
  status: 'Paid' | 'Partial' | 'Overdue';
  dueDate: string;
  paymentHistory: {
    id: string;
    amount: number;
    date: string;
    method: 'Bank Transfer' | 'Card' | 'Cash';
    receiptNo: string;
  }[];
}

export interface Announcement {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  category: 'Academic' | 'Islamic Event' | 'STEM & Tech' | 'Sports' | 'General';
  targetAudience: 'Public' | 'All Portal' | 'Parents' | 'Teachers';
  date: string;
  imageUrl?: string;
  isImportant?: boolean;
}

export interface SchoolSectionConfig {
  id: SchoolSection;
  title: string;
  arabicTitle?: string;
  tagline: string;
  description: string;
  colorAccent: string;
  bgGradient: string;
  curriculum: string[];
  headOfSection: string;
  studentCount: number;
  classesCount: number;
}

export interface AuditLog {
  id: string;
  user: string;
  role: UserRole;
  action: string;
  target: string;
  timestamp: string;
  ipAddress: string;
}
