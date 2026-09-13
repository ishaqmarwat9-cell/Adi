import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Printer, 
  Download, 
  FileText, 
  Scale, 
  CheckCircle, 
  ShieldCheck, 
  Search, 
  BookOpen, 
  FileCode2,
  Calendar,
  Building
} from 'lucide-react';
import { District, DocumentPage } from '../types';

interface DocumentViewerModalProps {
  district: District | null;
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  district,
  isOpen,
  onClose,
  initialPage = 1
}) => {
  if (!isOpen || !district) return null;

  const [currentPageNum, setCurrentPageNum] = useState<number>(initialPage);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [viewMode, setViewMode] = useState<'facsimile' | 'structured'>('facsimile');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const doc = district.document;
  const totalPages = doc.totalPages || district.pageCount;
  const currentPage: DocumentPage | undefined = doc.pages.find(p => p.pageNumber === currentPageNum) || doc.pages[0];

  const handlePrevPage = () => {
    if (currentPageNum > 1) setCurrentPageNum(prev => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPageNum < totalPages) setCurrentPageNum(prev => prev + 1);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 175));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 75));
  };

  const handlePrintDocument = () => {
    window.print();
  };

  // Check if search matches current page
  const pageMatchesSearch = (page: DocumentPage, term: string) => {
    if (!term) return true;
    const lower = term.toLowerCase();
    return (
      page.title.toLowerCase().includes(lower) ||
      page.sections.some(s => s.heading.toLowerCase().includes(lower) || s.content.toLowerCase().includes(lower))
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-5xl h-[92vh] rounded-xl flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="bg-slate-950 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-white flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-emerald-900/80 border border-emerald-500/40 flex items-center justify-center">
              <Scale className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider font-judicial">
                  {district.name} — Authentic District Submission
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                  district.fileType === 'DOCX' 
                    ? 'bg-blue-900/80 text-blue-200 border border-blue-600/50' 
                    : 'bg-rose-900/80 text-rose-200 border border-rose-600/50'
                }`}>
                  {district.fileName} ({district.fileType})
                </span>
                <span className="hidden md:inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  <ShieldCheck className="w-3 h-3" /> Signed & Sealed by DSJ
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Dispatch: {district.dispatchNo} | Dated: {district.submissionDate} | Presiding Judge: {district.districtJudge}
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            title="Close Viewer (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Viewer Control Toolbar */}
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-200 flex-shrink-0">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-slate-950 p-1 rounded-md border border-slate-800">
            <button
              onClick={() => setViewMode('facsimile')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium transition ${
                viewMode === 'facsimile'
                  ? 'bg-emerald-900 text-amber-200 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Facsimile View</span>
            </button>
            <button
              onClick={() => setViewMode('structured')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium transition ${
                viewMode === 'structured'
                  ? 'bg-emerald-900 text-amber-200 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>Extracted Proforma View</span>
            </button>
          </div>

          {/* Page Navigation Controls */}
          <div className="flex items-center space-x-1 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
            <button
              onClick={handlePrevPage}
              disabled={currentPageNum <= 1}
              className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs px-2 font-mono text-slate-300">
              Page <strong>{currentPageNum}</strong> of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPageNum >= totalPages}
              className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Zoom and Filter Actions */}
          <div className="flex items-center space-x-2">
            {/* Search within document */}
            <div className="relative hidden sm:block">
              <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Search within document..."
                className="bg-slate-950 border border-slate-800 rounded-md pl-8 pr-2.5 py-1 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-600 w-44"
              />
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 bg-slate-950 px-2 py-1 rounded-md border border-slate-800">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 75}
                className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono px-1 text-slate-300">{zoomLevel}%</span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 175}
                className="p-1 rounded text-slate-400 hover:text-white disabled:opacity-30"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Print button */}
            <button
              onClick={handlePrintDocument}
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-md text-xs text-slate-200 transition border border-slate-700"
              title="Print Document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Print Facsimile</span>
            </button>
          </div>
        </div>

        {/* Main Document Canvas View */}
        <div className="flex-1 overflow-auto bg-slate-950/90 p-4 sm:p-6 flex justify-center">
          <div 
            style={{ width: `${Math.min(100, zoomLevel)}%`, maxWidth: zoomLevel > 100 ? `${zoomLevel * 8.5}px` : '850px' }}
            className="transition-all duration-150"
          >
            {viewMode === 'facsimile' ? (
              /* High-Fidelity Judicial Stationery Facsimile */
              <div className="bg-[#fffef9] text-slate-900 border border-amber-900/20 shadow-2xl rounded-sm min-h-[900px] p-8 sm:p-12 relative font-serif-body">
                {/* Subtle Official Watermark Background */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
                  <Scale className="w-[450px] h-[450px] text-emerald-950" />
                </div>

                {/* Top Document Header / Letterhead */}
                <div className="border-b-2 border-emerald-950 pb-4 mb-6 text-center relative z-10">
                  <div className="flex justify-center mb-2">
                    <div className="w-12 h-12 rounded-full border-2 border-emerald-900 p-1 flex items-center justify-center bg-emerald-50">
                      <Scale className="w-7 h-7 text-emerald-950" />
                    </div>
                  </div>
                  <div className="text-xs tracking-widest uppercase font-bold text-slate-600 font-sans">
                    Judicial Administration of Khyber Pakhtunkhwa
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-judicial text-emerald-950 uppercase tracking-wider mt-1">
                    {currentPage?.headerText || `OFFICE OF THE DISTRICT & SESSIONS JUDGE, ${district.name.toUpperCase()}`}
                  </h3>
                  <div className="text-xs text-slate-600 font-serif italic mt-0.5">
                    {currentPage?.subHeaderText || 'Sessions Judges Conference 2026 — Verified Policy Submission'}
                  </div>
                </div>

                {/* Document Metadata Strip */}
                <div className="flex justify-between items-center text-xs font-mono text-slate-700 border-b border-slate-200 pb-3 mb-6 bg-amber-50/50 p-2.5 rounded border border-amber-200/50">
                  <div>
                    <span className="font-semibold text-slate-900">Dispatch:</span> {district.dispatchNo}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Date:</span> {district.submissionDate}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-900">Page:</span> {currentPageNum} of {totalPages}
                  </div>
                </div>

                {/* Main Page Title */}
                <div className="mb-6">
                  <h4 className="text-sm sm:text-base font-bold font-judicial text-emerald-950 border-l-4 border-emerald-800 pl-3 py-0.5">
                    {currentPage?.title}
                  </h4>
                </div>

                {/* Document Sections Content */}
                <div className="space-y-6 text-xs sm:text-sm text-slate-800 leading-relaxed font-serif-body">
                  {currentPage?.sections.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <h5 className="font-bold font-sans text-xs uppercase tracking-wider text-emerald-950 border-b border-slate-200 pb-1">
                        {section.heading}
                      </h5>
                      <div className="whitespace-pre-line text-slate-800 bg-white/60 p-3 rounded border border-slate-200/60 leading-relaxed">
                        {section.content}
                      </div>

                      {/* Optional Data Table (e.g. Mardan Land Liabilities) */}
                      {section.table && (
                        <div className="mt-3 overflow-x-auto border border-slate-300 rounded shadow-sm">
                          <table className="min-w-full divide-y divide-slate-300 text-xs font-sans">
                            <thead className="bg-slate-100">
                              <tr>
                                {section.table.headers.map((h, hIdx) => (
                                  <th key={hIdx} className="px-3 py-2 text-left font-bold text-slate-800 border-r border-slate-300 last:border-r-0">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                              {section.table.rows.map((row, rIdx) => (
                                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                                  {row.map((cell, cIdx) => (
                                    <td key={cIdx} className={`px-3 py-2 text-slate-800 border-r border-slate-200 last:border-r-0 ${
                                      rIdx === section.table!.rows.length - 1 ? 'font-bold bg-amber-50/80 text-emerald-950' : ''
                                    }`}>
                                      {cell}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom Formal Signature Stamp */}
                <div className="mt-12 pt-6 border-t-2 border-slate-300 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 relative z-10">
                  {/* Official Seal Mock Stamp */}
                  <div className="flex items-center space-x-3">
                    <div className="w-20 h-20 rounded-full border-2 border-emerald-900 border-dashed p-1 flex flex-col items-center justify-center text-center rotate-[-6deg] bg-emerald-50/50 text-emerald-900">
                      <Scale className="w-5 h-5 text-emerald-900" />
                      <span className="text-[7px] font-bold uppercase tracking-tighter mt-0.5">District Court</span>
                      <span className="text-[6px] font-semibold">{district.name}</span>
                      <span className="text-[6px] text-emerald-800">SEALED RECORD</span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-sans">
                      <div>Official Record Archive</div>
                      <div>PUC Docket Reference 2026</div>
                      <div>Peshawar High Court</div>
                    </div>
                  </div>

                  {/* Signatory Details */}
                  <div className="text-right font-sans">
                    <div className="font-serif italic text-sm text-slate-700 font-bold mb-1">
                      {district.districtJudge}
                    </div>
                    <div className="text-xs font-bold text-emerald-950 uppercase">
                      {currentPage?.signatory?.designation || 'District & Sessions Judge'}
                    </div>
                    <div className="text-[11px] text-slate-600">
                      District Judiciary {district.name}
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 mt-0.5">
                      Dated: {district.submissionDate}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Structured Analytical View */
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 text-slate-200 space-y-6">
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800">
                  <h4 className="text-base font-bold font-judicial text-amber-300 mb-2">
                    Structured Proforma Metadata — {district.name}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400">Presiding Judge:</span>
                      <div className="font-semibold text-white">{district.districtJudge}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Dispatch Reference:</span>
                      <div className="font-semibold font-mono text-amber-200">{district.dispatchNo}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Submission Date:</span>
                      <div className="font-semibold text-white">{district.submissionDate}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Classification Tier:</span>
                      <div className="font-semibold text-emerald-400">{district.screeningTier}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Original File:</span>
                      <div className="font-semibold font-mono text-slate-300">{district.fileName}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Issues Count:</span>
                      <div className="font-semibold text-white">{district.issueCount} Extracted</div>
                    </div>
                  </div>
                </div>

                {/* Extracted Issues Breakdown */}
                <div className="space-y-4">
                  <h5 className="text-sm font-bold uppercase tracking-wider text-slate-300 border-b border-slate-800 pb-2">
                    Extracted Policy Issues ({district.issues.length})
                  </h5>
                  {district.issues.length === 0 ? (
                    <div className="p-4 bg-slate-950 rounded border border-slate-800 text-xs text-slate-400 italic">
                      No extracted policy issues recorded. District submitted "Nill" proforma.
                    </div>
                  ) : (
                    district.issues.map((issue, idx) => (
                      <div key={issue.id} className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-amber-300 font-judicial">
                            {issue.issueNumber}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                            {issue.category}
                          </span>
                        </div>
                        <div className="text-xs space-y-2 text-slate-300">
                          <div>
                            <strong className="text-slate-400">1. Problem:</strong> {issue.problem}
                          </div>
                          <div>
                            <strong className="text-slate-400">2. Institutional Impact:</strong> {issue.institutionalImpact}
                          </div>
                          <div>
                            <strong className="text-slate-400">3. Proposed Solution:</strong> {issue.proposedSolution}
                          </div>
                          <div>
                            <strong className="text-slate-400">4. Precise High Court Intervention:</strong> {issue.preciseIntervention}
                          </div>
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800 flex justify-between">
                          <span>Source: {issue.sourceFileName}</span>
                          <span>Page {issue.sourcePageNumber} ({issue.sourceLocation})</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="bg-slate-950 border-t border-slate-800 px-4 py-2 flex items-center justify-between text-xs text-slate-400 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-mono text-[11px]">VERIFIED DOCUMENT RECORD: {district.fileName}</span>
          </div>
          <div className="text-[11px]">
            Preserved for Sessions Judges Conference 2026
          </div>
        </div>

      </div>
    </div>
  );
};
