import { NextResponse } from 'next/server';
import { mockAnnouncements } from '@/lib/mockData';
import { Announcement } from '@/lib/types';

let announcementsStore: Announcement[] = [...mockAnnouncements];

export async function GET() {
  return NextResponse.json({
    success: true,
    announcements: announcementsStore,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, summary, content, author, targetAudience } = body;

    if (!title || !summary) {
      return NextResponse.json(
        { success: false, message: 'Title and summary are required' },
        { status: 400 }
      );
    }

    const newAnnouncement: Announcement = {
      id: `anc-${Date.now()}`,
      title,
      category: category || 'Academic',
      author: author || 'School Management',
      targetAudience: targetAudience || 'Public',
      date: new Date().toISOString().split('T')[0],
      summary,
      content: content || summary,
    };

    announcementsStore.unshift(newAnnouncement);

    return NextResponse.json({
      success: true,
      message: `Announcement "${title}" published successfully!`,
      announcement: newAnnouncement,
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to publish announcement' }, { status: 500 });
  }
}
