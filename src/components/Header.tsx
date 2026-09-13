import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Search, 
  Printer, 
  Maximize, 
  Minimize, 
  Eye, 
  FileSpreadsheet
} from 'lucide-react';
import { DisplaySettings, TextSizeType } from '../types';

interface HeaderProps {
  displaySettings?: DisplaySettings;
  setDisplaySettings?: React.Dispatch<React.SetStateAction<DisplaySettings>>;
  textSize?: TextSizeType;
  setTextSize?: (size: TextSizeType) => void;
  highContrast?: boolean;
  setHighContrast?: React.Dispatch<React.SetStateAction<boolean>> | ((val: boolean | ((prev: boolean) => boolean)) => void);
  onOpenSearch: () => void;
  onOpenPresentation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  displaySettings,
  setDisplaySettings,
  textSize,
  setTextSize,
  highContrast,
  setHighContrast,
  onOpenSearch,
  onOpenPresentation
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const activeTextSize: TextSizeType = displaySettings?.textSize || textSize || 'medium';
  const isHighContrastMode: boolean = (displaySettings?.contrastMode === 'high-contrast') || (displaySettings?.highContrast ?? false) || (highContrast ?? false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullScreen(true);
        if (setDisplaySettings) {
          setDisplaySettings(prev => ({ ...prev, isFullScreen: true }));
        }
      }).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullScreen(false);
          if (setDisplaySettings) {
            setDisplaySettings(prev => ({ ...prev, isFullScreen: false }));
          }
        }).catch(() => {});
      }
    }
  };

  const cycleTextSize = () => {
    const sizes: TextSizeType[] = ['small', 'medium', 'high'];
    const currentIndex = sizes.indexOf(activeTextSize);
    const nextSize = sizes[(currentIndex + 1) % sizes.length];

    if (setDisplaySettings) {
      setDisplaySettings(prev => ({ ...prev, textSize: nextSize }));
    }
    if (setTextSize) {
      setTextSize(nextSize);
    }
  };

  const toggleContrast = () => {
    if (setDisplaySettings) {
      setDisplaySettings(prev => ({
        ...prev,
        contrastMode: prev.contrastMode === 'high-contrast' ? 'standard' : 'high-contrast',
        highContrast: prev.contrastMode !== 'high-contrast'
      }));
    }
    if (setHighContrast) {
      setHighContrast(prev => !prev);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="border-b border-emerald-900/20 bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-900 text-white shadow-md no-print sticky top-0 z-30">
      {/* Top Gold Border Stripe */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 w-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo & Official Inscription */}
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-lg bg-emerald-800/80 border border-amber-400/40 flex items-center justify-center shadow-inner flex-shrink-0">
              <Scale className="w-7 h-7 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-amber-300/90 bg-emerald-900/60 px-2 py-0.5 rounded border border-amber-400/20">
                  Peshawar High Court
                </span>
                <span className="text-[10px] text-emerald-200/80 font-medium">
                  Sessions Judges Conference 2026
                </span>
              </div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-white font-judicial mt-0.5">
                Judicial Administration & District Institutional Assessment
              </h1>
              <p className="text-xs text-emerald-200/90 font-serif-body italic">
                For the Assistance of the Hon’ble Chief Justice Mr. Justice S. M. Attique Shah
              </p>
            </div>
          </div>

          {/* Right Section: Presenter Badge & Functional Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Presenter Accreditation Badge */}
            <div className="hidden lg:flex flex-col text-right border-r border-emerald-700/50 pr-3.5">
              <span className="text-[10px] text-emerald-300 uppercase tracking-wider font-semibold">
                Presented By
              </span>
              <span className="text-xs font-semibold text-amber-200">
                Ms. Phool Bibi
              </span>
              <span className="text-[10px] text-emerald-300/80">
                Additional MIT-II, PHC
              </span>
            </div>

            {/* Universal Search Button */}
            <button
              id="header-search-btn"
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-emerald-800/60 hover:bg-emerald-700/70 border border-emerald-600/40 text-emerald-100 transition shadow-sm"
              title="Search all districts, issues and evidence (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Search Dossier</span>
              <kbd className="hidden md:inline-block text-[9px] bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-700/50 text-emerald-300">
                ⌘K
              </kbd>
            </button>

            {/* Presentation Mode Button */}
            <button
              id="header-presentation-btn"
              onClick={onOpenPresentation}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-200 transition shadow-sm"
              title="Launch 16-slide presentation mode"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-amber-300" />
              <span>Slides Briefing</span>
            </button>

            {/* Display Options Dropdown / Buttons */}
            <div className="flex items-center gap-1 bg-emerald-950/60 p-1 rounded-md border border-emerald-700/40">
              {/* Text Size Cycle */}
              <button
                id="header-text-size-btn"
                onClick={cycleTextSize}
                className="px-2 py-1 text-[11px] font-semibold text-emerald-200 hover:text-white rounded hover:bg-emerald-800/60 transition"
                title={`Text Size: ${activeTextSize.toUpperCase()} (Click to toggle)`}
              >
                A{activeTextSize === 'high' ? '+' : activeTextSize === 'small' ? '-' : ''}
              </button>

              {/* Contrast Mode */}
              <button
                id="header-contrast-btn"
                onClick={toggleContrast}
                className={`p-1 text-xs rounded transition ${
                  isHighContrastMode
                    ? 'bg-amber-400 text-slate-950 font-bold'
                    : 'text-emerald-200 hover:text-white hover:bg-emerald-800/60'
                }`}
                title="Toggle High-Contrast Mode"
              >
                <Eye className="w-3.5 h-3.5" />
              </button>

              {/* Print Button */}
              <button
                id="header-print-btn"
                onClick={handlePrint}
                className="p-1 text-emerald-200 hover:text-white hover:bg-emerald-800/60 rounded transition"
                title="Print / Save PDF Briefing Dossier"
              >
                <Printer className="w-3.5 h-3.5" />
              </button>

              {/* Fullscreen Button */}
              <button
                id="header-fullscreen-btn"
                onClick={toggleFullScreen}
                className="p-1 text-emerald-200 hover:text-white hover:bg-emerald-800/60 rounded transition"
                title="Toggle Fullscreen"
              >
                {isFullScreen ? (
                  <Minimize className="w-3.5 h-3.5" />
                ) : (
                  <Maximize className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
