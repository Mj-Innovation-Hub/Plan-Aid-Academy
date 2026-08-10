'use client';

import React, { useState } from 'react';
import { CRMLead, CRMStage, CRMActivity, CRMTask, SchoolSection } from '@/lib/types';
import { 
  Users, 
  Plus, 
  Search, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  X,
  Send,
  MessageSquare,
  FileText
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

  const stages: { key: CRMStage; label: string; color: string }[] = [
    { key: 'new_inquiry', label: 'New Inquiry', color: 'bg-sky-600' },
    { key: 'contacted', label: 'Contacted', color: 'bg-[#1B2A4A]' },
    { key: 'tour_scheduled', label: 'Tour Scheduled', color: 'bg-amber-600' },
    { key: 'application_submitted', label: 'Application Submitted', color: 'bg-[#0F8B9E]' },
    { key: 'enrolled', label: 'Enrolled / Done', color: 'bg-emerald-700' },
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
      <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0F8B9E] flex items-center justify-center font-bold">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-[#1B2A4A]">Admissions CRM Pipeline</h3>
            <p className="text-xs text-slate-500">Kanban stage management for prospective families & inquiries</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          {/* Section Filter */}
          <select
            value={filterSection}
            onChange={(e) => setFilterSection(e.target.value)}
            className="px-3 py-2 font-semibold bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
          >
            <option value="all">All School Arms</option>
            <option value="primary">Primary Arm</option>
            <option value="secondary">Secondary College</option>
            <option value="madrasah">Madrasah Tahfiz</option>
          </select>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search parent/child..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
            />
          </div>

          {/* Add Lead Button */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold rounded-lg shadow-xs flex items-center space-x-1.5 transition"
          >
            <Plus className="w-4 h-4" />
            <span>Add Lead</span>
          </button>
        </div>
      </div>

      {/* Kanban Stages Grid */}
      <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4 scrollbar-thin">
        {stages.map((stage) => {
          const stageLeads = filteredLeads.filter((l) => l.stage === stage.key);

          return (
            <div
              key={stage.key}
              className="w-[280px] sm:w-[300px] md:w-auto shrink-0 bg-slate-50 rounded-xl p-3 border border-slate-200 min-h-[450px] flex flex-col space-y-3"
            >
              {/* Stage Header */}
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div className="flex items-center space-x-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${stage.color}`} />
                  <h4 className="font-bold text-xs text-[#1B2A4A] uppercase tracking-wider">
                    {stage.label}
                  </h4>
                </div>
                <span className="text-xs font-bold bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                  {stageLeads.length}
                </span>
              </div>

              {/* Cards List */}
              <div className="space-y-3 flex-1 overflow-y-auto max-h-[600px] pr-1">
                {stageLeads.map((lead) => (
                  <div
                    key={lead.id}
                    onClick={() => setSelectedLead(lead)}
                    className="bg-white rounded-lg p-3.5 border border-slate-200 shadow-xs hover:border-[#0F8B9E] cursor-pointer transition space-y-2.5"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div>
                        <h5 className="font-bold text-xs text-[#1B2A4A]">
                          {lead.parentName}
                        </h5>
                        <p className="text-[11px] text-slate-500">Child: {lead.childName}</p>
                      </div>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded uppercase ${
                          lead.intendedSection === 'primary'
                            ? 'bg-sky-50 text-[#0F8B9E]'
                            : lead.intendedSection === 'secondary'
                            ? 'bg-indigo-50 text-indigo-700'
                            : 'bg-emerald-50 text-emerald-800'
                        }`}
                      >
                        {lead.intendedSection}
                      </span>
                    </div>

                    {/* Contact & Source */}
                    <div className="text-xs text-slate-600 space-y-1">
                      <div className="flex items-center space-x-1.5 text-[11px]">
                        <Phone className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">{lead.phone}</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-[11px]">
                        <FileText className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="text-slate-500">Source: {lead.source}</span>
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
                        className="p-1 text-slate-400 hover:text-[#1B2A4A] disabled:opacity-30 rounded transition"
                        title="Move Previous Stage"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                      </button>

                      <span className="text-[10px] text-slate-400 font-medium">{lead.createdAt}</span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          moveStage(lead.id, 'next');
                        }}
                        disabled={stage.key === 'enrolled'}
                        className="p-1 text-slate-400 hover:text-[#0F8B9E] disabled:opacity-30 rounded transition"
                        title="Move Next Stage"
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Lead Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-[#1B2A4A]">Add New Admission Lead</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-3 text-xs">
              <div>
                <label className="font-semibold text-slate-700">Parent / Guardian Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alhaji Mustapha Bello"
                  value={newParentName}
                  onChange={(e) => setNewParentName(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700">Child's Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Zainab Mustapha"
                  value={newChildName}
                  onChange={(e) => setNewChildName(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234 803 000 0000"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700">Intended Arm</label>
                  <select
                    value={newIntendedSection}
                    onChange={(e) => setNewIntendedSection(e.target.value as SchoolSection)}
                    className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                  >
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="madrasah">Madrasah Tahfiz</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-slate-700">Inquiry Notes</label>
                <textarea
                  rows={2}
                  placeholder="Notes from initial conversation..."
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0F8B9E]"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#0F8B9E] hover:bg-[#0d7788] text-white font-bold rounded-lg"
                >
                  Create Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
