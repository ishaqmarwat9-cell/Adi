import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Building2, 
  FileText, 
  Scale, 
  ShieldAlert, 
  ArrowRight, 
  FileCode2, 
  Phone, 
  Mail, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle,
  Eye,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { District, DistrictIssue } from '../types';

interface DistrictExplorerProps {
  districts: District[];
  onOpenDocument: (district: District, page?: number) => void;
  onSelectTheme?: (themeId: number) => void;
}

export const DistrictExplorer: React.FC<DistrictExplorerProps> = ({
  districts,
  onOpenDocument,
  onSelectTheme
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDivision, setSelectedDivision] = useState<string>('All');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [onlyMerged, setOnlyMerged] = useState(false);
  const [onlyVulnerable, setOnlyVulnerable] = useState(false);
  const [expandedDistrictId, setExpandedDistrictId] = useState<string | null>(null);

  const divisions = ['All', 'Peshawar', 'Mardan', 'Hazara', 'Malakand', 'Kohat', 'Bannu', 'D.I. Khan', 'Merged Districts'];
  const tiers = ['All', 'Tier A', 'Tier B', 'Review'];

  const filteredDistricts = useMemo(() => {
    return districts.filter(d => {
      // Search term
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesName = d.name.toLowerCase().includes(query);
        const matchesJudge = d.districtJudge.toLowerCase().includes(query);
        const matchesDispatch = d.dispatchNo.toLowerCase().includes(query);
        const matchesSummary = d.summary.toLowerCase().includes(query);
        const matchesIssue = d.issues.some(i => 
          i.problem.toLowerCase().includes(query) || 
          i.proposedSolution.toLowerCase().includes(query) ||
          i.category.toLowerCase().includes(query)
        );
        if (!matchesName && !matchesJudge && !matchesDispatch && !matchesSummary && !matchesIssue) {
          return false;
        }
      }

      // Division
      if (selectedDivision !== 'All' && d.division !== selectedDivision) {
        return false;
      }

      // Tier
      if (selectedTier !== 'All' && d.screeningTier !== selectedTier) {
        return false;
      }

      // Format
      if (selectedFormat !== 'All' && d.fileType !== selectedFormat) {
        return false;
      }

      // Merged
      if (onlyMerged && !d.isMergedDistrict) {
        return false;
      }

      // Vulnerable
      if (onlyVulnerable && !d.securityProfile?.isVulnerableZone) {
        return false;
      }

      return true;
    });
  }, [districts, searchQuery, selectedDivision, selectedTier, selectedFormat, onlyMerged, onlyVulnerable]);

  const toggleExpandDistrict = (id: string) => {
    setExpandedDistrictId(prev => prev === id ? null : id);
  };

  return (
    <div className="space-y-5">
      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold font-judicial text-slate-900">
              35 District Submissions Explorer
            </h2>
            <p className="text-xs text-slate-500">
              All 34 PDF submissions and the Kohistan Upper DOCX original submission, preserved with complete verbatim fidelity.
            </p>
          </div>
          <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
            Showing {filteredDistricts.length} of {districts.length} Districts
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search district, judge, issue..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
            />
          </div>

          {/* Division Select */}
          <div>
            <select
              value={selectedDivision}
              onChange={e => setSelectedDivision(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
            >
              {divisions.map(div => (
                <option key={div} value={div}>
                  Division: {div}
                </option>
              ))}
            </select>
          </div>

          {/* Screening Tier Select */}
          <div>
            <select
              value={selectedTier}
              onChange={e => setSelectedTier(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
            >
              {tiers.map(tier => (
                <option key={tier} value={tier}>
                  Screening: {tier}
                </option>
              ))}
            </select>
          </div>

          {/* Format Select */}
          <div>
            <select
              value={selectedFormat}
              onChange={e => setSelectedFormat(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
            >
              <option value="All">All Formats (34 PDF + 1 DOCX)</option>
              <option value="PDF">PDF Submissions Only (34)</option>
              <option value="DOCX">DOCX Original Only (Kohistan Upper)</option>
            </select>
          </div>
        </div>

        {/* Quick Checkbox Toggles */}
        <div className="flex flex-wrap items-center gap-4 pt-1 text-xs border-t border-slate-100">
          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700">
            <input
              type="checkbox"
              checked={onlyMerged}
              onChange={e => setOnlyMerged(e.target.checked)}
              className="rounded text-emerald-700 focus:ring-emerald-600"
            />
            <span className="font-medium">Merged Districts Only (7)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700">
            <input
              type="checkbox"
              checked={onlyVulnerable}
              onChange={e => setOnlyVulnerable(e.target.checked)}
              className="rounded text-rose-700 focus:ring-rose-600"
            />
            <span className="font-medium">Security Vulnerable Zones</span>
          </label>

          {(searchQuery || selectedDivision !== 'All' || selectedTier !== 'All' || selectedFormat !== 'All' || onlyMerged || onlyVulnerable) && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDivision('All');
                setSelectedTier('All');
                setSelectedFormat('All');
                setOnlyMerged(false);
                setOnlyVulnerable(false);
              }}
              className="text-xs text-emerald-800 hover:text-emerald-950 font-semibold underline ml-auto"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* District Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredDistricts.map(district => {
          const isExpanded = expandedDistrictId === district.id;

          return (
            <div
              key={district.id}
              className={`bg-white rounded-xl border transition-all duration-200 shadow-sm flex flex-col justify-between overflow-hidden ${
                isExpanded
                  ? 'border-emerald-700 ring-1 ring-emerald-700 md:col-span-2 lg:col-span-3'
                  : 'border-slate-200 hover:border-emerald-500/50 hover:shadow-md'
              }`}
            >
              {/* Card Header */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold font-judicial text-slate-900">
                        {district.name}
                      </h3>
                      {district.isMergedDistrict && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                          Merged District
                        </span>
                      )}
                      {district.securityProfile?.isVulnerableZone && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 text-rose-700 border border-rose-200 flex items-center gap-1">
                          <ShieldAlert className="w-3 h-3" /> Vulnerable
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Division: <strong>{district.division}</strong>
                    </p>
                  </div>

                  {/* Screening Tier Badge */}
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border flex-shrink-0 ${
                      district.screeningTier === 'Tier A'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : district.screeningTier === 'Tier B'
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : 'bg-rose-50 text-rose-800 border-rose-200'
                    }`}
                  >
                    {district.screeningTier}
                  </span>
                </div>

                {/* Judge and Dispatch Details */}
                <div className="bg-slate-50/80 rounded-lg p-3 text-xs space-y-1 mb-3 border border-slate-100">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Presiding Officer:</span>
                    <span className="font-semibold text-slate-800">{district.districtJudge}</span>
                  </div>
                  <div className="flex justify-between font-mono text-[11px]">
                    <span className="text-slate-500">Dispatch:</span>
                    <span className="text-slate-700 font-semibold">{district.dispatchNo}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-500">Submission Date:</span>
                    <span className="text-slate-700">{district.submissionDate}</span>
                  </div>
                </div>

                {/* Summary Description */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {district.summary}
                </p>

                {/* Expandable Issues Section (When Expanded) */}
                {isExpanded && (
                  <div className="mt-5 pt-5 border-t border-slate-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Verbatim Extracted Issues ({district.issues.length})
                      </h4>
                      <span className="text-xs text-slate-500">
                        Source Document: <strong>{district.fileName}</strong> ({district.pageCount} Pages)
                      </span>
                    </div>

                    {district.issues.length === 0 ? (
                      <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-800">
                        District submitted proforma marked "Nill" across all items. AMIT-II verification recommended.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {district.issues.map((issue, idx) => (
                          <div 
                            key={issue.id}
                            className="bg-slate-50 rounded-lg p-4 border border-slate-200 space-y-2.5 text-xs text-slate-800"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <span className="font-bold text-emerald-950 font-judicial">
                                {issue.issueNumber}
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold flex-shrink-0">
                                Theme {issue.themeId}
                              </span>
                            </div>

                            <div className="space-y-1.5">
                              <div>
                                <strong className="text-slate-900">Problem:</strong>{' '}
                                <span className="text-slate-700">{issue.problem}</span>
                              </div>
                              <div>
                                <strong className="text-slate-900">Institutional Impact:</strong>{' '}
                                <span className="text-slate-700">{issue.institutionalImpact}</span>
                              </div>
                              <div>
                                <strong className="text-slate-900">Proposed Solution:</strong>{' '}
                                <span className="text-slate-700">{issue.proposedSolution}</span>
                              </div>
                              <div>
                                <strong className="text-slate-900">Precise Intervention:</strong>{' '}
                                <span className="text-slate-700">{issue.preciseIntervention}</span>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-mono">
                              <span>Page: {issue.sourcePageNumber} ({issue.sourceLocation})</span>
                              <button
                                onClick={() => onOpenDocument(district, issue.sourcePageNumber)}
                                className="text-emerald-800 font-bold hover:underline"
                              >
                                View Facsimile Page {issue.sourcePageNumber}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Card Footer Actions */}
              <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                    {district.fileType} • {district.pageCount} Pages
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {district.issueCount} Issue{district.issueCount === 1 ? '' : 's'}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Toggle details */}
                  <button
                    onClick={() => toggleExpandDistrict(district.id)}
                    className="px-2.5 py-1 text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 transition"
                  >
                    <span>{isExpanded ? 'Collapse' : 'Details'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  {/* Open Authentic Document Modal */}
                  <button
                    onClick={() => onOpenDocument(district)}
                    className="px-3 py-1.5 rounded-md bg-emerald-900 hover:bg-emerald-800 text-white font-medium flex items-center gap-1.5 transition shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5 text-amber-300" />
                    <span>View Submission</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
