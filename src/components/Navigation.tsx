import React from 'react';
import { 
  LayoutDashboard, 
  Building2, 
  BookOpen, 
  Table2, 
  ShieldAlert, 
  Coins, 
  Presentation, 
  FileCheck2 
} from 'lucide-react';
import { TabType } from '../types';

interface NavigationProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  totalDistricts: number;
  totalIssues: number;
  totalThemes: number;
  totalIncidents: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeTab,
  setActiveTab,
  totalDistricts,
  totalIssues,
  totalThemes,
  totalIncidents
}) => {
  const navItems: {
    id: TabType;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string | number;
    badgeColor?: string;
  }[] = [
    {
      id: 'overview',
      label: 'Executive Overview',
      icon: LayoutDashboard
    },
    {
      id: 'districts',
      label: 'District Explorer',
      icon: Building2,
      badge: totalDistricts,
      badgeColor: 'bg-emerald-800 text-emerald-100'
    },
    {
      id: 'themes',
      label: 'Policy Themes',
      icon: BookOpen,
      badge: totalThemes,
      badgeColor: 'bg-amber-800 text-amber-100'
    },
    {
      id: 'issues',
      label: 'PUC Issue Matrix',
      icon: Table2,
      badge: totalIssues,
      badgeColor: 'bg-slate-700 text-slate-100'
    },
    {
      id: 'security',
      label: 'Security & Continuity',
      icon: ShieldAlert,
      badge: totalIncidents,
      badgeColor: 'bg-rose-800 text-rose-100'
    },
    {
      id: 'financials',
      label: 'Financial & Decrees',
      icon: Coins,
      badge: '18.68B',
      badgeColor: 'bg-indigo-800 text-indigo-100'
    },
    {
      id: 'presentation',
      label: '16-Slide Briefing',
      icon: Presentation,
      badge: '16 Slides',
      badgeColor: 'bg-emerald-900 text-amber-300 font-semibold'
    },
    {
      id: 'source_register',
      label: 'Source Register & Docs',
      icon: FileCheck2
    }
  ];

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-[69px] z-20 no-print overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-1 py-1.5 min-w-max">
          {navItems.map(item => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-md transition duration-150 ${
                  isActive
                    ? 'bg-emerald-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                <span>{item.label}</span>
                {item.badge !== undefined && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                      isActive
                        ? 'bg-emerald-800 text-emerald-100'
                        : item.badgeColor || 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
