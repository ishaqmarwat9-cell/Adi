export type FileType = 'PDF' | 'DOCX';
export type ScreeningTier = 'Tier A' | 'Tier B' | 'Review';
export type PriorityLevel = 'Critical' | 'High' | 'Normal';
export type IssueClassification = 
  | 'Province-wide policy question' 
  | 'Recurring regional concern' 
  | 'District-specific grievance';
export type JurisdictionLevel = 
  | 'Requiring PHC-level intervention' 
  | 'Within district control' 
  | 'Inter-departmental / Executive coordination';

export type TabType = 
  | 'overview' 
  | 'districts' 
  | 'themes' 
  | 'issues' 
  | 'security' 
  | 'financials' 
  | 'presentation' 
  | 'source_register';

export type TextSizeType = 'small' | 'medium' | 'high';
export type DisplaySize = 'small' | 'medium' | 'high';
export type ContrastMode = 'standard' | 'high-contrast';

export interface DisplaySettings {
  textSize: TextSizeType;
  contrastMode: ContrastMode;
  isFullScreen?: boolean;
  highContrast?: boolean;
}

export interface SupportingDatum {
  label: string;
  amount?: string;
  detail: string;
}

export interface DistrictIssue {
  id: string; // e.g. ISU-MRD-01
  districtId: string;
  districtName: string;
  issueNumber: string; // e.g. "Issue No. 1 / Court Infrastructure & Operations"
  category: string;
  themeId: number; // 1 to 8
  themeName: string;
  priority: PriorityLevel;
  tier: ScreeningTier;
  classification: IssueClassification;
  jurisdiction: JurisdictionLevel;
  
  // Verbatim 4-part structure
  problem: string;
  institutionalImpact: string;
  proposedSolution: string;
  preciseIntervention: string;
  
  // Source traceability
  sourceFileName: string;
  sourceFileType: FileType;
  sourcePageNumber: number;
  sourceLocation: string; // e.g. "Annexure-A, Page 1 of 6"
  proformaType: 'Annexure-A' | 'Annexure-B' | 'Annexure-C' | 'Annexure-D' | 'Annexure-E' | 'Covering Letter' | 'DOCX Submission';
  
  // Supporting quantitative data if any
  supportingData?: SupportingDatum[];
  reviewNote?: string;
}

export interface DocumentPage {
  pageNumber: number;
  title: string;
  headerText: string;
  subHeaderText?: string;
  sections: {
    heading: string;
    content: string;
    items?: string[];
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  signatory?: {
    name: string;
    designation: string;
    district: string;
    date: string;
  };
  scannedOrReviewNotice?: string;
}

export interface SubmissionDocument {
  districtId: string;
  districtName: string;
  fileName: string;
  fileType: FileType;
  fileSize: string;
  totalPages: number;
  date: string;
  dispatchNo: string;
  issuingJudge: string;
  designation: string;
  addressInfo?: string;
  contactInfo?: {
    phone?: string;
    fax?: string;
    email?: string;
    web?: string;
  };
  pages: DocumentPage[];
}

export interface District {
  id: string; // e.g. "mardan", "abbottabad"
  name: string;
  division: 'Peshawar' | 'Mardan' | 'Hazara' | 'Malakand' | 'Kohat' | 'Bannu' | 'D.I. Khan' | 'Merged Districts';
  isMergedDistrict: boolean;
  districtJudge: string;
  dispatchNo: string;
  submissionDate: string;
  fileType: FileType;
  fileName: string;
  fileSize: string;
  pageCount: number;
  screeningTier: ScreeningTier;
  issueCount: number;
  summary: string;
  status: 'Complete Submission' | 'Multiple Annexures' | 'Consolidated Proforma' | 'Scanned / Review Needed' | 'DOCX Original';
  policyThemeIds: number[];
  issues: DistrictIssue[];
  document: SubmissionDocument;
  securityProfile?: {
    isVulnerableZone: boolean;
    threatTier?: 'High Threat' | 'Volatile' | 'Moderate' | 'Isolated';
    specialCircumstance?: string;
  };
}

export interface PolicyTheme {
  id: number;
  title: string;
  shortTitle?: string;
  icon?: string;
  description: string;
  districtsCount?: number;
  participatingDistricts?: string[];
  keyHighlights?: string[];
  proposedSolutions?: string[];
  affectedDistricts?: string[];
  recurringProblems?: string[];
  institutionalImpact?: string;
  practicalSolutions?: string[];
  proposedPHCInterventions?: string[];
  metrics?: {
    label: string;
    value: string | number;
    subtext?: string;
  }[];
  issueIds?: string[];
}

export interface PresentationSlide {
  id?: number;
  slideNumber: number;
  title: string;
  subtitle?: string;
  category: string;
  sourceRef: string;
  content: string[];
  speakerNotes?: string;
  keyMetrics?: {
    label: string;
    value: string;
  }[];
  leadParagraph?: string;
  keyPoints?: {
    title: string;
    description: string;
    districtRef?: string;
  }[];
  dataMetrics?: {
    label: string;
    value: string;
    note?: string;
  }[];
  sourceReferences?: {
    districtId: string;
    districtName: string;
    fileName: string;
    pageNumber: number;
    issueId?: string;
  }[];
  decisionForConsideration?: string;
}

export interface SecurityIncident {
  id: string;
  districtId: string;
  districtName: string;
  date: string;
  title: string;
  severity: 'Critical' | 'High' | 'Moderate';
  summary: string;
  sourceReference: string;
  impactOnJustice: string;
  proposedMitigation: string;
  location: string;
  involvedAgencies?: string[];
  category?: 'Infrastructure Fortification' | 'Mobility & Escort (ROD)' | 'Direct Attack / Incident' | 'Hardship / Tenure' | 'Access Route Blockade';
  dateReported?: string;
  verifiedStatus?: 'Verified Official Submission' | 'Documented Event in Source' | 'Institutional Assessment';
  locationDetail?: string;
  description?: string;
  impactOnJudicialFunctioning?: string;
  sourceDistrict?: string;
  sourceFileName?: string;
  sourcePageNumber?: number;
  actionRequired?: string;
  coordinates?: { x: number; y: number };
}
