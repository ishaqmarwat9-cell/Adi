import React, { useState, useMemo } from 'react';
import { 
  Table2, 
  Search, 
  Filter, 
  ArrowUpDown, 
  FileText, 
  Eye, 
  Download, 
  Printer, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  Scale
} from 'lucide-react';
import { DistrictIssue, District } from '../types';

interface PucIssueMatrixProps {
  allIssues: DistrictIssue[];
  districts: District[];
  onOpenDocument: (district: District, page?: number) => void;
}

export const PucIssueMatrix: React.FC<PucIssueMatrixProps> = ({
  allIssues,
  districts,
  onOpenDocument
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTheme, setSelectedTheme] = useState<string>('All');
  const [selectedPriority, setSelectedPriority] = useState<string>('All');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [selectedClassification, setSelectedClassification] = useState<string>('All');
  const [expandedIssueId, setExpandedIssueId] = useState<string | null>(null);

  const filteredIssues = useMemo(() => {
    return allIssues.filter(issue => {
      // Search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesDistrict = issue.districtName.toLowerCase().includes(query);
        const matchesProblem = issue.problem.toLowerCase().includes(query);
        const matchesSolution = issue.proposedSolution.toLowerCase().includes(query);
        const matchesNumber = issue.issueNumber.toLowerCase().includes(query);
        const matchesCategory = issue.category.toLowerCase().includes(query);
        if (!matchesDistrict && !matchesProblem && !matchesSolution && !matchesNumber && !matchesCategory) {
          return false;
        }
      }

      // Theme
      if (selectedTheme !== 'All' && issue.themeId.toString() !== selectedTheme) {
        return false;
      }

      // Priority
      if (selectedPriority !== 'All' && issue.priority !== selectedPriority) {
        return false;
      }

      // Tier
      if (selectedTier !== 'All' && issue.tier !== selectedTier) {
        return false;
      }

      // Classification
      if (selectedClassification !== 'All' && issue.classification !== selectedClassification) {
        return false;
      }

      return true;
    });
  }, [allIssues, searchQuery, selectedTheme, selectedPriority, selectedTier, selectedClassification]);

  const toggleExpand = (id: string) => {
    setExpandedIssueId(prev => prev === id ? null : id);
  };

  const handleExportCSV = () => {
    const headers = ['Issue ID', 'District', 'Theme ID', 'Theme Name', 'Category', 'Priority', 'Tier', 'Problem', 'Proposed Solution', 'Precise Intervention', 'Source File', 'Page'];
    const rows = filteredIssues.map(i => [
      i.id,
      `"${i.districtName}"`,
      i.themeId,
      `"${i.themeName}"`,
      `"${i.category}"`,
      i.priority,
      i.tier,
      `"${i.problem.replace(/"/g, '""')}"`,
      `"${i.proposedSolution.replace(/"/g, '""')}"`,
      `"${i.preciseIntervention.replace(/"/g, '""')}"`,
      i.sourceFileName,
      i.sourcePageNumber
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `PHC_Sessions_Conference_Issues_Matrix_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-5">
      {/* Master Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold font-judicial text-slate-900">
              PUC Master Issue Matrix ({allIssues.length} Catalogued Records)
            </h2>
            <p className="text-xs text-slate-500">
              Complete index of verbatim proformas across all 35 district submissions with source file and page citations.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 transition flex items-center gap-1.5 border border-slate-200"
              title="Export filtered records to CSV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => window.print()}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-emerald-900 hover:bg-emerald-800 text-white transition flex items-center gap-1.5 shadow-sm"
              title="Print / Save PDF Dossier"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Matrix</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search problem, keyword..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
            />
          </div>

          {/* Theme */}
          <div>
            <select
              value={selectedTheme}
              onChange={e => setSelectedTheme(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
            >
              <option value="All">All Themes (1 to 8)</option>
              <option value="1">Theme 1: Judicial HR & Cadres</option>
              <option value="2">Theme 2: Court Infrastructure & Land</option>
              <option value="3">Theme 3: Digital Systems & CFMIS</option>
              <option value="4">Theme 4: Caseflow & Decrees</option>
              <option value="5">Theme 5: Security & Mobility</option>
              <option value="6">Theme 6: Inter-Agency Coordination</option>
              <option value="7">Theme 7: Wellbeing & Hard Station</option>
              <option value="8">Theme 8: Access to Justice & Bar</option>
            </select>
          </div>

          {/* Priority */}
          <div>
            <select
              value={selectedPriority}
              onChange={e => setSelectedPriority(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
            >
              <option value="All">All Priorities</option>
              <option value="Critical">Critical Priority</option>
              <option value="High">High Priority</option>
              <option value="Normal">Normal Priority</option>
            </select>
          </div>

          {/* Tier */}
          <div>
            <select
              value={selectedTier}
              onChange={e => setSelectedTier(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
            >
              <option value="All">All Tiers</option>
              <option value="Tier A">Tier A (Province-Wide)</option>
              <option value="Tier B">Tier B (Sub-Regional)</option>
            </select>
          </div>

          {/* Classification */}
          <div>
            <select
              value={selectedClassification}
              onChange={e => setSelectedClassification(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 focus:bg-white"
            >
              <option value="All">All Classifications</option>
              <option value="Province-wide policy question">Province-wide policy question</option>
              <option value="District-specific grievance">District-specific grievance</option>
              <option value="Recurring regional concern">Recurring regional concern</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
          <span>Displaying <strong>{filteredIssues.length}</strong> matching issue records</span>
          {(searchQuery || selectedTheme !== 'All' || selectedPriority !== 'All' || selectedTier !== 'All' || selectedClassification !== 'All') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedTheme('All');
                setSelectedPriority('All');
                setSelectedTier('All');
                setSelectedClassification('All');
              }}
              className="text-emerald-800 font-semibold hover:underline"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>

      {/* Table List View */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-xs">
            <thead className="bg-slate-50 text-slate-700 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="px-4 py-3 text-left">District & ID</th>
                <th className="px-4 py-3 text-left">Theme & Category</th>
                <th className="px-4 py-3 text-left">Problem Statement</th>
                <th className="px-4 py-3 text-left">Priority / Tier</th>
                <th className="px-4 py-3 text-right">Source Evidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filteredIssues.map(issue => {
                const isExpanded = expandedIssueId === issue.id;
                const districtObj = districts.find(d => d.id === issue.districtId);

                return (
                  <React.Fragment key={issue.id}>
                    <tr 
                      className={`hover:bg-slate-50/80 transition cursor-pointer ${
                        isExpanded ? 'bg-emerald-50/40' : ''
                      }`}
                      onClick={() => toggleExpand(issue.id)}
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="font-bold text-slate-900 font-judicial">{issue.districtName}</div>
                        <div className="font-mono text-[10px] text-slate-500">{issue.id}</div>
                      </td>

                      <td className="px-4 py-3">
                        <div className="font-semibold text-emerald-950">Theme {issue.themeId}</div>
                        <div className="text-slate-500 text-[11px] truncate max-w-xs">{issue.category}</div>
                      </td>

                      <td className="px-4 py-3">
                        <div className="font-medium text-slate-800 line-clamp-2 max-w-lg">
                          {issue.problem}
                        </div>
                      </td>

                      <td className="px-4 py-3 whitespace-nowrap">
                        <span className={`inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded border ${
                          issue.priority === 'Critical'
                            ? 'bg-rose-50 text-rose-800 border-rose-200'
                            : issue.priority === 'High'
                            ? 'bg-amber-50 text-amber-800 border-amber-200'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
                        }`}>
                          {issue.priority}
                        </span>
                        <div className="text-[10px] text-slate-500 mt-0.5 font-medium">{issue.tier}</div>
                      </td>

                      <td className="px-4 py-3 text-right whitespace-nowrap">
                        <div className="font-mono text-[11px] text-slate-600">{issue.sourceFileName}</div>
                        <div className="text-[10px] text-emerald-800 font-semibold">Page {issue.sourcePageNumber}</div>
                      </td>
                    </tr>

                    {/* Expanded Detail Row */}
                    {isExpanded && (
                      <tr className="bg-slate-50/90 border-b border-emerald-800/30">
                        <td colSpan={5} className="px-6 py-4">
                          <div className="space-y-3 bg-white p-5 rounded-lg border border-slate-200 shadow-sm text-xs">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                              <span className="font-bold font-judicial text-emerald-950 text-sm">
                                {issue.issueNumber} — {issue.districtName}
                              </span>
                              <span className="text-[11px] text-slate-500 font-mono">
                                Proforma: {issue.proformaType} | Classification: {issue.classification}
                              </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-800">
                              <div className="space-y-1">
                                <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">
                                  1. Problem Requiring Intervention:
                                </span>
                                <p className="text-slate-700 leading-relaxed font-serif-body bg-slate-50 p-2.5 rounded border border-slate-100">
                                  {issue.problem}
                                </p>
                              </div>

                              <div className="space-y-1">
                                <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">
                                  2. Institutional Impact:
                                </span>
                                <p className="text-slate-700 leading-relaxed font-serif-body bg-slate-50 p-2.5 rounded border border-slate-100">
                                  {issue.institutionalImpact}
                                </p>
                              </div>

                              <div className="space-y-1">
                                <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">
                                  3. Proposed Solution / Suggestion:
                                </span>
                                <p className="text-slate-700 leading-relaxed font-serif-body bg-slate-50 p-2.5 rounded border border-slate-100">
                                  {issue.proposedSolution}
                                </p>
                              </div>

                              <div className="space-y-1">
                                <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">
                                  4. Precise High Court Intervention:
                                </span>
                                <p className="text-slate-700 leading-relaxed font-serif-body bg-slate-50 p-2.5 rounded border border-slate-100">
                                  {issue.preciseIntervention}
                                </p>
                              </div>
                            </div>

                            {/* Traceability Actions */}
                            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                              <span className="text-[11px] text-slate-500 font-mono">
                                Jurisdiction: <strong>{issue.jurisdiction}</strong> | Location: <strong>{issue.sourceLocation}</strong>
                              </span>

                              {districtObj && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onOpenDocument(districtObj, issue.sourcePageNumber);
                                  }}
                                  className="px-3 py-1.5 rounded-md bg-emerald-900 hover:bg-emerald-800 text-white font-medium flex items-center gap-1.5 transition text-xs shadow-sm"
                                >
                                  <Eye className="w-3.5 h-3.5 text-amber-300" />
                                  <span>View Original Document Page {issue.sourcePageNumber}</span>
                                </button>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
