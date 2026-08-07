import { NextResponse } from 'next/server';
import { mockCRMLeads } from '@/lib/mockData';
import { CRMLead } from '@/lib/types';

// In-memory data store for serverless execution
let leadsStore: CRMLead[] = [...mockCRMLeads];

export async function GET() {
  return NextResponse.json({
    success: true,
    total: leadsStore.length,
    leads: leadsStore,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parentName, email, phone, childName, intendedSection, notes } = body;

    if (!parentName || !childName || !phone) {
      return NextResponse.json(
        { success: false, message: 'Parent name, child name, and phone number are required.' },
        { status: 400 }
      );
    }

    const newLead: CRMLead = {
      id: `lead-${Date.now()}`,
      parentName,
      email: email || 'parent@gmail.com',
      phone,
      childName,
      intendedSection: intendedSection || 'secondary',
      stage: 'New Inquiry',
      notes: notes || 'Online website inquiry',
      createdDate: new Date().toISOString().split('T')[0],
    };

    leadsStore.unshift(newLead);

    return NextResponse.json({
      success: true,
      message: `Admission inquiry for ${childName} logged successfully into Admissions CRM!`,
      lead: newLead,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to process admission inquiry.' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, stage } = body;

    const leadIndex = leadsStore.findIndex((l) => l.id === id);
    if (leadIndex === -1) {
      return NextResponse.json({ success: false, message: 'Lead not found' }, { status: 404 });
    }

    leadsStore[leadIndex].stage = stage;

    return NextResponse.json({
      success: true,
      message: `Lead ${leadsStore[leadIndex].childName} updated to stage ${stage}`,
      lead: leadsStore[leadIndex],
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update lead' }, { status: 500 });
  }
}
