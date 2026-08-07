import { Student, Teacher, CRMLead, FeeRecord, Announcement, SchoolSectionConfig, User, AuditLog, SubjectScore, ReportCard } from './types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    name: 'Dr. Abubakar Al-Mansoor',
    email: 'superadmin@planaid.edu',
    role: 'super_admin',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'user-2',
    name: 'Mrs. Amina Bello',
    email: 'admin@planaid.edu',
    role: 'admin',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'user-3',
    name: 'Engr. Tariq Hassan (STEM Head)',
    email: 'teacher@planaid.edu',
    role: 'teacher',
    section: 'secondary',
    assignedClasses: ['JSS 3 Gold', 'SSS 2 Tech'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 'user-4',
    name: 'Ibrahim & Aisha Danjuma (Parents of Zayd)',
    email: 'parent@planaid.edu',
    role: 'student_parent',
    studentId: 'std-101',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  }
];

export const mockSectionConfigs: SchoolSectionConfig[] = [
  {
    id: 'primary',
    title: 'Primary Education',
    arabicTitle: 'التعليم الابتدائي',
    tagline: 'Building Strong Foundations in Science, Literacy & Ethics',
    description: 'Our primary arm combines standard national curriculum with hands-on early robotics, critical thinking, and sound Islamic moral orientation for ages 5-11.',
    colorAccent: '#20a7db',
    bgGradient: 'from-sky-500/10 to-primary-100',
    curriculum: ['Basic Science & Tech', 'Mathematics', 'English Language', 'Social Studies', 'Coding & Logic', 'Cultural Arts'],
    headOfSection: 'Mrs. Fatima Ibrahim (M.Ed)',
    studentCount: 240,
    classesCount: 12
  },
  {
    id: 'secondary',
    title: 'Secondary College',
    arabicTitle: 'المدرسة الثانوية',
    tagline: 'Excellence in STEM, WAEC/NECO & Future Leadership',
    description: 'Empowering young minds with state-of-the-art robotics labs, rigorous WAEC/NECO preparation, coding bootcamps, and debate clubs.',
    colorAccent: '#305cde',
    bgGradient: 'from-royal-600/10 to-royal-100',
    curriculum: ['Advanced Physics & Chemistry', 'Robotics & Automation', 'Further Mathematics', 'Computer Science', 'Technical Drawing', 'Civic Education'],
    headOfSection: 'Dr. Usman Danlami (Ph.D)',
    studentCount: 310,
    classesCount: 14
  },
  {
    id: 'madrasah',
    title: 'Madrasah Tahfiz & Islamic Studies',
    arabicTitle: 'مدرسة التحفيظ والدراسات الإسلامية',
    tagline: 'Illuminating Hearts through Quran, Tajweed & Arabic Heritage',
    description: 'Structured Tahfizul Quran memorization track with accredited Tajweed certification, Fiqh, Hadith, and fluent spoken Arabic.',
    colorAccent: '#0c1d4e',
    bgGradient: 'from-emerald-900/10 to-sky-100',
    curriculum: ['Hifz (Quran Memorization)', 'Rules of Tajweed', 'Arabic Grammar (Nahw & Sarf)', 'Hadith & Fiqh', 'Islamic History (Seerah)', 'Akhlaq & Adab'],
    headOfSection: 'Ustadh Muhammad Al-Hafiz',
    studentCount: 185,
    classesCount: 9
  }
];

export const mockStudents: Student[] = [
  {
    id: 'std-101',
    admissionNo: 'PAA/2024/0142',
    fullName: 'Zayd Ibrahim Danjuma',
    gender: 'Male',
    dob: '2012-05-14',
    section: 'secondary',
    class: 'JSS 3 Gold',
    arm: 'Gold',
    parentName: 'Ibrahim Danjuma',
    parentPhone: '+234 803 123 4567',
    parentEmail: 'parent@planaid.edu',
    address: 'No. 14 Airport Road, GRA, Kano',
    photoUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    status: 'Active',
    hifzProgress: {
      surahsMemorized: 24,
      currentSurah: 'Surah Al-Mulk (67)',
      tajweedLevel: 'Advanced',
      lastTestedDate: '2026-07-28',
      hifzTeacherRemark: 'Excellent pronunciation and strong retention during morning revision.'
    },
    attendancePercentage: 96.5
  },
  {
    id: 'std-102',
    admissionNo: 'PAA/2024/0188',
    fullName: 'Maryam Khadijah Bello',
    gender: 'Female',
    dob: '2014-09-20',
    section: 'primary',
    class: 'Primary 5 Diamond',
    arm: 'Diamond',
    parentName: 'Alhaji Musa Bello',
    parentPhone: '+234 802 987 6543',
    parentEmail: 'mbello@gmail.com',
    address: 'Plot 45 Victoria Crescent, Kaduna',
    photoUrl: 'https://images.unsplash.com/photo-1595454223600-91fb27218961?auto=format&fit=crop&w=400&q=80',
    status: 'Active',
    attendancePercentage: 98.0
  },
  {
    id: 'std-103',
    admissionNo: 'PAA/2023/0091',
    fullName: 'Bilal Umar Farooq',
    gender: 'Male',
    dob: '2010-02-11',
    section: 'madrasah',
    class: 'Tahfiz Level 2',
    arm: 'Quran Track',
    parentName: 'Dr. Umar Farooq',
    parentPhone: '+234 805 444 3322',
    parentEmail: 'ufarooq@health.gov.ng',
    address: '12 Sunshine Estate, Abuja',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    status: 'Active',
    hifzProgress: {
      surahsMemorized: 48,
      currentSurah: 'Surah Yaseen (36)',
      tajweedLevel: 'Mumtaz',
      lastTestedDate: '2026-08-02',
      hifzTeacherRemark: 'Completed Juz 22 with outstanding vocal clarity.'
    },
    attendancePercentage: 100.0
  },
  {
    id: 'std-104',
    admissionNo: 'PAA/2024/0204',
    fullName: 'Fatima Zarah Ahmed',
    gender: 'Female',
    dob: '2011-11-04',
    section: 'secondary',
    class: 'JSS 3 Gold',
    arm: 'Gold',
    parentName: 'Engr. Suleiman Ahmed',
    parentPhone: '+234 809 111 8899',
    parentEmail: 'sahmed@techhub.ng',
    address: 'No 8 Ring Road, Ibadan',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    status: 'Active',
    attendancePercentage: 94.2
  },
  {
    id: 'std-105',
    admissionNo: 'PAA/2025/0008',
    fullName: 'Yusuf Usman Garba',
    gender: 'Male',
    dob: '2015-01-30',
    section: 'primary',
    class: 'Primary 3 Ruby',
    arm: 'Ruby',
    parentName: 'Hajia Zainab Garba',
    parentPhone: '+234 813 777 5511',
    parentEmail: 'zgarba@yahoo.com',
    address: 'Block C 10 Independence Way, Zaria',
    photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    status: 'Active',
    attendancePercentage: 91.0
  }
];

export const mockTeachers: Teacher[] = [
  {
    id: 'tch-1',
    staffId: 'STF/2022/012',
    fullName: 'Engr. Tariq Hassan',
    email: 'teacher@planaid.edu',
    phone: '+234 803 555 1212',
    section: 'secondary',
    qualification: 'B.Eng Robotics & Mechatronics (FutMinna)',
    assignedSubjects: ['Robotics & Automation', 'Computer Studies', 'Basic Tech'],
    assignedClasses: ['JSS 3 Gold', 'SSS 2 Tech'],
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    status: 'Active'
  },
  {
    id: 'tch-2',
    staffId: 'STF/2021/008',
    fullName: 'Ustadh Ahmad Abdulrahim',
    email: 'a.abdulrahim@planaid.edu',
    phone: '+234 802 444 9900',
    section: 'madrasah',
    qualification: 'B.A. Islamic Studies (Al-Azhar University, Cairo)',
    assignedSubjects: ['Hifz & Murajaah', 'Tajweed Science', 'Arabic Nahw'],
    assignedClasses: ['Tahfiz Level 1', 'Tahfiz Level 2'],
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    status: 'Active'
  },
  {
    id: 'tch-3',
    staffId: 'STF/2023/019',
    fullName: 'Mrs. Grace Chidimma',
    email: 'g.chidimma@planaid.edu',
    phone: '+234 806 777 2345',
    section: 'primary',
    qualification: 'B.Ed Mathematics (UNN)',
    assignedSubjects: ['Mathematics', 'Quantitative Reasoning'],
    assignedClasses: ['Primary 5 Diamond', 'Primary 4 Emerald'],
    photoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    status: 'Active'
  }
];

export const mockSubjectScores: SubjectScore[] = [
  { studentId: 'std-101', subjectName: 'Mathematics', ca1: 14, ca2: 13, exam: 62, total: 89, grade: 'A', remarks: 'Outstanding analytical skills.' },
  { studentId: 'std-101', subjectName: 'English Language', ca1: 12, ca2: 14, exam: 58, total: 84, grade: 'A', remarks: 'Fluent expression and comprehension.' },
  { studentId: 'std-101', subjectName: 'Robotics & STEM', ca1: 15, ca2: 15, exam: 67, total: 97, grade: 'A', remarks: 'Designed winning obstacle rover in lab.' },
  { studentId: 'std-101', subjectName: 'Islamic Studies & Quran', ca1: 14, ca2: 14, exam: 65, total: 93, grade: 'A', remarks: 'Flawless recitation with Tajweed.' },
  { studentId: 'std-101', subjectName: 'Basic Science', ca1: 13, ca2: 12, exam: 55, total: 80, grade: 'A', remarks: 'Great practical lab performance.' },
  
  { studentId: 'std-104', subjectName: 'Mathematics', ca1: 11, ca2: 12, exam: 50, total: 73, grade: 'B', remarks: 'Good grasp of algebra concepts.' },
  { studentId: 'std-104', subjectName: 'English Language', ca1: 14, ca2: 13, exam: 61, total: 88, grade: 'A', remarks: 'Exceptional essay writing.' },
  { studentId: 'std-104', subjectName: 'Robotics & STEM', ca1: 13, ca2: 14, exam: 59, total: 86, grade: 'A', remarks: 'Enthusiastic coder.' },
  { studentId: 'std-104', subjectName: 'Islamic Studies & Quran', ca1: 12, ca2: 13, exam: 58, total: 83, grade: 'A', remarks: 'Very attentive during Hadith lessons.' },
  { studentId: 'std-104', subjectName: 'Basic Science', ca1: 10, ca2: 11, exam: 48, total: 69, grade: 'B', remarks: 'Solid effort in biology experiments.' }
];

export const mockReportCards: ReportCard[] = [
  {
    id: 'rc-101',
    studentId: 'std-101',
    studentName: 'Zayd Ibrahim Danjuma',
    class: 'JSS 3 Gold',
    section: 'secondary',
    term: 'Term 3',
    session: '2025/2026',
    scores: mockSubjectScores.filter(s => s.studentId === 'std-101'),
    totalScore: 443,
    averageScore: 88.6,
    position: 1,
    outOf: 28,
    classTeacherRemarks: 'Zayd is an exemplary student who balances high technical innovation in the STEM lab with humility and spiritual dedication.',
    principalRemarks: 'Promoted to Senior Secondary (SSS 1 Tech Stream) with Distinction. Keep shining!',
    attendanceDays: 62,
    totalDays: 64,
    nextTermBegins: '2026-09-14',
    status: 'Published'
  }
];

export const mockCRMLeads: CRMLead[] = [
  {
    id: 'lead-1',
    parentName: 'Dr. Kabiru Sani',
    email: 'ksani@muni.edu.ng',
    phone: '+234 803 999 1122',
    childName: 'Hamza Kabiru Sani',
    childAge: 10,
    intendedSection: 'secondary',
    stage: 'new_inquiry',
    source: 'Website Form',
    notes: 'Parent inquired about JS1 admission and STEM lab robotics equipment.',
    createdAt: '2026-08-05',
    updatedAt: '2026-08-05',
    activities: [
      { id: 'act-1', type: 'Email', description: 'Inquiry form submitted online via Admissions page.', createdByName: 'System Auto', createdAt: '2026-08-05 10:15' }
    ],
    tasks: [
      { id: 'tsk-1', title: 'Call parent to discuss JS1 robotics scholarship interview.', dueDate: '2026-08-08', completed: false }
    ]
  },
  {
    id: 'lead-2',
    parentName: 'Mrs. Halima Aliyu',
    email: 'haliyu@gmail.com',
    phone: '+234 802 888 3344',
    childName: 'Amina Aliyu',
    childAge: 6,
    intendedSection: 'primary',
    stage: 'contacted',
    source: 'Referral',
    notes: 'Referred by Alhaji Musa Bello. Interested in Primary 1 hybrid coding + Islamic values.',
    createdAt: '2026-08-02',
    updatedAt: '2026-08-04',
    activities: [
      { id: 'act-2', type: 'Call', description: 'Spoke with Mrs. Halima. Explained school morning bus service and lunch plan.', createdByName: 'Mrs. Amina Bello', createdAt: '2026-08-04 14:20' }
    ],
    tasks: [
      { id: 'tsk-2', title: 'Send primary arm brochure & fee structure PDF.', dueDate: '2026-08-07', completed: true }
    ]
  },
  {
    id: 'lead-3',
    parentName: 'Alhaji Tukur Shehu',
    email: 'tukur.shehu@logistics.ng',
    phone: '+234 805 111 6677',
    childName: 'Mu’adh Tukur Shehu',
    childAge: 12,
    intendedSection: 'madrasah',
    stage: 'tour_scheduled',
    source: 'Walk-In',
    notes: 'Wants full boarding Tahfiz program for Quran memorization.',
    createdAt: '2026-07-28',
    updatedAt: '2026-08-06',
    activities: [
      { id: 'act-3', type: 'Visit', description: 'Visited school campus. Toured Madrasah hall and computer lab.', createdByName: 'Ustadh Muhammad', createdAt: '2026-08-06 11:00' }
    ],
    tasks: [
      { id: 'tsk-3', title: 'Conduct Tajweed assessment with Hifz Head Ustadh.', dueDate: '2026-08-10', completed: false }
    ]
  },
  {
    id: 'lead-4',
    parentName: 'Barr. Aisha Yusuf',
    email: 'aisha.yusuf@chambers.com',
    phone: '+234 809 333 4455',
    childName: 'Zainab Abubakar',
    childAge: 14,
    intendedSection: 'secondary',
    stage: 'application_submitted',
    source: 'Social Media',
    notes: 'Submitted online form for SSS 1 Science/Tech stream.',
    createdAt: '2026-07-20',
    updatedAt: '2026-08-03',
    activities: [
      { id: 'act-4', type: 'Email', description: 'Application fee payment received N25,000.', createdByName: 'Bursar Office', createdAt: '2026-08-03 09:30' }
    ],
    tasks: [
      { id: 'tsk-4', title: 'Schedule entrance examination & interview.', dueDate: '2026-08-12', completed: false }
    ]
  },
  {
    id: 'lead-5',
    parentName: 'Mr. David Okafor',
    email: 'd.okafor@company.com',
    phone: '+234 803 777 8899',
    childName: 'Emmanuel Okafor',
    childAge: 9,
    intendedSection: 'primary',
    stage: 'enrolled',
    source: 'Website Form',
    notes: 'Enrolled for Primary 4 STEM track starting Term 1.',
    createdAt: '2026-07-10',
    updatedAt: '2026-08-01',
    activities: [
      { id: 'act-5', type: 'Note', description: 'Admission letter issued and tuition fees fully settled.', createdByName: 'Super Admin', createdAt: '2026-08-01 16:45' }
    ],
    tasks: []
  }
];

export const mockFeeRecords: FeeRecord[] = [
  {
    id: 'fee-101',
    studentId: 'std-101',
    studentName: 'Zayd Ibrahim Danjuma',
    class: 'JSS 3 Gold',
    section: 'secondary',
    term: 'Term 3',
    session: '2025/2026',
    totalAmount: 250000,
    paidAmount: 250000,
    balance: 0,
    status: 'Paid',
    dueDate: '2026-05-15',
    paymentHistory: [
      { id: 'pay-1', amount: 150000, date: '2026-05-10', method: 'Bank Transfer', receiptNo: 'RCP-88901' },
      { id: 'pay-2', amount: 100000, date: '2026-06-01', method: 'Card', receiptNo: 'RCP-89240' }
    ]
  },
  {
    id: 'fee-102',
    studentId: 'std-102',
    studentName: 'Maryam Khadijah Bello',
    class: 'Primary 5 Diamond',
    section: 'primary',
    term: 'Term 3',
    session: '2025/2026',
    totalAmount: 180000,
    paidAmount: 120000,
    balance: 60000,
    status: 'Partial',
    dueDate: '2026-05-15',
    paymentHistory: [
      { id: 'pay-3', amount: 120000, date: '2026-05-12', method: 'Bank Transfer', receiptNo: 'RCP-88944' }
    ]
  },
  {
    id: 'fee-103',
    studentId: 'std-103',
    studentName: 'Bilal Umar Farooq',
    class: 'Tahfiz Level 2',
    section: 'madrasah',
    term: 'Term 3',
    session: '2025/2026',
    totalAmount: 200000,
    paidAmount: 200000,
    balance: 0,
    status: 'Paid',
    dueDate: '2026-05-15',
    paymentHistory: [
      { id: 'pay-4', amount: 200000, date: '2026-05-05', method: 'Bank Transfer', receiptNo: 'RCP-88812' }
    ]
  },
  {
    id: 'fee-104',
    studentId: 'std-104',
    studentName: 'Fatima Zarah Ahmed',
    class: 'JSS 3 Gold',
    section: 'secondary',
    term: 'Term 3',
    session: '2025/2026',
    totalAmount: 250000,
    paidAmount: 0,
    balance: 250000,
    status: 'Overdue',
    dueDate: '2026-05-15',
    paymentHistory: []
  }
];

export const mockAnnouncements: Announcement[] = [
  {
    id: 'ann-1',
    title: 'National Robotics & Coding Championship 2026 - Gold Medal Win',
    summary: 'Plan Aid Academy Secondary Robotics Team won 1st Place in the National Junior Automation Challenge with their autonomous solar rover.',
    content: 'We are overjoyed to announce that our senior secondary robotics squad represented Kano State and secured 1st position in the National Automation Competition held in Abuja. Under the guidance of Engr. Tariq Hassan, our students engineered an autonomous solar rover capable of navigating farmland obstacle courses.',
    author: 'Management',
    category: 'STEM & Tech',
    targetAudience: 'Public',
    date: '2026-08-01',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    isImportant: true
  },
  {
    id: 'ann-2',
    title: 'Annual Hifz Graduation & Quran Recitation Ceremony Announced',
    summary: 'Join us on Sunday September 6th as 14 students complete the full memorization of the Glorious Qur’an.',
    content: 'The Board of Trustees and Madrasah Directorate cordially invite all parents, guardians, and well-wishers to our 8th Annual Hifz Convocation. 14 brilliant young boys and girls will be crowned Huffman after completing their full 30 Juz memorization with Ijazah.',
    author: 'Ustadh Muhammad Al-Hafiz',
    category: 'Islamic Event',
    targetAudience: 'Public',
    date: '2026-07-25',
    imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
    isImportant: true
  },
  {
    id: 'ann-3',
    title: 'Resumption Date & Orientation for 2026/2027 Academic Session',
    summary: 'All new and returning students resume on Monday 14th September 2026.',
    content: 'School gates open at 7:15 AM on Monday 14th September 2026. Uniform compliance and complete book packs will be inspected during morning assembly.',
    author: 'School Registry',
    category: 'Academic',
    targetAudience: 'Parents',
    date: '2026-07-15',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
  }
];

export const mockGalleryItems = [
  {
    id: 'gal-1',
    title: 'STEM & Robotics Innovation Lab',
    category: 'STEM Lab',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    caption: 'Students assembling IoT micro-controllers and programming sensor arrays.'
  },
  {
    id: 'gal-2',
    title: 'Madrasah Quran Recitation Hall',
    category: 'Madrasah',
    imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=800&q=80',
    caption: 'Morning Hifz revision session under the supervision of qualified Huffaz.'
  },
  {
    id: 'gal-3',
    title: 'Modern Science Laboratory',
    category: 'Classrooms',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    caption: 'Hands-on chemistry and biology practical experiments.'
  },
  {
    id: 'gal-4',
    title: 'Primary Early Literacy Classroom',
    category: 'Classrooms',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    caption: 'Interactive digital boards and collaborative group learning.'
  },
  {
    id: 'gal-5',
    title: 'Annual Sports & Leadership Festival',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80',
    caption: 'Inter-house athletic games and team-building competitions.'
  },
  {
    id: 'gal-6',
    title: 'Assembly & Cultural Heritage Day',
    category: 'Events',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    caption: 'Celebrating academic accomplishments, morals, and student creativity.'
  }
];

export const mockAuditLogs: AuditLog[] = [
  {
    id: 'log-1',
    user: 'Dr. Abubakar Al-Mansoor',
    role: 'super_admin',
    action: 'Modified System Settings',
    target: 'Admission Cycle 2026/2027 toggled to OPEN',
    timestamp: '2026-08-07 11:20:14',
    ipAddress: '197.210.44.12'
  },
  {
    id: 'log-2',
    user: 'Mrs. Amina Bello',
    role: 'admin',
    action: 'Published Term Results',
    target: 'JSS 3 Gold - Term 3 Report Cards',
    timestamp: '2026-08-06 16:05:00',
    ipAddress: '197.210.44.88'
  },
  {
    id: 'log-3',
    user: 'Engr. Tariq Hassan',
    role: 'teacher',
    action: 'Updated Gradebook Scores',
    target: 'Robotics & STEM - JSS 3 Gold',
    timestamp: '2026-08-06 14:15:22',
    ipAddress: '197.210.45.01'
  }
];
