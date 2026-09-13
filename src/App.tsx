import React, { useState, useEffect } from 'react';
import { 
  districtsData, 
  allDistrictIssues, 
  policyThemes 
} from './data/districts';
import { presentationSlides } from './data/presentationSlides';
import { securityIncidents } from './data/securityIncidents';
import { TabType, District, DistrictIssue, TextSizeType } from './types';

import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { ExecutiveOverview } from './components/ExecutiveOverview';
import { DistrictExplorer } from './components/DistrictExplorer';
import { PolicyThemesView } from './components/PolicyThemesView';
import { PucIssueMatrix } from './components/PucIssueMatrix';
import { SecurityView } from './components/SecurityView';
import { FinancialMatrixView } from './components/FinancialMatrixView';
import { PresentationMode } from './components/PresentationMode';
import { SourceRegisterView } from './components/SourceRegisterView';
import { DocumentViewerModal } from './components/DocumentViewerModal';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [textSize, setTextSize] = useState<TextSizeType>('medium');
  const [highContrast, setHighContrast] = useState<boolean>(false);

  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isPresentationModalOpen, setIsPresentationModalOpen] = useState<boolean>(false);
  const [selectedDistrictForDoc, setSelectedDistrictForDoc] = useState<District | null>(null);
  const [docModalInitialPage, setDocModalInitialPage] = useState<number>(1);
  const [isDocModalOpen, setIsDocModalOpen] = useState<boolean>(false);
  const [selectedThemeId, setSelectedThemeId] = useState<number>(1);

  // Keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handler to open authentic document modal
  const handleOpenDocument = (district: District, page: number = 1) => {
    setSelectedDistrictForDoc(district);
    setDocModalInitialPage(page);
    setIsDocModalOpen(true);
  };

  // Handler for navigation from overview or search
  const handleOverviewNavigate = (tab: TabType, targetId?: string) => {
    setActiveTab(tab);
    if (tab === 'themes' && targetId) {
      setSelectedThemeId(parseInt(targetId, 10) || 1);
    }
  };

  // Text size classes
  const textSizeClass = {
    small: 'text-xs',
    medium: 'text-sm',
    high: 'text-base'
  }[textSize];

  return (
    <div className={`min-h-screen bg-[#f8f9fa] text-slate-900 flex flex-col font-sans transition-colors duration-150 ${
      highContrast ? 'high-contrast-mode' : ''
    } ${textSizeClass}`}>
      
      {/* Official Judicial Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPresentation={() => setIsPresentationModalOpen(true)}
        textSize={textSize}
        setTextSize={setTextSize}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
      />

      {/* Main Tab Navigation */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalDistricts={districtsData.length}
        totalIssues={allDistrictIssues.length}
        totalThemes={policyThemes.length}
        totalIncidents={securityIncidents.length}
      />

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'overview' && (
          <ExecutiveOverview
            districts={districtsData}
            themes={policyThemes}
            onNavigate={handleOverviewNavigate}
            onOpenDistrictDoc={handleOpenDocument}
          />
        )}

        {activeTab === 'districts' && (
          <DistrictExplorer
            districts={districtsData}
            onOpenDocument={handleOpenDocument}
            onSelectTheme={(themeId) => {
              setSelectedThemeId(themeId);
              setActiveTab('themes');
            }}
          />
        )}

        {activeTab === 'themes' && (
          <PolicyThemesView
            themes={policyThemes}
            allIssues={allDistrictIssues}
            districts={districtsData}
            onOpenDocument={handleOpenDocument}
            initialThemeId={selectedThemeId}
          />
        )}

        {activeTab === 'issues' && (
          <PucIssueMatrix
            allIssues={allDistrictIssues}
            districts={districtsData}
            onOpenDocument={handleOpenDocument}
          />
        )}

        {activeTab === 'security' && (
          <SecurityView
            incidents={securityIncidents}
            districts={districtsData}
            onOpenDocument={handleOpenDocument}
          />
        )}

        {activeTab === 'financials' && (
          <FinancialMatrixView
            districts={districtsData}
            onOpenDocument={handleOpenDocument}
          />
        )}

        {activeTab === 'presentation' && (
          <PresentationMode
            slides={presentationSlides}
          />
        )}

        {activeTab === 'source_register' && (
          <SourceRegisterView
            districts={districtsData}
            onOpenDocument={handleOpenDocument}
          />
        )}
      </main>

      {/* Universal Footer */}
      <footer className="bg-emerald-950 text-emerald-100 border-t border-emerald-900/80 py-6 mt-12 text-xs no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="font-judicial font-bold text-sm tracking-wide text-white">
              PESHAWAR HIGH COURT — SESSIONS JUDGES CONFERENCE 2026
            </div>
            <div className="text-[11px] text-emerald-300/80 font-serif-body italic mt-0.5">
              Judicial Administration & District Institutional Assessment Dossier
            </div>
          </div>

          <div className="text-center sm:text-right text-[11px] text-emerald-300/70">
            <div>Presented by: <strong>Ms. Phool Bibi</strong>, Additional MIT-II</div>
            <div>Prepared for the Assistance of: <strong>Hon’ble Chief Justice Mr. Justice S. M. Attique Shah</strong></div>
          </div>
        </div>
      </footer>

      {/* Authentic Document Viewer Modal (PDF / DOCX Facsimile) */}
      <DocumentViewerModal
        district={selectedDistrictForDoc}
        isOpen={isDocModalOpen}
        onClose={() => setIsDocModalOpen(false)}
        initialPage={docModalInitialPage}
      />

      {/* Quick Search Modal (Ctrl+K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        districts={districtsData}
        allIssues={allDistrictIssues}
        securityIncidents={securityIncidents}
        onSelectDistrict={(district) => {
          handleOpenDocument(district, 1);
        }}
        onSelectIssue={(issue) => {
          const district = districtsData.find(d => d.id === issue.districtId);
          if (district) {
            handleOpenDocument(district, issue.sourcePageNumber);
          }
        }}
      />

      {/* High-Level Presentation Modal (If launched from Header) */}
      {isPresentationModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
          <PresentationMode
            slides={presentationSlides}
            onClose={() => setIsPresentationModalOpen(false)}
            isModal={true}
          />
        </div>
      )}
    </div>
  );
}
