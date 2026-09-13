import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, 
  X, 
  Building2, 
  FileText, 
  ShieldAlert, 
  Coins, 
  ArrowRight, 
  Scale, 
  CheckCircle2 
} from 'lucide-react';
import { District, DistrictIssue, SecurityIncident } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  districts: District[];
  allIssues: DistrictIssue[];
  securityIncidents: SecurityIncident[];
  onSelectDistrict: (district: District) => void;
  onSelectIssue: (issue: DistrictIssue) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  districts,
  allIssues,
  securityIncidents,
  onSelectDistrict,
  onSelectIssue
}) => {
  const [query, setQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search results
  const results = useMemo(() => {
    if (!query.trim()) {
      return {
        districts: [],
        issues: [],
        security: []
      };
    }

    const q = query.toLowerCase();

    const matchedDistricts = districts.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.districtJudge.toLowerCase().includes(q) ||
      d.division.toLowerCase().includes(q) ||
      d.dispatchNo.toLowerCase().includes(q) ||
      d.summary.toLowerCase().includes(q)
    ).slice(0, 5);

    const matchedIssues = allIssues.filter(i =>
      i.districtName.toLowerCase().includes(q) ||
      i.problem.toLowerCase().includes(q) ||
      i.proposedSolution.toLowerCase().includes(q) ||
      i.category.toLowerCase().includes(q) ||
      i.issueNumber.toLowerCase().includes(q)
    ).slice(0, 8);

    const matchedSecurity = securityIncidents.filter(s =>
      s.districtName.toLowerCase().includes(q) ||
      s.title.toLowerCase().includes(q) ||
      s.summary.toLowerCase().includes(q)
    ).slice(0, 3);

    return {
      districts: matchedDistricts,
      issues: matchedIssues,
      security: matchedSecurity
    };
  }, [query, districts, allIssues, securityIncidents]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 p-4 animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-emerald-800 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search all 35 districts, verbatim issues, decrees, statutes (e.g. Mardan, CPC 122, drone)..."
            className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-slate-200 text-slate-600 hover:bg-slate-300 font-medium"
          >
            Esc
          </button>
        </div>

        {/* Search Results Stage */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 text-xs">
          {!query.trim() ? (
            <div className="py-12 text-center text-slate-400 space-y-3">
              <Scale className="w-12 h-12 mx-auto text-slate-300" />
              <p className="text-sm font-medium text-slate-600">
                Universal Evidence & Issue Search
              </p>
              <p className="text-xs max-w-sm mx-auto text-slate-400">
                Instant search across all 35 district submissions, 95 extracted issues, security threat logs, and financial decretal liabilities.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <span 
                  onClick={() => setQuery('Section 122')}
                  className="cursor-pointer px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px]"
                >
                  Section 122 CPC
                </span>
                <span 
                  onClick={() => setQuery('Mardan Land Acquisition')}
                  className="cursor-pointer px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px]"
                >
                  Mardan PKR 18.68B
                </span>
                <span 
                  onClick={() => setQuery('Drone')}
                  className="cursor-pointer px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px]"
                >
                  Drone Attack
                </span>
                <span 
                  onClick={() => setQuery('Road Opening Day')}
                  className="cursor-pointer px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px]"
                >
                  ROD Movement
                </span>
              </div>
            </div>
          ) : (
            <>
              {/* Districts Section */}
              {results.districts.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Districts ({results.districts.length})</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {results.districts.map(d => (
                      <div
                        key={d.id}
                        onClick={() => {
                          onSelectDistrict(d);
                          onClose();
                        }}
                        className="p-3 rounded-lg border border-slate-200 hover:border-emerald-600/50 hover:bg-emerald-50/30 transition cursor-pointer flex items-center justify-between"
                      >
                        <div>
                          <div className="font-bold text-slate-900 font-judicial text-xs">
                            {d.name} ({d.division})
                          </div>
                          <div className="text-[11px] text-slate-500">
                            Presiding: {d.districtJudge}
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                          {d.screeningTier}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Issues Section */}
              {results.issues.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Catalogued Issues ({results.issues.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.issues.map(i => (
                      <div
                        key={i.id}
                        onClick={() => {
                          onSelectIssue(i);
                          onClose();
                        }}
                        className="p-3 rounded-lg border border-slate-200 hover:border-emerald-600/50 hover:bg-emerald-50/30 transition cursor-pointer space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 font-judicial">
                            {i.districtName} — {i.issueNumber}
                          </span>
                          <span className="text-[10px] font-mono text-slate-500">
                            Page {i.sourcePageNumber}
                          </span>
                        </div>
                        <p className="text-slate-600 line-clamp-2 text-xs">
                          {i.problem}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Security Section */}
              {results.security.length > 0 && (
                <div className="space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                    <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
                    <span>Security Incidents ({results.security.length})</span>
                  </div>
                  <div className="space-y-2">
                    {results.security.map(s => (
                      <div
                        key={s.id}
                        className="p-3 rounded-lg border border-rose-200 bg-rose-50/40 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-rose-950 font-judicial">
                            {s.districtName} — {s.title}
                          </span>
                          <span className="text-[10px] font-mono text-rose-800 font-bold">
                            {s.severity}
                          </span>
                        </div>
                        <p className="text-slate-700 text-xs line-clamp-2">
                          {s.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {results.districts.length === 0 && results.issues.length === 0 && results.security.length === 0 && (
                <div className="py-8 text-center text-slate-400">
                  No matching records found for "{query}". Try searching by district name, legal section, or keyword.
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
