'use client';

import React, { useState } from 'react';
import { CRMLead, CRMStage, CRMActivity, CRMTask, SchoolSection } from '@/lib/types';
import { 
  Users, 
  Plus, 
  Search, 
  Phone, 
  Mail, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  ArrowLeft,
  X,
  Send,
  MessageSquare,
  FileText,
  Filter,
  TrendingUp
} from 'lucide-react';

interface CRMBoardProps {
  initialLeads: CRMLead[];
}

export const CRMBoard: React.FC<CRMBoardProps> = ({ initialLeads }) => {
  const [leads, setLeads] = useState<CRMLead[]>(initialLeads);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSection, setFilterSection] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<CRMLead | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Lead Form State
  const [newParentName, setNewParentName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newChildName, setNewChildName] = useState('');
  const [newIntendedSection, setNewIntendedSection] = useState<SchoolSection>('primary');
  const [newSource, setNewSource] = useState<'Website Form' | 'Referral' | 'Walk-In' | 'Social Media'>('Website Form');
  const [newNotes, setNewNotes] = useState('');

  // Template email generator state
  const [templateType, setTemplateType] = useState<'tour' | 'app_received' | 'followup'>('tour');

  const stages: { key: CRMStage; label: string; color: string }[] = [
    { key: 'new_inquiry', label: 'New Inquiry', color: 'bg-sky-500' },
    { key: 'contacted', label: 'Contacted', color: 'bg-royal-500' },
    { key: 'tour_scheduled', label: 'Tour Scheduled', color: 'bg-amber-500' },
    { key: 'application_submitted', label: 'Application Submitted', color: 'bg-indigo-600' },
    { key: 'enrolled', label: 'Enrolled / Done', color: 'bg-emerald-600' },
  ];

  // Move lead stage
  const moveStage = (leadId: string, direction: 'prev' | 'next') => {
    setLeads((prevLeads) =>
      prevLeads.map((lead) => {
        if (lead.id !== leadId) return lead;
        const stageKeys = stages.map((s) => s.key);
        const currentIndex = stageKeys.indexOf(lead.stage);
        const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
        if (newIndex >= 0 && newIndex < stageKeys.length) {
          const newStage = stageKeys[newIndex];
          return { ...lead, stage: newStage, updatedAt: new Date().toISOString().split('T')[0] };
        }
        return lead;
      })
    );
  };

  // Add new lead
  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newParentName || !newChildName) return;

    const newLeadItem: CRMLead = {
      id: `lead-${Date.now()}`,
      parentName: newParentName,
      email: newEmail,
      phone: newPhone,
      childName: newChildName,
      childAge: 7,
      intendedSection: newIntendedSection,
      stage: 'new_inquiry',
      source: newSource,
      notes: newNotes,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      activities: [
        {
          id: `act-${Date.now()}`,
          type: 'Note',
          description: 'Lead created manually via CRM panel.',
          createdByName: 'Admin',
          createdAt: new Date().toLocaleString(),
        },
      ],
      tasks: [],
    };

    setLeads([newLeadItem, ...leads]);
    setIsAddModalOpen(false);
    setNewParentName('');
    setNewChildName('');
    setNewEmail('');
    setNewPhone('');
    setNewNotes('');
  };

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.childName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone.includes(searchQuery);
    const matchesSection = filterSection === 'all' || lead.intendedSection === filterSection;
    return matchesSearch && matchesSection;
  });

  return (
    <div className="space-y-6">
      {/* Top Header & Search Bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-royal-100 text-royal-700 flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-royal-950">Admissions CRM Lead Pipeline</h3>
            <p className="text-xs text-slate-500">Kanban stage management for prospective families & inquiries</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Section Filter */}
          <select
            value={filterSection}
            onChange={(e) => setFilterSection(e.target.value)}
            className="px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All School Arms</option>
            <option value="primary">Primary Arm</option>
            <option value="secondary">Secondary College</option>
            <option value="madrasah">Madrasah Tahfiz</option>
          </select>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search parent/child..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Add Lead Button */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-gradient-to-r from-royal-600 to-royal-800 hover:from-royal-700 hover:to-royal-900 text-white font-bold text-xs rounded-xl shadow flex items-center space-x-1.5 transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Lead</span>
          </button>
        </div>
      </div>

      {/* Kanban Stages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => {
          const stageLeads = filteredLeads.filter((l) => l.stage === stage.key);

          return (
            <div
              key={stage.key}
              className="bg-slate-100/70 rounded-2xl p-3 border border-slate-200/80 min-h-[500px] flex flex-col space-y-3"
            >
              {/* Stage Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div className="flex items-center space-x-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${stage.color}`} />
                  <h4 className="font-bold text-xs text-royal-950 uppercase tracking-wider">
                    {stage.label}
                  </h4>
                </div>
                <span className="text-xs font-black bg-white px-2 py-0.5 rounded-full border text-slate-700">
                  {stageLeads.length}
                </span>
              </div>

              {/* Cards List */}
              <div className="space-y-3 flex-1 overflow-y-auto max-h-[650px] pr-1">
                {stageLeads.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-primary-300 cursor-pointer transition space-y-3 group relative"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-bold text-sm text-royal-950 group-hover:text-primary-500 transition-colors">
                          {lead.parentName}
                        </h5>
                        <p className="text-xs text-slate-500 font-medium">Child: {lead.childName}</p>
                      </div>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          lead.intendedSection === 'primary'
                            ? 'bg-sky-100 text-sky-800'
                            : lead.intendedSection === 'secondary'
                            ? 'bg-royal-100 text-royal-800'
                            : 'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        {lead.intendedSection}
                      </span>
                    </div>

                    {/* Contact & Source */}
                    <div className="text-xs text-slate-600 space-y-1">
                      <div className="flex items-center space-x-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{lead.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="text-[11px] text-slate-500">Source: {lead.source}</span>
                      </div>
                    </div>

                    {/* Quick Move Buttons */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          moveStage(lead.id, 'prev');
                        }}
                        disabled={stage.key === 'new_inquiry'}
                        className="p-1 text-slate-400 hover:text-royal-700 disabled:opacity-30 rounded hover:bg-slate-100 transition"
                        title="Move Previous Stage"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>

                      <span className="text-[10px] text-slate-400 font-medium">{lead.createdAt}</span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          moveStage(lead.id, 'next');
                        }}
                        disabled={stage.key === 'enrolled'}
                        className="p-1 text-slate-400 hover:text-royal-700 disabled:opacity-30 rounded hover:bg-slate-100 transition"
                        title="Move Next Stage"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}

                {stageLeads.length === 0 && (
                  <div className="text-center py-8 text-xs text-slate-400 italic">No leads in this stage</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Lead Detail Drawer / Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-end">
          <div className="bg-white w-full max-w-xl h-full shadow-2xl p-6 overflow-y-auto space-y-6 animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">Lead Profile Detail</span>
                <h3 className="text-xl font-bold text-royal-950">{selectedLead.parentName}</h3>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Demographics */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Child's Name:</span>
                <span className="font-bold text-royal-950 text-sm">{selectedLead.childName}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Intended Arm:</span>
                <span className="font-bold text-primary-700 uppercase">{selectedLead.intendedSection}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Phone:</span>
                <span className="font-bold text-slate-800">{selectedLead.phone}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Email:</span>
                <span className="font-bold text-slate-800">{selectedLead.email}</span>
              </div>
            </div>

            {/* Auto Follow-up Template Generator */}
            <div className="bg-royal-50 p-4 rounded-xl border border-royal-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-royal-950 uppercase flex items-center space-x-1.5">
                  <Send className="w-4 h-4 text-royal-600" />
                  <span>Auto Follow-up Message Generator</span>
                </span>
                <div className="flex space-x-1">
                  <button
                    onClick={() => setTemplateType('tour')}
                    className={`px-2 py-1 text-[11px] font-bold rounded ${templateType === 'tour' ? 'bg-royal-700 text-white' : 'bg-white text-royal-800'}`}
                  >
                    Tour Email
                  </button>
                  <button
                    onClick={() => setTemplateType('app_received')}
                    className={`px-2 py-1 text-[11px] font-bold rounded ${templateType === 'app_received' ? 'bg-royal-700 text-white' : 'bg-white text-royal-800'}`}
                  >
                    SMS Alert
                  </button>
                </div>
              </div>

              <textarea
                readOnly
                rows={3}
                value={
                  templateType === 'tour'
                    ? `Dear ${selectedLead.parentName},\nThank you for your interest in Plan Aid Academy! We are excited to invite you and ${selectedLead.childName} for a guided tour of our STEM Robotics Lab and classrooms.`
                    : `Plan Aid Academy: Dear ${selectedLead.parentName}, we have received your inquiry for ${selectedLead.childName}. Admissions hotline: +234 803 123 4567.`
                }
                className="w-full p-2.5 bg-white border border-royal-200 rounded-lg text-xs font-mono text-slate-800"
              />
              <button 
                onClick={() => alert("Follow-up template copied to clipboard!")}
                className="px-3 py-1.5 bg-royal-700 text-white font-bold text-xs rounded-lg hover:bg-royal-800 transition"
              >
                Copy Template
              </button>
            </div>

            {/* Activity History */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-royal-950">Activity & Interaction History</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedLead.activities.map((act) => (
                  <div key={act.id} className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-royal-900">
                      <span>{act.type} Logged</span>
                      <span className="text-[10px] text-slate-400 font-normal">{act.createdAt}</span>
                    </div>
                    <p className="text-slate-600">{act.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Lead Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-lg text-royal-950">Add Prospective Lead</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Parent / Guardian Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Kabiru Sani"
                  value={newParentName}
                  onChange={(e) => setNewParentName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                  <input
                    type="text"
                    required
                    placeholder="+234 803 123 4567"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="parent@gmail.com"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Child's Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hamza Sani"
                    value={newChildName}
                    onChange={(e) => setNewChildName(e.target.value)}
                    className="w-full px-3 py-2 border rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Intended School Arm</label>
                  <select
                    value={newIntendedSection}
                    onChange={(e) => setNewIntendedSection(e.target.value as SchoolSection)}
                    className="w-full px-3 py-2 border rounded-xl"
                  >
                    <option value="primary">Primary (Basic Ed)</option>
                    <option value="secondary">Secondary College</option>
                    <option value="madrasah">Madrasah Tahfiz</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Notes / Special Requests</label>
                <textarea
                  rows={2}
                  placeholder="Parent inquired about robotics lab or boarding fees..."
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  className="w-full px-3 py-2 border rounded-xl"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-royal-700 hover:bg-royal-800 text-white font-bold rounded-xl shadow"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
