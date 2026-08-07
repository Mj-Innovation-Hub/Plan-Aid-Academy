import { NextResponse } from 'next/server';
import { mockCRMLeads } from '@/lib/mockData';
import { CRMLead, CRMStage } from '@/lib/types';

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
    const { parentName, email, phone, childName, childAge, intendedSection, notes } = body;

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
      childAge: childAge ? Number(childAge) : 9,
      intendedSection: intendedSection || 'secondary',
      stage: 'new_inquiry',
      source: 'Website Form',
      notes: notes || 'Online website inquiry',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      activities: [],
      tasks: [],
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

    leadsStore[leadIndex].stage = stage as CRMStage;
    leadsStore[leadIndex].updatedAt = new Date().toISOString().split('T')[0];

    return NextResponse.json({
      success: true,
      message: `Lead ${leadsStore[leadIndex].childName} updated to stage ${stage}`,
      lead: leadsStore[leadIndex],
    });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Failed to update lead' }, { status: 500 });
  }
}
