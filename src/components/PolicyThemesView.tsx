import React, { useState } from 'react';
import { 
  BookOpen, 
  Scale, 
  Building2, 
  Cpu, 
  Table2, 
  ShieldAlert, 
  Network, 
  HeartHandshake, 
  Users, 
  ArrowRight, 
  FileText, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  ExternalLink
} from 'lucide-react';
import { PolicyTheme, DistrictIssue, District } from '../types';

interface PolicyThemesViewProps {
  themes: PolicyTheme[];
  allIssues: DistrictIssue[];
  districts: District[];
  onOpenDocument: (district: District, page?: number) => void;
  initialThemeId?: number;
}

export const PolicyThemesView: React.FC<PolicyThemesViewProps> = ({
  themes,
  allIssues,
  districts,
  onOpenDocument,
  initialThemeId = 1
}) => {
  const [selectedThemeId, setSelectedThemeId] = useState<number>(initialThemeId);

  const selectedTheme = themes.find(t => t.id === selectedThemeId) || themes[0];
  const issuesForSelectedTheme = allIssues.filter(i => i.themeId === selectedTheme.id);

  // Get icons for each theme
  const getThemeIcon = (id: number) => {
    switch (id) {
      case 1: return Users;
      case 2: return Building2;
      case 3: return Cpu;
      case 4: return Table2;
      case 5: return ShieldAlert;
      case 6: return Network;
      case 7: return HeartHandshake;
      case 8: return Scale;
      default: return BookOpen;
    }
  };

  return (
    <div className="space-y-6">
      {/* View Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>8 DEFINITIVE INSTITUTIONAL POLICY THEMES</span>
          </div>
          <h2 className="text-xl font-bold font-judicial text-slate-900">
            Systemic Policy Clusters & Workable Solutions
          </h2>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Consolidation of issues into eight province-wide policy questions, isolating systemic root causes and presenting concrete recommendations for the kind consideration of the Hon’ble Chief Justice.
          </p>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Theme Selector List (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 px-1">
            Select Policy Theme
          </span>
          {themes.map(theme => {
            const Icon = getThemeIcon(theme.id);
            const isSelected = selectedTheme.id === theme.id;
            const issueCount = allIssues.filter(i => i.themeId === theme.id).length;

            return (
              <button
                key={theme.id}
                onClick={() => setSelectedThemeId(theme.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex items-start space-x-3 ${
                  isSelected
                    ? 'bg-emerald-950 text-white border-emerald-900 shadow-md ring-1 ring-emerald-800'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-emerald-500/40 hover:bg-slate-50'
                }`}
              >
                <div className={`p-2 rounded-lg flex-shrink-0 mt-0.5 ${
                  isSelected ? 'bg-emerald-800/80 text-amber-300' : 'bg-slate-100 text-slate-600'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-amber-300' : 'text-emerald-800'
                    }`}>
                      Theme {theme.id}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      isSelected ? 'bg-emerald-900 text-emerald-200' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {issueCount} Issues
                    </span>
                  </div>
                  <h3 className={`text-xs font-bold font-judicial truncate mt-0.5 ${
                    isSelected ? 'text-white' : 'text-slate-900'
                  }`}>
                    {theme.title}
                  </h3>
                  <p className={`text-[11px] truncate mt-0.5 ${
                    isSelected ? 'text-emerald-200/80' : 'text-slate-500'
                  }`}>
                    {theme.keyHighlights?.[0] || theme.recurringProblems?.[0] || ''}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Selected Theme Comprehensive Dossier (8 cols) */}
        <div className="lg:col-span-8 space-y-5">
          {/* Header Card for Selected Theme */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
              <span>Policy Theme {selectedTheme.id} Dossier</span>
              <span>•</span>
              <span>{selectedTheme.districtsCount || selectedTheme.affectedDistricts?.length || 0} Districts Reporting</span>
            </div>
            <h3 className="text-xl font-bold font-judicial text-slate-900">
              {selectedTheme.title}
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed font-serif-body">
              {selectedTheme.description}
            </p>

            {/* Participating Districts Chips */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                Districts Directly Highlighting This Theme:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(selectedTheme.participatingDistricts || selectedTheme.affectedDistricts || []).map((dName, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 font-medium border border-slate-200/60 capitalize"
                  >
                    {dName.replace(/_/g, ' ')}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Actionable Recommendations for Consideration */}
            <div className="mt-5 bg-amber-50/70 border border-amber-200/80 rounded-lg p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                <span>Workable Solutions & Reform Options for Consideration</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-amber-950 font-serif-body">
                {(selectedTheme.proposedSolutions || selectedTheme.practicalSolutions || []).map((sol, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-2">
                    <span className="font-bold text-amber-700 mt-0.5">•</span>
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Catalogued Issues Under this Theme */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Traceable District Records ({issuesForSelectedTheme.length})
              </h4>
              <span className="text-xs text-slate-500">
                Verbatim extracted proformas linked to source submissions
              </span>
            </div>

            {issuesForSelectedTheme.map(issue => {
              const districtObj = districts.find(d => d.id === issue.districtId);

              return (
                <div
                  key={issue.id}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3 text-xs"
                >
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-emerald-950 font-judicial text-sm">
                          {issue.districtName}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {issue.id}
                        </span>
                      </div>
                      <h5 className="font-semibold text-slate-800 mt-0.5">
                        {issue.issueNumber}
                      </h5>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                        issue.priority === 'Critical'
                          ? 'bg-rose-50 text-rose-800 border-rose-200'
                          : issue.priority === 'High'
                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                          : 'bg-slate-50 text-slate-700 border-slate-200'
                      }`}>
                        {issue.priority} Priority
                      </span>
                    </div>
                  </div>

                  {/* 4-Part Proforma Detail */}
                  <div className="space-y-2 text-slate-700">
                    <div>
                      <strong className="text-slate-900">1. Problem Requiring Intervention:</strong>{' '}
                      <span>{issue.problem}</span>
                    </div>
                    <div>
                      <strong className="text-slate-900">2. Institutional Impact:</strong>{' '}
                      <span>{issue.institutionalImpact}</span>
                    </div>
                    <div>
                      <strong className="text-slate-900">3. Proposed Solution / Suggestion:</strong>{' '}
                      <span>{issue.proposedSolution}</span>
                    </div>
                    <div>
                      <strong className="text-slate-900">4. Precise Decision Sought from PHC:</strong>{' '}
                      <span>{issue.preciseIntervention}</span>
                    </div>
                  </div>

                  {/* Traceability Footer */}
                  <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-500 font-mono">
                    <div>
                      Source: <strong>{issue.sourceFileName}</strong> | Page {issue.sourcePageNumber} ({issue.sourceLocation})
                    </div>
                    {districtObj && (
                      <button
                        onClick={() => onOpenDocument(districtObj, issue.sourcePageNumber)}
                        className="text-emerald-800 font-bold hover:underline flex items-center gap-1 font-sans"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Original Submission Page {issue.sourcePageNumber}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
