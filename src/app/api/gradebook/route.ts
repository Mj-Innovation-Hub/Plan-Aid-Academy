import { NextResponse } from 'next/server';
import { mockSubjectScores } from '@/lib/mockData';
import { SubjectScore } from '@/lib/types';

let scoresStore: SubjectScore[] = [...mockSubjectScores];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const subject = searchParams.get('subject');

  const filteredScores = subject
    ? scoresStore.filter((s) => s.subjectName.toLowerCase() === subject.toLowerCase())
    : scoresStore;

  const totals = filteredScores.map((s) => s.total);
  const avg = totals.length > 0 ? (totals.reduce((a, b) => a + b, 0) / totals.length).toFixed(1) : 0;
  const maxScore = totals.length > 0 ? Math.max(...totals) : 0;

  return NextResponse.json({
    success: true,
    stats: {
      classAverage: Number(avg),
      highestScore: maxScore,
      totalEntries: filteredScores.length,
    },
    scores: filteredScores,
  });
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { studentId, subjectName, ca1, ca2, exam } = body;

    const computeGrade = (total: number) => {
      if (total >= 75) return 'A';
      if (total >= 65) return 'B';
      if (total >= 55) return 'C';
      if (total >= 45) return 'D';
      if (total >= 40) return 'E';
      return 'F';
    };

    const newTotal = Number(ca1) + Number(ca2) + Number(exam);
    const newGrade = computeGrade(newTotal);

    const scoreIdx = scoresStore.findIndex(
      (s) => s.studentId === studentId && s.subjectName === subjectName
    );

    if (scoreIdx !== -1) {
      scoresStore[scoreIdx] = {
        ...scoresStore[scoreIdx],
        ca1: Number(ca1),
        ca2: Number(ca2),
        exam: Number(exam),
        total: newTotal,
        grade: newGrade,
      };
    } else {
      scoresStore.push({
        studentId,
        subjectName,
        ca1: Number(ca1),
        ca2: Number(ca2),
        exam: Number(exam),
        total: newTotal,
        grade: newGrade,
        remarks: newGrade === 'A' ? 'Excellent' : 'Good',
      });
    }

    return NextResponse.json({
      success: true,
      message: `Score updated for ${subjectName}`,
      updatedScore: {
        ca1,
        ca2,
        exam,
        total: newTotal,
        grade: newGrade,
      },
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update score' }, { status: 500 });
  }
}
