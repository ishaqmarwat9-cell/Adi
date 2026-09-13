import React, { useState } from 'react';
import { 
  FileCheck2, 
  FileText, 
  Download, 
  Printer, 
  Eye, 
  Search, 
  Scale, 
  CheckCircle2, 
  AlertCircle,
  FolderArchive,
  FileCode,
  Building
} from 'lucide-react';
import { District } from '../types';

interface SourceRegisterViewProps {
  districts: District[];
  onOpenDocument: (district: District, page?: number) => void;
}

export const SourceRegisterView: React.FC<SourceRegisterViewProps> = ({
  districts,
  onOpenDocument
}) => {
  const [filterType, setFilterType] = useState<'All' | 'PDF' | 'DOCX'>('All');
  const [search, setSearch] = useState('');

  const filtered = districts.filter(d => {
    if (filterType !== 'All' && d.fileType !== filterType) return false;
    if (search) {
      const q = search.toLowerCase();
      return (
        d.name.toLowerCase().includes(q) ||
        d.fileName.toLowerCase().includes(q) ||
        d.dispatchNo.toLowerCase().includes(q) ||
        d.districtJudge.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const totalPages = districts.reduce((acc, d) => acc + d.pageCount, 0);

  return (
    <div className="space-y-6">
      {/* Official Registry Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold mb-2">
              <FolderArchive className="w-3.5 h-3.5" />
              <span>OFFICIAL EVIDENTIARY ARCHIVE & SOURCE REGISTER</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold font-judicial text-slate-900">
              Master Register of 35 District Submissions
            </h2>
            <p className="text-xs md:text-sm text-slate-600 mt-1 font-serif-body leading-relaxed">
              Consolidated register of all 34 PDF submissions and the Kohistan Upper DOCX original submission. Each document is stored in high-fidelity verbatim text with full administrative metadata.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-3.5 py-2 text-xs font-semibold rounded-md bg-emerald-900 hover:bg-emerald-800 text-white transition flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>Print Registry</span>
            </button>
          </div>
        </div>

        {/* Statistical Overview Bar */}
        <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <span className="text-[11px] font-medium text-slate-500 uppercase">Submissions</span>
            <div className="text-xl font-bold font-judicial text-slate-900 mt-0.5">35 Records</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <span className="text-[11px] font-medium text-slate-500 uppercase">PDF Submissions</span>
            <div className="text-xl font-bold font-judicial text-emerald-900 mt-0.5">34 Files</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <span className="text-[11px] font-medium text-slate-500 uppercase">DOCX Submissions</span>
            <div className="text-xl font-bold font-judicial text-blue-900 mt-0.5">1 File (Kohistan U.)</div>
          </div>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
            <span className="text-[11px] font-medium text-slate-500 uppercase">Total Pages</span>
            <div className="text-xl font-bold font-judicial text-amber-900 mt-0.5">{totalPages} Pages</div>
          </div>
        </div>
      </div>

      {/* Special Notice on Kohistan Upper DOCX Original Submission */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3">
        <FileCode className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-blue-950">
          <span className="font-bold">Original File Format Integrity Rule:</span> While 34 districts transmitted their official proformas as scanned/compiled PDF submissions, District Kohistan Upper provided its verified institutional submission directly in DOCX format (<code>Kohistan Upper.docx</code>). In strict adherence to evidentiary preservation mandates, its original format and exact text have been preserved without synthetic alteration.
        </div>
      </div>

      {/* Register Table with Search & Filter */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search file name, district, dispatch..."
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-emerald-600 focus:bg-white"
            />
          </div>

          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setFilterType('All')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                filterType === 'All' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All (35)
            </button>
            <button
              onClick={() => setFilterType('PDF')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                filterType === 'PDF' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              PDFs (34)
            </button>
            <button
              onClick={() => setFilterType('DOCX')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition ${
                filterType === 'DOCX' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              DOCX (1)
            </button>
          </div>
        </div>

        {/* Master Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="min-w-full divide-y divide-slate-200 text-xs">
            <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-4 py-3 text-left">District</th>
                <th className="px-4 py-3 text-left">File Name</th>
                <th className="px-4 py-3 text-center">Format</th>
                <th className="px-4 py-3 text-left">Presiding Officer</th>
                <th className="px-4 py-3 text-left">Dispatch No.</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-center">Pages</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {filtered.map(district => (
                <tr key={district.id} className="hover:bg-slate-50/80 transition">
                  <td className="px-4 py-3 font-bold text-slate-900 font-judicial">
                    {district.name}
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-700 text-[11px]">
                    {district.fileName}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                      district.fileType === 'DOCX'
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'bg-rose-100 text-rose-800 border border-rose-200'
                    }`}>
                      {district.fileType}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-800">
                    {district.districtJudge}
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-600 text-[11px]">
                    {district.dispatchNo}
                  </td>
                  <td className="px-4 py-3 text-slate-600 text-[11px]">
                    {district.submissionDate}
                  </td>
                  <td className="px-4 py-3 text-center font-mono font-bold text-slate-700">
                    {district.pageCount}
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <button
                      onClick={() => onOpenDocument(district, 1)}
                      className="px-2.5 py-1 text-xs font-bold text-emerald-900 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 rounded border border-emerald-200 inline-flex items-center gap-1 transition"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Open Facsimile</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
