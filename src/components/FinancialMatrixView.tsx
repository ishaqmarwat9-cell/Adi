import React, { useState } from 'react';
import { 
  Coins, 
  AlertTriangle, 
  TrendingUp, 
  Landmark, 
  Scale, 
  FileText, 
  Building2, 
  CheckCircle2, 
  Eye, 
  Calculator,
  ArrowRight
} from 'lucide-react';
import { 
  mardanDecretalLiabilities, 
  totalMardanLiabilities, 
  totalMardanAnnualInterest,
  capitalFundingDemands 
} from '../data/financials';
import { District } from '../types';

interface FinancialMatrixViewProps {
  districts: District[];
  onOpenDocument: (district: District, page?: number) => void;
}

export const FinancialMatrixView: React.FC<FinancialMatrixViewProps> = ({
  districts,
  onOpenDocument
}) => {
  const [interestYears, setInterestYears] = useState<number>(1);
  const mardanDistrict = districts.find(d => d.id === 'mardan');

  const calculatedInterestTotal = totalMardanAnnualInterest * interestYears;
  const grandTotalWithInterest = totalMardanLiabilities + calculatedInterestTotal;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm overflow-hidden relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-900 border border-rose-200 text-xs font-semibold mb-3">
            <Coins className="w-3.5 h-3.5 text-rose-700" />
            <span>DECRETAL SOLVENCY & CAPITAL LIABILITIES DOSSIER</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold font-judicial text-slate-900">
            Unpaid Government Decrees & Capital Funding Analysis
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-2 font-serif-body leading-relaxed">
            Submissions reveal a profound systemic crisis in executing judicial money decrees against provincial government departments, led by an un-liquidated <strong>PKR 18.684 Billion</strong> land acquisition liability in Referee Court Mardan compounding at 6% statutory interest per annum.
          </p>
        </div>
      </div>

      {/* Big KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Total Base Decretal Debt (Mardan)
          </span>
          <div className="text-2xl font-bold font-mono text-rose-950 mt-1">
            PKR 18,684,000,000
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Approx. <strong>PKR 18.684 Billion</strong> base principal across 9 acquiring schemes
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Accruing Annual Statutory Interest (6%)
          </span>
          <div className="text-2xl font-bold font-mono text-amber-900 mt-1">
            PKR 1,121,040,000 / yr
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Accumulating daily under Land Acquisition Act provisions
          </p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Bannu Capital Security Need
          </span>
          <div className="text-2xl font-bold font-mono text-indigo-950 mt-1">
            PKR 140,000,000
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Urgent perimeter fortification and blast-proof gate infrastructure
          </p>
        </div>
      </div>

      {/* Mardan Decretal Debt Statement Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-bold font-judicial text-slate-900">
                Referee Court Mardan — Statement of Outstanding Land Compensation Liabilities
              </h3>
              <span className="text-[10px] font-mono font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                Section 82 CPC Crisis
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Source: District Judiciary Mardan Submission (Annexure-A, Supporting Table, Page 6)
            </p>
          </div>

          {mardanDistrict && (
            <button
              onClick={() => onOpenDocument(mardanDistrict, 6)}
              className="px-3 py-1.5 rounded-md bg-emerald-900 hover:bg-emerald-800 text-white font-medium flex items-center gap-1.5 transition text-xs shadow-sm flex-shrink-0"
            >
              <Eye className="w-3.5 h-3.5 text-amber-300" />
              <span>Inspect Original Mardan Table</span>
            </button>
          )}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-xs">
            <thead className="bg-slate-100/80 text-slate-700 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-4 py-3 text-left">S.No</th>
                <th className="px-4 py-3 text-left">Acquiring Scheme & Department</th>
                <th className="px-4 py-3 text-left">Award / Case Reference</th>
                <th className="px-4 py-3 text-right">Base Outstanding (PKR)</th>
                <th className="px-4 py-3 text-right">Annual 6% Interest</th>
                <th className="px-4 py-3 text-center">Execution Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {mardanDecretalLiabilities.map((item, idx) => (
                <tr key={item.id} className="hover:bg-slate-50/70 transition">
                  <td className="px-4 py-3 font-mono text-slate-500 font-medium">{idx + 1}</td>
                  <td className="px-4 py-3">
                    <div className="font-bold text-slate-900">{item.schemeName}</div>
                    <div className="text-[11px] text-slate-500">{item.department}</div>
                  </td>
                  <td className="px-4 py-3 font-mono text-slate-600 text-[11px]">{item.awardReference}</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-900">
                    {item.formattedAmount}
                  </td>
                  <td className="px-4 py-3 text-right font-mono text-rose-800">
                    PKR {item.annualInterestPenalty.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-200">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-slate-100 font-bold text-slate-900 border-t-2 border-slate-300">
              <tr>
                <td colSpan={3} className="px-4 py-3 text-right uppercase tracking-wider text-xs font-judicial">
                  Consolidated Mardan Decretal Total:
                </td>
                <td className="px-4 py-3 text-right font-mono text-sm text-rose-950">
                  PKR {totalMardanLiabilities.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right font-mono text-sm text-rose-800">
                  PKR {totalMardanAnnualInterest.toLocaleString()} / yr
                </td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Statutory Interest Compounding Calculator & Lakki Marwat ADP Reform Model */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Interactive Interest Simulator */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900">
            <Calculator className="w-4 h-4 text-amber-700" />
            <span>Interactive 6% Statutory Delay Penalty Calculator</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900">
            Estimate Public Fiscal Loss Due to Delayed Decretal Satisfaction
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
            Under the Land Acquisition Act, interest of 6% per annum continues to accrue from the date of award until realization. Every year of executive delay costs taxpayers over PKR 1.12 Billion in deadweight loss.
          </p>

          <div className="space-y-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Projected Years of Delayed Satisfaction:</span>
              <span className="text-amber-900 font-mono text-sm">{interestYears} Year{interestYears > 1 ? 's' : ''}</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={interestYears}
              onChange={e => setInterestYears(parseInt(e.target.value))}
              className="w-full accent-amber-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>1 Year</span>
              <span>5 Years</span>
              <span>10 Years</span>
            </div>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-500">Accrued Interest Added:</span>
                <div className="text-sm font-bold font-mono text-rose-800">
                  +PKR {calculatedInterestTotal.toLocaleString()}
                </div>
              </div>
              <div>
                <span className="text-slate-500">Total Taxpayer Debt:</span>
                <div className="text-sm font-bold font-mono text-slate-900">
                  PKR {grandTotalWithInterest.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reform Mechanism: Lakki Marwat ADP Deduction Model */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-900">
            <Scale className="w-4 h-4 text-emerald-700" />
            <span>Actionable Solution: Lakki Marwat ADP Deduction Framework</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900">
            Direct At-Source Settlement from Annual Development Programme (ADP)
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed font-serif-body">
            District Lakki Marwat (Issue 1) and Nowshera (Issue 5) propose an administrative and financial mechanism:
          </p>

          <ul className="space-y-2 text-xs text-slate-700 font-serif-body">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>At-Source Deduction:</strong> When a department defaults on a land decree, the Finance Department is directed to deduct the decretal sum directly from that department’s upcoming fiscal ADP allocation and deposit it into the Referee Court account.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Dedicated Judicial Escrow Account:</strong> Establish an institutional escrow facility managed under PHC supervision to liquidate aging land compensation awards.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Eliminate Compounding Statutory Interest:</strong> Freezes compounding interest penalties immediately upon state deposit into court registry.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
