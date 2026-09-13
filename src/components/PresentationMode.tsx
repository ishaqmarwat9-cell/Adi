import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  FileText, 
  Scale, 
  MessageSquare, 
  Grid, 
  ListOrdered, 
  CheckCircle2, 
  BookOpen, 
  X,
  Presentation,
  ShieldAlert,
  Coins
} from 'lucide-react';
import { PresentationSlide } from '../types';

interface PresentationModeProps {
  slides: PresentationSlide[];
  onClose?: () => void;
  isModal?: boolean;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  slides,
  onClose,
  isModal = false
}) => {
  const [currentSlideIdx, setCurrentSlideIdx] = useState<number>(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(true);
  const [showThumbnails, setShowThumbnails] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const currentSlide = slides[currentSlideIdx] || slides[0];
  const totalSlides = slides.length;

  const handleNext = () => {
    if (currentSlideIdx < totalSlides - 1) {
      setCurrentSlideIdx(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlideIdx > 0) {
      setCurrentSlideIdx(prev => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape' && onClose && isModal) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIdx, totalSlides, isModal, onClose]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullScreen(true)).catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => setIsFullScreen(false)).catch(() => {});
      }
    }
  };

  return (
    <div className={`flex flex-col bg-slate-950 text-white rounded-xl overflow-hidden border border-slate-800 shadow-2xl ${
      isModal ? 'h-[92vh] max-w-6xl w-full mx-auto' : 'min-h-[750px]'
    }`}>
      {/* Top Presentation Bar */}
      <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded bg-emerald-900 border border-amber-400/40 flex items-center justify-center">
            <Presentation className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <div className="text-xs font-bold text-white font-judicial tracking-wide flex items-center gap-2">
              <span>SESSIONS JUDGES CONFERENCE 2026 — 16-SLIDE HIGH-LEVEL BRIEFING</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-amber-300 border border-emerald-700">
                Hon’ble Chief Justice Mr. Justice S. M. Attique Shah
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-serif-body italic">
              Presented by Ms. Phool Bibi, Additional Member Inspection Team-II (AMIT-II)
            </div>
          </div>
        </div>

        {/* Presentation Controls */}
        <div className="flex items-center space-x-2">
          {/* Thumbnails toggle */}
          <button
            onClick={() => setShowThumbnails(prev => !prev)}
            className={`p-1.5 rounded text-xs transition flex items-center gap-1 ${
              showThumbnails ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
            title="Toggle Slide Grid"
          >
            <Grid className="w-4 h-4" />
            <span className="hidden sm:inline">Slides</span>
          </button>

          {/* Speaker notes toggle */}
          <button
            onClick={() => setShowSpeakerNotes(prev => !prev)}
            className={`p-1.5 rounded text-xs transition flex items-center gap-1 ${
              showSpeakerNotes ? 'bg-emerald-800 text-amber-200 font-semibold' : 'bg-slate-800 text-slate-300 hover:text-white'
            }`}
            title="Toggle AMIT-II Presenter Notes"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Presenter Notes</span>
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={toggleFullScreen}
            className="p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white transition"
            title="Fullscreen"
          >
            {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Close modal if applicable */}
          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded bg-slate-800 text-slate-400 hover:text-white transition ml-2"
              title="Close Presentation"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Main Slide Workspace */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Thumbnails Sidebar (Toggleable) */}
        {showThumbnails && (
          <div className="w-64 bg-slate-900 border-r border-slate-800 overflow-y-auto p-3 space-y-2 flex-shrink-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
              Slide Deck Outline
            </div>
            {slides.map((s, idx) => (
              <button
                key={s.slideNumber}
                onClick={() => {
                  setCurrentSlideIdx(idx);
                  setShowThumbnails(false);
                }}
                className={`w-full text-left p-2 rounded text-xs transition flex items-start gap-2 ${
                  currentSlideIdx === idx
                    ? 'bg-emerald-900 text-amber-200 font-semibold border border-emerald-700'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span className="font-mono text-[10px] opacity-60 mt-0.5">{s.slideNumber}.</span>
                <span className="truncate">{s.title}</span>
              </button>
            ))}
          </div>
        )}

        {/* Central Slide Stage */}
        <div className="flex-1 flex flex-col justify-between p-6 sm:p-10 overflow-y-auto bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto w-full my-auto space-y-6">
            {/* Slide Header */}
            <div className="border-b border-emerald-800/40 pb-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] uppercase tracking-widest font-bold text-amber-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-700">
                  {currentSlide.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Slide {currentSlide.slideNumber} of {totalSlides}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-judicial text-white tracking-wide leading-tight">
                {currentSlide.title}
              </h2>
              {currentSlide.subtitle && (
                <p className="text-sm sm:text-base text-emerald-300/90 font-serif-body italic mt-1">
                  {currentSlide.subtitle}
                </p>
              )}
            </div>

            {/* Slide Content Bullets */}
            <div className="space-y-3.5 text-slate-200 text-sm sm:text-base leading-relaxed font-serif-body py-2">
              {currentSlide.content.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 bg-slate-900/60 p-3.5 rounded-lg border border-slate-800/80">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0"></div>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Optional Key Metrics Bar */}
            {currentSlide.keyMetrics && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                {currentSlide.keyMetrics.map((km, kmIdx) => (
                  <div key={kmIdx} className="text-center">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      {km.label}
                    </span>
                    <span className="text-lg font-bold text-amber-300 font-judicial mt-0.5 block">
                      {km.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Slide Traceability Citation */}
            <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              <span>Traceable Record: <strong>{currentSlide.sourceRef}</strong></span>
              <span className="text-slate-500">Peshawar High Court Registry</span>
            </div>
          </div>
        </div>
      </div>

      {/* Speaker Notes Drawer (For Ms. Phool Bibi) */}
      {showSpeakerNotes && currentSlide.speakerNotes && (
        <div className="bg-slate-900/95 border-t border-slate-800 px-6 py-3 flex-shrink-0">
          <div className="max-w-4xl mx-auto flex items-start gap-3">
            <div className="w-6 h-6 rounded bg-amber-500/20 text-amber-300 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">
                AMIT-II Verbal Briefing Notes for the Hon’ble Chief Justice:
              </span>
              <p className="text-xs text-slate-300 font-serif-body italic leading-relaxed mt-0.5">
                "{currentSlide.speakerNotes}"
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation Toolbar */}
      <div className="bg-slate-950 border-t border-slate-800 px-6 py-3 flex items-center justify-between flex-shrink-0">
        <button
          onClick={handlePrev}
          disabled={currentSlideIdx === 0}
          className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 disabled:opacity-30 transition flex items-center gap-1.5 text-xs font-semibold border border-slate-800"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Slide</span>
        </button>

        {/* Slide Tracker Dots / Counter */}
        <div className="flex items-center space-x-2">
          <span className="text-xs font-mono text-slate-400">
            Slide <strong className="text-amber-300">{currentSlideIdx + 1}</strong> / {totalSlides}
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={currentSlideIdx === totalSlides - 1}
          className="px-4 py-2 rounded-lg bg-emerald-900 hover:bg-emerald-800 text-amber-200 disabled:opacity-30 transition flex items-center gap-1.5 text-xs font-bold border border-emerald-700 shadow-sm"
        >
          <span>Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
