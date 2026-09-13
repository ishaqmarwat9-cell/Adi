import React from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  Navigation, 
  MapPin, 
  Radio, 
  Eye, 
  CheckCircle2, 
  Car, 
  Video, 
  Scale, 
  Layers
} from 'lucide-react';
import { SecurityIncident, District } from '../types';

interface SecurityViewProps {
  incidents: SecurityIncident[];
  districts: District[];
  onOpenDocument: (district: District, page?: number) => void;
}

export const SecurityView: React.FC<SecurityViewProps> = ({
  incidents,
  districts,
  onOpenDocument
}) => {
  return (
    <div className="space-y-6">
      {/* Security Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm overflow-hidden relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-semibold mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
            <span>SOUTHERN BELT & MERGED DISTRICTS THREAT MATRIX</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold font-judicial text-slate-900">
            Security, Mobility & Continuity of Justice in High-Risk Zones
          </h2>
          <p className="text-xs md:text-sm text-slate-600 mt-2 font-serif-body leading-relaxed">
            Authentic district submissions reveal acute kinetic vulnerabilities, asymmetrical aerial threats, and severe mobility limitations. Preserving the continuity of justice demands immediate institutional interventions and emergency administrative protocols.
          </p>
        </div>
      </div>

      {/* Kinetic Incident Storyboards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {incidents.map((incident) => {
          const districtObj = districts.find(d => d.id === incident.districtId);

          return (
            <div
              key={incident.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-rose-400/50 transition"
            >
              <div>
                {/* Incident Header */}
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-judicial text-emerald-950">
                        {incident.districtName}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {incident.id}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mt-1">
                      {incident.title}
                    </h3>
                  </div>

                  <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded border flex-shrink-0 ${
                    incident.severity === 'Critical'
                      ? 'bg-rose-100 text-rose-900 border-rose-200'
                      : 'bg-amber-100 text-amber-900 border-amber-200'
                  }`}>
                    {incident.severity} Risk
                  </span>
                </div>

                {/* Location & Time Stamp */}
                <div className="flex items-center gap-4 text-xs text-slate-500 my-3 font-mono">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{incident.location}</span>
                  </div>
                  <div>•</div>
                  <div>Timeline: {incident.date}</div>
                </div>

                {/* Narrative Summary */}
                <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-100 space-y-2 text-xs text-slate-700 font-serif-body leading-relaxed">
                  <div>
                    <strong className="text-slate-900 font-sans uppercase tracking-wider text-[10px] block mb-1">
                      Verbatim Fact Summary:
                    </strong>
                    {incident.summary}
                  </div>

                  <div className="pt-2 border-t border-slate-200/60">
                    <strong className="text-rose-950 font-sans uppercase tracking-wider text-[10px] block mb-1">
                      Institutional Impact on Court Administration:
                    </strong>
                    <span className="text-slate-800">{incident.impactOnJustice}</span>
                  </div>
                </div>

                {/* Proposed Mitigation Protocol */}
                <div className="mt-3 bg-emerald-50/60 rounded-lg p-3 border border-emerald-200/60 text-xs text-emerald-950">
                  <strong className="text-emerald-900 uppercase tracking-wider text-[10px] block mb-1 font-sans">
                    Proposed Institutional Mitigation & Action:
                  </strong>
                  <span className="font-serif-body">{incident.proposedMitigation}</span>
                </div>
              </div>

              {/* Footer Traceability & Source Citation */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                <span className="text-[11px] text-slate-500 font-mono">
                  Ref: <strong>{incident.sourceReference}</strong>
                </span>

                {districtObj && (
                  <button
                    onClick={() => onOpenDocument(districtObj, 1)}
                    className="text-xs font-bold text-emerald-900 hover:text-emerald-950 flex items-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Inspect District Submission</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* High-Level Institutional Security Recommendations */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h3 className="text-base font-bold font-judicial text-slate-900 mb-3 flex items-center gap-2">
          <Scale className="w-4 h-4 text-emerald-800" />
          <span>Institutional Security Policy Directives for Consideration</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700">
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
              <Video className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">1. Virtual Court Continuity SOP</h4>
            <p className="leading-relaxed font-serif-body">
              Grant formal statutory authority to District & Sessions Judges (Tank, South Waziristan, Chitral) to declare virtual court days when military Road Opening Days (ROD) are canceled or delayed, ensuring hearings proceed uninterrupted.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
              <Car className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">2. Elite Armored Escort Cadre</h4>
            <p className="leading-relaxed font-serif-body">
              Establish a centralized High Court Judicial Protection Squad with bulletproof vehicles and non-local police escorts to eliminate familial leverage over guards deployed in sensitive tribal corridors.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
              <Radio className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">3. Emergency Capital Fortification</h4>
            <p className="leading-relaxed font-serif-body">
              Mandate the Finance Department to release the PKR 140 Million emergency security grant for District Bannu and deploy automated anti-drone electronic counter-measures across southern frontier stations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
