import { NextResponse } from 'next/server';
import { mockUsers } from '@/lib/mockData';
import { UserRole } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, role } = body;

    // Default demo fallback if no email specified
    const targetRole: UserRole = role || 'admin';
    const matchedUser = mockUsers.find((u) => u.role === targetRole) || mockUsers[1];

    return NextResponse.json({
      success: true,
      message: `Signed in successfully as ${matchedUser.name}`,
      user: matchedUser,
      role: targetRole,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid authentication request' },
      { status: 400 }
    );
  }
}
