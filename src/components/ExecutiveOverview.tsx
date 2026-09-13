import React from 'react';
import { 
  Building2, 
  FileText, 
  ShieldAlert, 
  Coins, 
  Layers, 
  ArrowUpRight, 
  AlertTriangle, 
  CheckCircle2, 
  Scale, 
  Landmark, 
  Cpu, 
  Users, 
  FileSignature
} from 'lucide-react';
import { District, PolicyTheme, TabType } from '../types';

interface ExecutiveOverviewProps {
  districts: District[];
  themes: PolicyTheme[];
  onNavigate: (tab: TabType, targetId?: string) => void;
  onOpenDistrictDoc: (district: District) => void;
}

export const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({
  districts,
  themes,
  onNavigate,
  onOpenDistrictDoc
}) => {
  const tierACount = districts.filter(d => d.screeningTier === 'Tier A').length;
  const tierBCount = districts.filter(d => d.screeningTier === 'Tier B').length;
  const tierReviewCount = districts.filter(d => d.screeningTier === 'Review').length;
  const mergedDistricts = districts.filter(d => d.isMergedDistrict);
  const totalIssuesCount = districts.reduce((acc, d) => acc + d.issueCount, 0);

  return (
    <div className="space-y-6">
      {/* Official Judicial Inscription Card */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 p-6 text-white relative">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <Scale className="w-48 h-48 text-white" />
          </div>
          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-semibold mb-3">
              <Landmark className="w-3.5 h-3.5" />
              <span>SESSIONS JUDGES CONFERENCE 2026 — INSTITUTIONAL DOSSIER</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-judicial tracking-wide text-white leading-tight">
              Judicial Administration & District Institutional Assessment
            </h2>
            <p className="text-sm md:text-base text-emerald-200/90 font-serif-body italic mt-1.5 max-w-3xl">
              Prepared for the high-level briefing of the Hon’ble Chief Justice Mr. Justice S. M. Attique Shah.
              Consolidating authentic records from all 35 Judicial Districts of Khyber Pakhtunkhwa.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-emerald-200 border-t border-emerald-800/80 pt-4">
              <div className="flex items-center gap-1.5">
                <FileSignature className="w-4 h-4 text-amber-300" />
                <span>Reporting Officer: <strong>Ms. Phool Bibi</strong>, Additional MIT-II</span>
              </div>
              <div className="h-3 w-px bg-emerald-700 hidden sm:block"></div>
              <div>
                <span>Source Baseline: <strong>34 PDF Submissions + 1 DOCX Original (Kohistan Upper)</strong></span>
              </div>
              <div className="h-3 w-px bg-emerald-700 hidden sm:block"></div>
              <div>
                <span>Compliance: <strong>100% District Participation (35/35)</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-slate-50/70 p-4">
          <div className="p-3 text-center">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Submissions</span>
            <div className="text-2xl font-bold text-slate-900 font-judicial mt-0.5">35 Districts</div>
            <span className="text-[11px] text-emerald-700 font-semibold flex items-center justify-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3 h-3" /> 100% Compliance
            </span>
          </div>

          <div className="p-3 text-center">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Catalogued Issues</span>
            <div className="text-2xl font-bold text-emerald-900 font-judicial mt-0.5">{totalIssuesCount} Records</div>
            <span className="text-[11px] text-slate-600">Extracted & Indexed</span>
          </div>

          <div className="p-3 text-center">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Policy Themes</span>
            <div className="text-2xl font-bold text-amber-900 font-judicial mt-0.5">8 Key Areas</div>
            <span className="text-[11px] text-amber-700 font-medium">Systemic Solutions</span>
          </div>

          <div className="p-3 text-center">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Decretal Backlog</span>
            <div className="text-2xl font-bold text-rose-900 font-judicial mt-0.5">PKR 18.68B+</div>
            <span className="text-[11px] text-rose-700 font-medium">Accumulating 6% Int.</span>
          </div>

          <div className="p-3 text-center col-span-2 md:col-span-1">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Critical Frontiers</span>
            <div className="text-2xl font-bold text-indigo-900 font-judicial mt-0.5">7 Merged Dists</div>
            <span className="text-[11px] text-indigo-700 font-medium">Special Security Cordon</span>
          </div>
        </div>
      </div>

      {/* 3-Tier Screening Topology Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div 
          onClick={() => onNavigate('districts')}
          className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-emerald-500/50 hover:shadow-md transition cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
              Tier A — Province-Wide Policy
            </span>
            <span className="text-xl font-bold text-emerald-950 font-judicial">{tierACount} Districts</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Submissions presenting systemic questions requiring High Court Rules amendment, statutory drafting, or province-wide executive coordination (e.g. Swabi CPC 122 rules, Abbottabad DCM, Haripur Bar regulations).
          </p>
          <div className="mt-4 flex items-center text-xs font-semibold text-emerald-800 group-hover:text-emerald-950">
            <span>Explore Tier A Submissions</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div 
          onClick={() => onNavigate('districts')}
          className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-amber-500/50 hover:shadow-md transition cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-100 text-amber-900 border border-amber-200">
              Tier B — Regional & Local Grievances
            </span>
            <span className="text-xl font-bold text-amber-950 font-judicial">{tierBCount} Districts</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Submissions identifying localized bottlenecks, site-specific land disputes, construction bans, military Road Opening Day delays, and extreme climate logistics (e.g. North Waziristan, South Waziristan, Tank, Chitral).
          </p>
          <div className="mt-4 flex items-center text-xs font-semibold text-amber-800 group-hover:text-amber-950">
            <span>Explore Tier B Submissions</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <div 
          onClick={() => {
            const btg = districts.find(d => d.id === 'battagram');
            if (btg) onOpenDistrictDoc(btg);
          }}
          className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:border-rose-500/50 hover:shadow-md transition cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-rose-100 text-rose-800 border border-rose-200">
              Tier Review — Verification Needed
            </span>
            <span className="text-xl font-bold text-rose-950 font-judicial">{tierReviewCount} District</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            District Battagram submitted a proforma marked <strong>"Nill"</strong> across all categories. Identified for direct administrative inspection and data reconciliation by AMIT-II.
          </p>
          <div className="mt-4 flex items-center text-xs font-semibold text-rose-800 group-hover:text-rose-950">
            <span>Inspect Battagram Submission</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>

      {/* The 4 Major Systemic Pressures (Diagnostic Synthesis) */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-lg font-bold font-judicial text-slate-900">
              The Four Systemic Pressures Across District Judiciary
            </h3>
            <p className="text-xs text-slate-500">
              Consolidated diagnostic synthesis derived across the 35 district submissions.
            </p>
          </div>
          <button
            onClick={() => onNavigate('themes')}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
          >
            <span>View All 8 Themes</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Pressure 1 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-md bg-blue-100 text-blue-800 flex items-center justify-center mb-3">
                <Users className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                1. Human Resource & Ministerial Paralysis
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Acute deficit in court ministerial, stenographic, and IT posts (Abbottabad, Lower Kohistan, Kohat). Crippling delays in Finance Dept SNE sanctions, staff attrition (Peshawar), and judicial vacancies accumulating dockets (Bajaur, Buner, Khyber).
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-blue-900 font-semibold">
              Reforms: SNE fast-track & Time-Scale promotion
            </div>
          </div>

          {/* Pressure 2 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                <Building2 className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                2. Fragmented & Un-Owned Infrastructure
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Courts in Mardan operate across 5 scattered flood-prone premises; Kolai-Palas operates entirely outside its territorial border in Shangla; North Waziristan land possession remains stalled; Kohistan Upper impacted by Dasu Dam works.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-amber-900 font-semibold">
              Reforms: PHC Autonomous Engineering Wing
            </div>
          </div>

          {/* Pressure 3 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-md bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                3. Digital Modernization Legal Foundation
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Swabi urges invoking Section 122 CPC to create a binding High Court Rules chapter for CFMIS and digital process serving. Mardan reports successful E-Release to prisons; Charsadda highlights urgent need for Police/NADRA APIs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-emerald-900 font-semibold">
              Reforms: Section 122 CPC Rules Chapter
            </div>
          </div>

          {/* Pressure 4 */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-md bg-rose-100 text-rose-800 flex items-center justify-center mb-3">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1.5">
                4. Asymmetrical Security & Mobility Cordon
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Feb 2026 drone attack on Sessions Judge residence in South Waziristan; Bannu urgently requires PKR 140M fortification; Tank judges stranded due to intermittent Army Road Opening Days (ROD); Upper Orakzai route closures.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-rose-900 font-semibold">
              Reforms: Virtual court duty & Elite Guard Cadre
            </div>
          </div>
        </div>
      </div>

      {/* Featured Strategic Spotlights (Mardan Decretal Debt & Security Deep-Dive) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Spotlight 1: Mardan Decretal Debt */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200 flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" /> Financial Liability Alert
              </span>
              <span className="text-xs font-mono text-slate-500">Mardan Referee Court</span>
            </div>
            <h4 className="text-base font-bold font-judicial text-slate-900 mt-1">
              PKR 18.684 Billion Unpaid Land Acquisition Decrees
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Execution petitions against government entities in Mardan have accumulated PKR 18.68+ Billion in base debt across 9 major public schemes (AWKUM, Agriculture Univ, BKMC). With legal immunity from arrest/attachment under Section 82 CPC, decrees remain unexecuted while compounding 6% statutory interest (approx. PKR 1.12 Billion annually).
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 bg-rose-50/60 p-3 rounded-lg border border-rose-100">
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Total Outstanding Base</span>
                <div className="text-sm font-bold text-rose-950 font-mono">PKR 18,684,000,000</div>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Estimated Annual Interest (6%)</span>
                <div className="text-sm font-bold text-rose-800 font-mono">PKR 1,121,040,000 / yr</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Lakki Marwat proposes ADP deduction mechanism.</span>
            <button
              onClick={() => onNavigate('financials')}
              className="text-xs font-bold text-rose-800 hover:text-rose-950 flex items-center gap-1"
            >
              <span>Inspect Decretal Matrix</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Spotlight 2: High-Risk Security Zones */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" /> Security & Judicial Continuity
              </span>
              <span className="text-xs font-mono text-slate-500">Southern & Merged Belt</span>
            </div>
            <h4 className="text-base font-bold font-judicial text-slate-900 mt-1">
              Frontier Security & The Kinetic Incident Profile
            </h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Submissions from Bannu, South Waziristan, Tank, and Orakzai demand decisive PHC intervention. In South Waziristan, a drone strike struck the Sessions Judge premises in Feb 2026; Tank judicial movement is paralyzed when military Road Opening Days are delayed; Bannu requires PKR 140M for perimeter hardening.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2 bg-amber-50/60 p-3 rounded-lg border border-amber-100">
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Drone Attack Recorded</span>
                <div className="text-xs font-bold text-amber-950">Feb 2026 (S. Waziristan)</div>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Bannu Capital Requirement</span>
                <div className="text-xs font-bold text-amber-900">PKR 140 Million Grant</div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">Virtual court duty proposed for stranded judicial officers.</span>
            <button
              onClick={() => onNavigate('security')}
              className="text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1"
            >
              <span>Inspect Security Storyboards</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Action Navigation Bar */}
      <div className="bg-emerald-950 text-white rounded-xl p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold font-judicial text-amber-300">
            Sessions Judges Conference 2026 — Interactive Modules
          </h4>
          <p className="text-xs text-emerald-200/80">
            Seamlessly navigate across all 35 district original files, full extracted issue matrix, and the 16-slide high-level briefing.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('districts')}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white transition border border-emerald-600/50 flex items-center gap-1.5"
          >
            <Building2 className="w-3.5 h-3.5 text-amber-300" />
            <span>Open 35 District Explorer</span>
          </button>
          <button
            onClick={() => onNavigate('presentation')}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition flex items-center gap-1.5 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Launch 16-Slide Presentation</span>
          </button>
        </div>
      </div>
    </div>
  );
};
