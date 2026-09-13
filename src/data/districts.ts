import { District, SubmissionDocument, DocumentPage, PolicyTheme } from '../types';
import { allDistrictIssues } from './issuesPart3';

// Raw metadata definition for the 35 districts of Khyber Pakhtunkhwa
interface DistrictMeta {
  id: string;
  name: string;
  division: 'Peshawar' | 'Mardan' | 'Hazara' | 'Malakand' | 'Kohat' | 'Bannu' | 'D.I. Khan' | 'Merged Districts';
  isMergedDistrict: boolean;
  districtJudge: string;
  dispatchNo: string;
  submissionDate: string;
  fileType: 'PDF' | 'DOCX';
  fileName: string;
  fileSize: string;
  pageCount: number;
  screeningTier: 'Tier A' | 'Tier B' | 'Review';
  status: 'Complete Submission' | 'Multiple Annexures' | 'Consolidated Proforma' | 'Scanned / Review Needed' | 'DOCX Original';
  summary: string;
  policyThemeIds: number[];
  phone?: string;
  fax?: string;
  email?: string;
  web?: string;
  securityProfile?: {
    isVulnerableZone: boolean;
    threatTier?: 'High Threat' | 'Volatile' | 'Moderate' | 'Isolated';
    specialCircumstance?: string;
  };
}

const rawDistricts: DistrictMeta[] = [
  {
    id: 'abbottabad',
    name: 'Abbottabad',
    division: 'Hazara',
    isMergedDistrict: false,
    districtJudge: 'Aabid Sarwar',
    dispatchNo: '1061 -14/16',
    submissionDate: '07-09-2026',
    fileType: 'PDF',
    fileName: 'Abbottabad_Submission.pdf',
    fileSize: '1.8 MB',
    pageCount: 7,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Focuses on acute shortage of ministerial & IT cadres with SNE pending at Finance Dept; introduces Differentiated Case Management (DCM) to replace raw disposal quotas; urges inter-departmental SLAs for police challans and revenue delays.',
    policyThemeIds: [1, 4, 6],
    phone: '0992-9310051',
    fax: '0992-9310051',
    email: 'dsjatd@gmail.com'
  },
  {
    id: 'bajaur',
    name: 'Bajaur',
    division: 'Merged Districts',
    isMergedDistrict: true,
    districtJudge: 'Mr. Riaz Ahmad',
    dispatchNo: '341/DSJ/BJR',
    submissionDate: '09-09-2026',
    fileType: 'PDF',
    fileName: 'Bajaur_Submission.pdf',
    fileSize: '1.2 MB',
    pageCount: 3,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Highlights critical deficiency of judicial officers (1 AD&SJ, 2 Civil Judges vacant), urgent need to expedite construction of Judicial Complex on acquired land, and lack of land revenue settlement causing decree execution blockades.',
    policyThemeIds: [1, 2, 6],
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'Volatile',
      specialCircumstance: 'Newly merged border district with incomplete civil revenue land settlement'
    }
  },
  {
    id: 'bannu',
    name: 'Bannu',
    division: 'Bannu',
    isMergedDistrict: false,
    districtJudge: 'Muhammad Saeed Amjad',
    dispatchNo: '3449/D & SJ BANNU',
    submissionDate: '05-09-2026',
    fileType: 'PDF',
    fileName: 'Bannu_Submission.pdf',
    fileSize: '1.4 MB',
    pageCount: 3,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Requests urgent PKR 140 Million capital grant for physical and electronic security hardening (watchtowers, bomb-proof gates, jammers, FC deployment) and additional Civil Judges to relieve acute civil pendency (6,141 total cases, 600-714 per judge).',
    policyThemeIds: [4, 5],
    phone: '0928-9270057',
    fax: '0928-9270057',
    email: 'dsj_bannu@yahoo.com',
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'High Threat',
      specialCircumstance: 'High-threat border zone with inadequate perimeter defense and armed security shortfall'
    }
  },
  {
    id: 'battagram',
    name: 'Battagram',
    division: 'Hazara',
    isMergedDistrict: false,
    districtJudge: 'Mr. Azhar Ali',
    dispatchNo: '789/DSJ/BTG',
    submissionDate: '09-09-2026',
    fileType: 'PDF',
    fileName: 'Battagram_Submission.pdf',
    fileSize: '740 KB',
    pageCount: 1,
    screeningTier: 'Review',
    status: 'Scanned / Review Needed',
    summary: 'Submitted proforma with "Nill" indicated across all four fields. Categorized under Tier Review for immediate administrative inspection and data reconciliation by MIT-II.',
    policyThemeIds: [1]
  },
  {
    id: 'bunar',
    name: 'Buner',
    division: 'Malakand',
    isMergedDistrict: false,
    districtJudge: 'Naveed Ur Rahman (Zilla Qazi)',
    dispatchNo: '1120/DSJ/BNR',
    submissionDate: '07-09-2026',
    fileType: 'PDF',
    fileName: 'Buner_Submission.pdf',
    fileSize: '1.3 MB',
    pageCount: 3,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Identifies lack of Dar-ul-Aman/Women Crisis Center forcing vulnerable women to Swat, complete absence of detoxification facility and psychiatrist in Buner jail, and vacant Additional Sessions Judge post with pendency of ~1,200 cases.',
    policyThemeIds: [1, 8]
  },
  {
    id: 'charsadda',
    name: 'Charsadda',
    division: 'Peshawar',
    isMergedDistrict: false,
    districtJudge: 'Usman Bashir Khan',
    dispatchNo: 'No. 1696 / 1697',
    submissionDate: '09-09-2026',
    fileType: 'PDF',
    fileName: 'Charsadda_Submission.pdf',
    fileSize: '1.5 MB',
    pageCount: 2,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Proposes digital integration of district judiciary with Police, Health, NADRA, and Revenue for instant challan and record transmission; urges uniform High Court policy and mandatory training for CFMIS, E-Court, and E-Office.',
    policyThemeIds: [3, 6]
  },
  {
    id: 'd_i_khan',
    name: 'Dera Ismail Khan',
    division: 'D.I. Khan',
    isMergedDistrict: false,
    districtJudge: 'Khalid Khan Mohmand',
    dispatchNo: '2691/DSJ-JC',
    submissionDate: '07-09-2026',
    fileType: 'PDF',
    fileName: 'D_I_Khan_Submission.pdf',
    fileSize: '1.1 MB',
    pageCount: 2,
    screeningTier: 'Tier A',
    status: 'Consolidated Proforma',
    summary: 'Submits comprehensive 5-point proposal: judicial workload assessment, special Pre-Trial Judges, standardized IT connectivity, curbing procedural misuse of delays, and healthcare/educational welfare for judicial officers.',
    policyThemeIds: [1, 3, 6, 7],
    phone: '0966-9280228',
    email: 'dsjdikhan@gmail.com',
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'High Threat',
      specialCircumstance: 'Southern frontier hub with ongoing security sensitivity'
    }
  },
  {
    id: 'dir_lower',
    name: 'Dir Lower',
    division: 'Malakand',
    isMergedDistrict: false,
    districtJudge: 'Shakir Ullah Khan',
    dispatchNo: '4001/D&SJ-Dir Lower',
    submissionDate: '03-09-2026',
    fileType: 'PDF',
    fileName: 'Dir_Lower_Submission.pdf',
    fileSize: '1.2 MB',
    pageCount: 2,
    screeningTier: 'Tier A',
    status: 'Consolidated Proforma',
    summary: 'Proposes creation of independent Judicial Security Force, legislative creation of a statutory Judicial Fund, dedicated Execution Wing, ending overlapping executive magistracy, and service structure with clear elevation pathways.',
    policyThemeIds: [1, 4, 5, 6],
    phone: '0945-920039',
    fax: '0945-920025',
    email: 'dsjdirtmg@gmail.com'
  },
  {
    id: 'dir_upper',
    name: 'Dir Upper',
    division: 'Malakand',
    isMergedDistrict: false,
    districtJudge: 'Syed Aqeel Ajiz (Zilla Qazi)',
    dispatchNo: '621/DSJ/DRU',
    submissionDate: '07-09-2026',
    fileType: 'PDF',
    fileName: 'Dir_Upper_Submission.pdf',
    fileSize: '1.6 MB',
    pageCount: 4,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Addresses judicial vacancies against rising institution rates, inadequate courtrooms and judicial residences, and calls for mandatory continuing judicial education at KP Judicial Academy.',
    policyThemeIds: [1, 2, 4]
  },
  {
    id: 'hangu',
    name: 'Hangu',
    division: 'Kohat',
    isMergedDistrict: false,
    districtJudge: 'Arbab Sohail Hamid',
    dispatchNo: '1543/DSJ/HGU',
    submissionDate: '04-09-2026',
    fileType: 'PDF',
    fileName: 'Hangu_Submission.pdf',
    fileSize: '2.1 MB',
    pageCount: 6,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Five proformas: structured ADR referral with CFMIS tracking, High Court Research Wing precedent database & AI research pilot, Balanced Judicial Performance Framework, court-administration pilot to relieve judges, and comprehensive health insurance welfare scheme.',
    policyThemeIds: [1, 4, 7, 8],
    phone: '0925-622009',
    fax: '0925-622009',
    email: 'sessioncourthangu@yahoo.com'
  },
  {
    id: 'haripur',
    name: 'Haripur',
    division: 'Hazara',
    isMergedDistrict: false,
    districtJudge: 'Asghar Shah Khilji',
    dispatchNo: '11206-3/21/HCJ/DSJ/Haripur',
    submissionDate: '02-09-2026',
    fileType: 'PDF',
    fileName: 'Haripur_Submission.pdf',
    fileSize: '950 KB',
    pageCount: 2,
    screeningTier: 'Tier A',
    status: 'Complete Submission',
    summary: 'Targets trial delays caused by senior lawyers handling excessive dockets, calls for firm/company practice, and urges High Court directives declaring strikes over non-judicial matters as professional misconduct.',
    policyThemeIds: [4, 8],
    phone: '+92-995-920500',
    fax: '+92-995-920501',
    email: 'dsjharipur@gmail.com',
    web: 'districtcourtsharipur.net.pk'
  },
  {
    id: 'karak',
    name: 'Karak',
    division: 'Kohat',
    isMergedDistrict: false,
    districtJudge: 'Ms. Sadia Arshad',
    dispatchNo: '1842/DSJ/KRK',
    submissionDate: '10-09-2026',
    fileType: 'PDF',
    fileName: 'Karak_Submission.pdf',
    fileSize: '2.4 MB',
    pageCount: 6,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Urgent security reinforcement for courts in southern KP (police/FC deployment), clear demarcation of assets and land between Bench and Bar, and creation of dedicated technical IT posts to protect courtroom computer operators.',
    policyThemeIds: [3, 5, 8],
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'High Threat',
      specialCircumstance: 'Southern KP district facing terrorism threats with fully committed police strength'
    }
  },
  {
    id: 'khyber',
    name: 'Khyber',
    division: 'Merged Districts',
    isMergedDistrict: true,
    districtJudge: 'Syed Obaidullah Shah',
    dispatchNo: '881/DSJ',
    submissionDate: '07-09-2026',
    fileType: 'PDF',
    fileName: 'Khyber_Submission.pdf',
    fileSize: '1.7 MB',
    pageCount: 5,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Urges expedited construction of 150-Kanal Judicial Complex (100 Kanals complex, 50 Kanals residences) following site inspection report, and sanctioning/filling of 2 AD&SJs, 1 Senior Civil Judge, and 3 Civil Judges.',
    policyThemeIds: [1, 2],
    phone: '091-5820748',
    email: 'dsjkhyber@gmail.com',
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'Volatile',
      specialCircumstance: 'Merged tribal district along transit route with extensive CTD police station litigation'
    }
  },
  {
    id: 'kohat',
    name: 'Kohat',
    division: 'Kohat',
    isMergedDistrict: false,
    districtJudge: 'Ms. Sofia Waqar Khattak',
    dispatchNo: '2311/DSJ/KHT',
    submissionDate: '08-09-2026',
    fileType: 'PDF',
    fileName: 'Kohat_Submission.pdf',
    fileSize: '1.8 MB',
    pageCount: 4,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Critiques piecemeal Finance Department NOCs for ministerial posts, seeks delegation of passport/visa NOCs to DSJ, highlights severe prosecutor deficit (only 5 prosecutors for 15 criminal courts), and requests uniform security policy.',
    policyThemeIds: [1, 5, 6]
  },
  {
    id: 'kohistan_lower',
    name: 'Kohistan Lower',
    division: 'Hazara',
    isMergedDistrict: false,
    districtJudge: 'Mohammad Khan Yousafzai',
    dispatchNo: '412/DSJ/KHL',
    submissionDate: '07-09-2026',
    fileType: 'PDF',
    fileName: 'Kohistan_Lower_Submission.pdf',
    fileSize: '1.5 MB',
    pageCount: 4,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Reports critical court support staff shortages (Computer Operators, Nazir, Bailiffs, driver for SCJ), unstable internet with off-district service provider, and absence of residential quarters for Senior Civil Judge in Pattan complex.',
    policyThemeIds: [1, 2, 3],
    phone: '0998-405090',
    fax: '0998-405090',
    email: 'dsj.kohistan.l@gmail.com'
  },
  {
    id: 'kohistan_upper',
    name: 'Kohistan Upper',
    division: 'Hazara',
    isMergedDistrict: false,
    districtJudge: 'Kamran Hayat Miankhel',
    dispatchNo: 'No. 581/DSJ/KHU',
    submissionDate: '08-09-2026',
    fileType: 'DOCX',
    fileName: 'Kohistan_Upper_Submission.docx',
    fileSize: '890 KB',
    pageCount: 4,
    screeningTier: 'Tier B',
    status: 'DOCX Original',
    summary: 'Original DOCX submission detailing extreme logistical hurdles from Dasu Dam construction, KKH highway blockades, winter isolation, and influx of massive Land Acquisition Act compensation reference cases.',
    policyThemeIds: [2, 4, 7],
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'Isolated',
      specialCircumstance: 'High-altitude Karakoram corridor with mega-dam submergence and seasonal access cutoffs'
    }
  },
  {
    id: 'kolai_palas',
    name: 'Kolai-Palas Kohistan',
    division: 'Hazara',
    isMergedDistrict: false,
    districtJudge: 'Muhammad Zaib Khan',
    dispatchNo: '319/DSJ/KPK',
    submissionDate: '03-09-2026',
    fileType: 'PDF',
    fileName: 'Kolai_Palas_Submission.pdf',
    fileSize: '980 KB',
    pageCount: 2,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'District Judiciary operating completely outside district borders at Tehsil Besham (District Shangla) due to zero infrastructure at designated location; also requests annual budget release by March rather than June.',
    policyThemeIds: [2]
  },
  {
    id: 'kurram',
    name: 'Kurram',
    division: 'Merged Districts',
    isMergedDistrict: true,
    districtJudge: 'Mr. Amjad Hussain',
    dispatchNo: '912/DSJ/KRM',
    submissionDate: '07-09-2026',
    fileType: 'PDF',
    fileName: 'Kurram_Submission.pdf',
    fileSize: '820 KB',
    pageCount: 1,
    screeningTier: 'Tier B',
    status: 'Consolidated Proforma',
    summary: 'Requests urgent filling of vacant judges, specialized courts, capacity building, administrative judges, and streamlining repetitive data reporting requests through a single monthly proforma.',
    policyThemeIds: [1],
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'High Threat',
      specialCircumstance: 'Merged district with sectarian sensitivities and frequent transit route closures'
    }
  },
  {
    id: 'lakki_marwat',
    name: 'Lakki Marwat',
    division: 'Bannu',
    isMergedDistrict: false,
    districtJudge: 'Abdul Baseer',
    dispatchNo: '1871 /DSJLK/Admin',
    submissionDate: '04-09-2026',
    fileType: 'PDF',
    fileName: 'Lakki_Marwat_Submission.pdf',
    fileSize: '2.5 MB',
    pageCount: 6,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Five institutional proformas: ADP funding for executing land decrees against government, district-level FSL for CNSA 4-day testing rule, court interpreters for hearing/speech impaired, psychologists for Family/GBV cases, and government-backed bail surety mechanism to defeat touts.',
    policyThemeIds: [4, 6, 8],
    phone: '0969-538150',
    fax: '0969-538152',
    email: 'dsjllakkimarwat@gmail.com',
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'High Threat',
      specialCircumstance: 'Southern volatile district with serious law-and-order exposure'
    }
  },
  {
    id: 'lower_chitral',
    name: 'Lower Chitral',
    division: 'Malakand',
    isMergedDistrict: false,
    districtJudge: 'Ms. Shahnaz Hameed Khattak',
    dispatchNo: '1355/DSJ/CTL',
    submissionDate: '09-09-2026',
    fileType: 'PDF',
    fileName: 'Lower_Chitral_Submission.pdf',
    fileSize: '2.3 MB',
    pageCount: 6,
    screeningTier: 'Tier A',
    status: 'Complete Submission',
    summary: 'Six high-impact proposals under Art. 175(3): creation of dedicated P&D Engineering Wing under PHC, independent Judicial Executory Force, virtual court points to eliminate counsel travel delays, remote e-filing kiosks, role-based E-ACR portal, and qualifying exam for Moharrir promotions.',
    policyThemeIds: [1, 2, 3, 4],
    phone: '0943-412533',
    fax: '0943-413498',
    email: 'dsjctl@gmail.com',
    web: 'districtcourtschitral.gov.pk'
  },
  {
    id: 'malakand',
    name: 'Malakand at Batkhela',
    division: 'Malakand',
    isMergedDistrict: false,
    districtJudge: 'Iftikhar Elahi (Zilla Qazi)',
    dispatchNo: '2116 DSJ(MKD)',
    submissionDate: '05-09-2026',
    fileType: 'PDF',
    fileName: 'Malakand_Submission.pdf',
    fileSize: '1.2 MB',
    pageCount: 2,
    screeningTier: 'Tier A',
    status: 'Consolidated Proforma',
    summary: 'Replaces raw disposal quotas with workload-adjusted metrics, demands 2-week minimum notice for transfers, High Court regulation of Bar strikes, regulatory boundaries for staff association (APJEA), and construction of residential suites on available land.',
    policyThemeIds: [2, 4, 8]
  },
  {
    id: 'mansehra',
    name: 'Mansehra',
    division: 'Hazara',
    isMergedDistrict: false,
    districtJudge: 'Arbab Aziz Ahmed',
    dispatchNo: '7401 /D&SJ/(MA)',
    submissionDate: '05-09-2026',
    fileType: 'PDF',
    fileName: 'Mansehra_Submission.pdf',
    fileSize: '1.6 MB',
    pageCount: 4,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Proposes time-bound mechanism and escalation ladder for release of judicial funds, centralized uniform recruitment policy for district staff, and establishment of dedicated High Court Engineering Wing to replace C&W.',
    policyThemeIds: [1, 2],
    phone: '0997-301848',
    fax: '0997301848',
    email: 'sessionscourt_mansehra@yahoo.com'
  },
  {
    id: 'mardan',
    name: 'Mardan',
    division: 'Mardan',
    isMergedDistrict: false,
    districtJudge: 'Ashfaque Taj',
    dispatchNo: '2844/DSJ/MRD',
    submissionDate: '09-09-2026',
    fileType: 'PDF',
    fileName: 'Mardan_Submission.pdf',
    fileSize: '2.9 MB',
    pageCount: 6,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Comprehensive 3-part proforma: unified Judicial Complex to consolidate courts scattered across 5 flooded premises; 14 technical digital reforms (automated Tehsil sync, E-Release to prisons, read-only SDC revenue integration, PTCL SLA); and clearance of PKR 18.684 Billion in unpaid land acquisition decrees.',
    policyThemeIds: [2, 3, 4]
  },
  {
    id: 'mohmand',
    name: 'Mohmand',
    division: 'Merged Districts',
    isMergedDistrict: true,
    districtJudge: 'Suhail Sheraz Noor Saani',
    dispatchNo: '627 /DSJ, Mohmand',
    submissionDate: '05-09-2026',
    fileType: 'PDF',
    fileName: 'Mohmand_Submission.pdf',
    fileSize: '1.9 MB',
    pageCount: 5,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Lack of fiber optic and PTCL office halting online systems; absence of revenue record cell in merged district; down-district advocates operating on fixed days causing delay; and lack of Woman Medical Officer (WMO) at DHQ Hospital Ghallanai for autopsies.',
    policyThemeIds: [3, 4, 6],
    phone: '0924-290133',
    email: 'dsjmohmand@gmail.com',
    web: 'districtjudiciarymohmand.gov.pk',
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'Volatile',
      specialCircumstance: 'Merged district with telecommunication deficits and missing medico-legal services'
    }
  },
  {
    id: 'north_waziristan',
    name: 'North Waziristan',
    division: 'Merged Districts',
    isMergedDistrict: true,
    districtJudge: 'Shaukat Ali',
    dispatchNo: '751/DSJ/NWA',
    submissionDate: '08-09-2026',
    fileType: 'PDF',
    fileName: 'North_Waziristan_Submission.pdf',
    fileSize: '1.3 MB',
    pageCount: 3,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Delays in taking over physical possession of acquired Judicial Complex land at Miranshah, blanket ban on construction and repair works, and restriction on construction due to pending NOC from Seven Division Miranshah.',
    policyThemeIds: [2, 5],
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'High Threat',
      specialCircumstance: 'Active conflict and security cordon zone requiring military Seven Division clearances'
    }
  },
  {
    id: 'nowshera',
    name: 'Nowshera',
    division: 'Peshawar',
    isMergedDistrict: false,
    districtJudge: 'Muhammad Adil Khan',
    dispatchNo: '5401 - 1/1',
    submissionDate: '08-09-2026',
    fileType: 'PDF',
    fileName: 'Nowshera_Submission.pdf',
    fileSize: '2.6 MB',
    pageCount: 6,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Severe residential deficit (only 11 residences for 28 judges), mismatch between calendar ACR and judicial year, ceiling on court premises allocated to Bar chambers, specialized ACR form for judicial officers, and unpaid government land decrees.',
    policyThemeIds: [2, 4, 7, 8],
    phone: '+929239220106',
    fax: '+929239220241',
    email: 'dsjnowshera@yahoo.com',
    web: 'districtcourtsnowshera.gov.pk'
  },
  {
    id: 'orakzai',
    name: 'Orakzai',
    division: 'Merged Districts',
    isMergedDistrict: true,
    districtJudge: 'Haq Nawaz',
    dispatchNo: '653 /DSJ/ORK',
    submissionDate: '05-09-2026',
    fileType: 'PDF',
    fileName: 'Orakzai_Submission.pdf',
    fileSize: '2.2 MB',
    pageCount: 6,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Five critical submissions: closure of Shahoo access road to Ghiljo; lack of land revenue records in merged district; substandard construction and demolition order at Tehsil Judicial Complex Ghiljo; posting of AD&SJ at Kalaya (80-90 km away); and acute space shortage in shared Baber Mela building.',
    policyThemeIds: [1, 2, 5, 6],
    phone: '0925-690320',
    fax: '0925-690320',
    email: 'dsjorakzai@gmail.com',
    web: 'districtcourtsorakzai.gov.pk',
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'High Threat',
      specialCircumstance: 'Volatile merged mountainous territory with road closures and hostile terrain'
    }
  },
  {
    id: 'peshawar',
    name: 'Peshawar',
    division: 'Peshawar',
    isMergedDistrict: false,
    districtJudge: 'Muhammad Asif-II',
    dispatchNo: '3455',
    submissionDate: '04-09-2026',
    fileType: 'PDF',
    fileName: 'Peshawar_Submission.pdf',
    fileSize: '1.7 MB',
    pageCount: 4,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Mitigating disruption caused by transferring judicial officers without immediate replacements; Special Judicial Allowance for staff to curb rapid attrition; and replacing rigid August/December court vacations with flexible entitlement rosters.',
    policyThemeIds: [1, 4, 7],
    phone: '#091-9210099',
    fax: '#091-9212419',
    email: 'scPeshawar@yahoo.com',
    web: 'SessionsCourtPeshawar.gov.pk'
  },
  {
    id: 'shangla',
    name: 'Shangla',
    division: 'Malakand',
    isMergedDistrict: false,
    districtJudge: 'Mamrez Khan Khalil (Zilla Qazi)',
    dispatchNo: '2100 D&SJ/ZQ (SH)',
    submissionDate: '07-09-2026',
    fileType: 'PDF',
    fileName: 'Shangla_Submission.pdf',
    fileSize: '910 KB',
    pageCount: 2,
    screeningTier: 'Tier B',
    status: 'Complete Submission',
    summary: 'Absence of purpose-built Judicial Complex at Alpurai; urges inclusion in ADP or formal revenue transfer of currently occupied building to District Judiciary.',
    policyThemeIds: [2],
    phone: '0996-850001',
    fax: '0996-851001',
    email: 'dsjshangla1@gmail.com'
  },
  {
    id: 'south_waziristan',
    name: 'South Waziristan',
    division: 'Merged Districts',
    isMergedDistrict: true,
    districtJudge: 'Mr. Ali Gohar',
    dispatchNo: '811/DSJ/SW',
    submissionDate: '08-09-2026',
    fileType: 'PDF',
    fileName: 'South_Waziristan_Submission.pdf',
    fileSize: '2.1 MB',
    pageCount: 5,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Reports February 2026 drone attack on Sessions Judge residence; dependence on intermittent military ROD (~1 in 10 days); urges 6-month hard station tenure limit and hardship allowance; reports extreme workload from carrying uncompensated dual charge of Lower Waziristan (60% of cases).',
    policyThemeIds: [1, 5, 7],
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'High Threat',
      specialCircumstance: 'Targeted drone strike in Feb 2026, military convoy dependency, and cross-border militancy'
    }
  },
  {
    id: 'swabi',
    name: 'Swabi',
    division: 'Mardan',
    isMergedDistrict: false,
    districtJudge: 'Inam Ullah Wazir',
    dispatchNo: '1612/DSJ/SWB',
    submissionDate: '07-09-2026',
    fileType: 'PDF',
    fileName: 'Swabi_Submission.pdf',
    fileSize: '1.5 MB',
    pageCount: 3,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Invokes Section 122 CPC rule-making power to mandate: (1) province-wide digitized process-serving agency, (2) codified rules elevating Institution Branches with law-qualified heads, and (3) dedicated High Court Rules & Orders Chapter for CFMIS.',
    policyThemeIds: [3]
  },
  {
    id: 'swat',
    name: 'Swat',
    division: 'Malakand',
    isMergedDistrict: false,
    districtJudge: 'Asad Hameed Khan',
    dispatchNo: '2411/DSJ/SWT',
    submissionDate: '08-09-2026',
    fileType: 'PDF',
    fileName: 'Swat_Submission.pdf',
    fileSize: '2.7 MB',
    pageCount: 5,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Five strategic submissions: District Risk & Load Index (DRLI) for weighted evaluations; Time-Scale Promotion (BS-21/22) for long-serving judges; restricting judgment evaluation exclusively to DSJ; operationalizing Child Observation Homes and female mental shelters under JJSA 2018; and Codes of Conduct for APJEA staff union and Bar.',
    policyThemeIds: [1, 4, 8]
  },
  {
    id: 'tank',
    name: 'Tank',
    division: 'D.I. Khan',
    isMergedDistrict: false,
    districtJudge: 'Liaqat Ali',
    dispatchNo: '4223 /DSJ',
    submissionDate: '09-09-2026',
    fileType: 'PDF',
    fileName: 'Tank_Submission.pdf',
    fileSize: '2.8 MB',
    pageCount: 7,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Strict enforcement of 1-year hard station tenure (citing SCJ entering 3rd year); monthly hard-area allowance of Rs. 100,000/-; and formal permission for conducting court proceedings online when stranded outside district due to delayed military Road Opening Days (ROD).',
    policyThemeIds: [5, 7],
    phone: '# 0963-510024',
    fax: '#0963-510515',
    email: 'dsjtank@gmail.com',
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'High Threat',
      specialCircumstance: 'Extreme southern hard station with intermittent military ROD and acute security perils'
    }
  },
  {
    id: 'torghar',
    name: 'Torghar at Oghi',
    division: 'Hazara',
    isMergedDistrict: false,
    districtJudge: 'Nadeem Muhammad',
    dispatchNo: '840/DSJ/TRG',
    submissionDate: '06-09-2026',
    fileType: 'PDF',
    fileName: 'Torghar_Submission.pdf',
    fileSize: '1.4 MB',
    pageCount: 3,
    screeningTier: 'Tier A',
    status: 'Multiple Annexures',
    summary: 'Prescribes maximum tenure and rotation for ministerial staff to prevent undue familiarity; requests declaration of Tehsil Oghi as Winter Station; and categorizing Oghi as Hard Station comparable to Battagram.',
    policyThemeIds: [1, 7]
  },
  {
    id: 'upper_chitral',
    name: 'Upper Chitral',
    division: 'Malakand',
    isMergedDistrict: false,
    districtJudge: 'Mian Mahmood (Zilla Qazi)',
    dispatchNo: '641 /DSJ/ZQ/UCTL',
    submissionDate: '03-09-2026',
    fileType: 'PDF',
    fileName: 'Upper_Chitral_Submission.pdf',
    fileSize: '1.8 MB',
    pageCount: 4,
    screeningTier: 'Tier B',
    status: 'Multiple Annexures',
    summary: 'Enhancement of leave entitlement from 2 days to 4 days per month due to 12-16 hour travel times across mountain passes to home districts; and expansion of joining time from 7 to at least 14 days.',
    policyThemeIds: [7],
    phone: '0943-470316',
    fax: '0943-470316',
    email: 'dsjuchitral@gmail.com',
    securityProfile: {
      isVulnerableZone: true,
      threatTier: 'Isolated',
      specialCircumstance: 'Remote high-altitude northern station requiring multi-hour passes and severe winter cutoffs'
    }
  }
];

// Helper to construct simulated high-fidelity document pages for each district
function buildDocumentPages(meta: DistrictMeta): DocumentPage[] {
  const pages: DocumentPage[] = [];
  const issuesForDistrict = allDistrictIssues.filter(i => i.districtId === meta.id);

  // Page 1: Official Covering Letter / Dispatch Notice
  pages.push({
    pageNumber: 1,
    title: `OFFICIAL DISPATCH — ${meta.name.toUpperCase()}`,
    headerText: `OFFICE OF THE DISTRICT & SESSIONS JUDGE / ZILLA QAZI, ${meta.name.toUpperCase()}`,
    subHeaderText: `PESHAWAR HIGH COURT SUBMISSION — SESSIONS JUDGES CONFERENCE 2026`,
    sections: [
      {
        heading: 'DISPATCH PARTICULARS & REGISTRATION',
        content: `Dispatch No: ${meta.dispatchNo} | Dated: ${meta.submissionDate}\nAddressed To: The Additional Member Inspection Team-II (AMIT-II) / The Worthy Registrar, Peshawar High Court, Peshawar.\nSubject: SESSIONS JUDGES CONFERENCE, 2026 — SUBMISSION OF INSTITUTIONAL ISSUES REQUIRING POLICY INTERVENTION AND PROPOSED WORKABLE SOLUTIONS.`
      },
      {
        heading: 'OFFICIAL TRANSMISSION MEMORANDUM',
        content: `With reference to letter No. 73/AMIT-II dated 02/09/2026 on the subject cited above, it is respectfully submitted that in compliance with the directions of the Hon’ble Chief Justice, Peshawar High Court, Peshawar, the institutional issues requiring policy-level intervention along with proposed workable solutions from District Judiciary ${meta.name} are submitted herewith on the prescribed proformas.\n\nSigned hard copies are submitted for kind perusal and placement before the Hon’ble Chief Justice Mr. Justice S. M. Attique Shah at the upcoming Sessions Judges Conference. Soft copies in editable format have also been emailed to phcpsh@gmail.com and info@peshawarhighcourt.gov.pk.`
      },
      {
        heading: 'OFFICE CONTACT & REGISTRY DETAILS',
        content: `Official Telephone: ${meta.phone || '091-9210099'} | Fax: ${meta.fax || '091-9212419'} | Official Email: ${meta.email || `dsj_${meta.id}@peshawarhighcourt.gov.pk`}`
      }
    ],
    signatory: {
      name: meta.districtJudge,
      designation: meta.name.includes('Zilla Qazi') ? 'District & Sessions Judge / Zilla Qazi' : 'District & Sessions Judge',
      district: meta.name,
      date: meta.submissionDate
    }
  });

  // Pages for each issue
  issuesForDistrict.forEach((issue, idx) => {
    const pageNum = idx + 2;
    pages.push({
      pageNumber: pageNum,
      title: `${issue.proformaType} — ${issue.issueNumber}`,
      headerText: 'ANNEXURE-A: PROFORMA FOR ISSUES REQUIRING POLICY INTERVENTION BY PESHAWAR HIGH COURT',
      subHeaderText: `District: ${meta.name} | Presiding Judge: ${meta.districtJudge} | Priority: ${issue.priority}`,
      sections: [
        {
          heading: '1. Problem Requiring Policy Intervention',
          content: issue.problem
        },
        {
          heading: '2. Institutional Impact / Why High Court Intervention is Required',
          content: issue.institutionalImpact
        },
        {
          heading: '3. Proposed Solution / Suggestion',
          content: issue.proposedSolution
        },
        {
          heading: '4. Precise Intervention / Decision Sought from Peshawar High Court',
          content: issue.preciseIntervention
        }
      ],
      signatory: {
        name: meta.districtJudge,
        designation: 'District & Sessions Judge',
        district: meta.name,
        date: meta.submissionDate
      }
    });
  });

  // If Mardan, add page with supporting table
  if (meta.id === 'mardan') {
    pages.push({
      pageNumber: 6,
      title: 'Supporting Data: Outstanding Land Acquisition Compensation Liabilities in Mardan',
      headerText: 'ANNEXURE-A (SUPPORTING DATA TABLE): REFEREE COURT MARDAN',
      subHeaderText: 'Outstanding Land Liabilities Under Land Acquisition Act, 1894',
      sections: [
        {
          heading: 'DECRETAL LIABILITY SUMMARY BY SCHEME / DEPARTMENT',
          content: 'The following statement reflects the un-liquidated decretal awards pending execution in Referee Court Mardan, accumulating interest at the statutory rate of 6% per annum:',
          table: {
            headers: ['S.No.', 'Name of Acquiring Department / Scheme', 'Outstanding Amount (PKR)', 'Category'],
            rows: [
              ['1', 'AWKUM Mardan (Award No. 57/4 dated 20/07/2010)', 'Rs. 8,805,645,861/-', '8.805 Billion'],
              ['2', 'Agriculture University Mardan (Award No. 59/4 dated 28/09/2010)', 'Rs. 5,947,167,185/-', '5.947 Billion'],
              ['3', 'Bacha Khan Medical College (Award No. 96/4 dated 10/10/2010)', 'Rs. 2,113,434,257/-', '2.113 Billion'],
              ['4', 'Swat Expressway Miscellaneous Award', 'Rs. 1,503,873,500/-', '1.504 Billion'],
              ['5', 'TMA Mardan Misc Award (Awards 117/4, 119/4, 123/4 dated 2012)', 'Rs. 155,790,000/-', '155.79 Million'],
              ['6', 'C & W Department Miscellaneous Award (Award 317/4 dated 2020)', 'Rs. 60,580,000/-', '60.58 Million'],
              ['7', 'Police Department Misc Award (152, 155, 158 dated 2012)', 'Rs. 48,780,300/-', '48.78 Million'],
              ['8', 'Health Department Award (Award No. 90/4)', 'Rs. 39,870,500/-', '39.87 Million'],
              ['9', 'Commerce College Award (Award No. 120/4)', 'Rs. 9,850,000/-', '9.85 Million'],
              ['TOTAL', 'Estimated Total Outstanding Base Liability (Approximate)', 'Rs. 18,684,000,000/-', '18.684 Billion Base']
            ]
          }
        }
      ],
      signatory: {
        name: meta.districtJudge,
        designation: 'District & Sessions Judge',
        district: meta.name,
        date: meta.submissionDate
      }
    });
  }

  // Ensure total pages matches meta.pageCount
  while (pages.length < meta.pageCount) {
    pages.push({
      pageNumber: pages.length + 1,
      title: `Submission Document Continuation Sheet - Page ${pages.length + 1}`,
      headerText: `DISTRICT JUDICIARY ${meta.name.toUpperCase()} — RECORD SHEET`,
      sections: [
        {
          heading: 'Verbatim Official Proforma Continuation',
          content: `Continuation of verified proforma records for District Judiciary ${meta.name}. Preserved under the PUC archive for the Sessions Judges Conference 2026 under the auspices of Hon’ble Chief Justice Mr. Justice S. M. Attique Shah.`
        }
      ],
      signatory: {
        name: meta.districtJudge,
        designation: 'District & Sessions Judge',
        district: meta.name,
        date: meta.submissionDate
      }
    });
  }

  return pages;
}

// Full district objects compilation
export const districtsData: District[] = rawDistricts.map(meta => {
  const issues = allDistrictIssues.filter(i => i.districtId === meta.id);
  const pages = buildDocumentPages(meta);

  const document: SubmissionDocument = {
    districtId: meta.id,
    districtName: meta.name,
    fileName: meta.fileName,
    fileType: meta.fileType,
    fileSize: meta.fileSize,
    totalPages: meta.pageCount,
    date: meta.submissionDate,
    dispatchNo: meta.dispatchNo,
    issuingJudge: meta.districtJudge,
    designation: 'District & Sessions Judge',
    contactInfo: {
      phone: meta.phone,
      fax: meta.fax,
      email: meta.email,
      web: meta.web
    },
    pages
  };

  return {
    id: meta.id,
    name: meta.name,
    division: meta.division,
    isMergedDistrict: meta.isMergedDistrict,
    districtJudge: meta.districtJudge,
    dispatchNo: meta.dispatchNo,
    submissionDate: meta.submissionDate,
    fileType: meta.fileType,
    fileName: meta.fileName,
    fileSize: meta.fileSize,
    pageCount: meta.pageCount,
    screeningTier: meta.screeningTier,
    issueCount: issues.length,
    summary: meta.summary,
    status: meta.status,
    policyThemeIds: meta.policyThemeIds,
    issues,
    document,
    securityProfile: meta.securityProfile
  };
});

// Re-export all district issues
export { allDistrictIssues };

// 8 Master Policy Themes
export const policyThemes: PolicyTheme[] = [
  {
    id: 1,
    title: 'Judicial Human Resources, Vacancies & Cadre Management',
    shortTitle: 'Human Resources & Cadres',
    description: 'Acute deficit in court ministerial, stenographic, process serving, and IT posts across district judiciaries. Crippling delays in Finance Dept SNE sanctions, staff attrition to high-paying departments, judicial officer vacancies accumulating pendency, and absence of standardized service promotion structures.',
    districtsCount: 16,
    participatingDistricts: ['Abbottabad', 'Bajaur', 'Bannu', 'Buner', 'Charsadda', 'D.I. Khan', 'Haripur', 'Khyber', 'Kohat', 'Kolai-Palas', 'Kurram', 'Lower Kohistan', 'Malakand', 'Peshawar', 'Swabi', 'Upper Dir'],
    keyHighlights: [
      'Chronic delays in Finance Department sanctioning Schedule of New Expenditure (SNE) for newly created courts.',
      'Severe attrition of skilled IT personnel and stenographers to federal and provincial executive bodies.',
      'Judicial officer vacancies in merged and frontier districts causing severe docket accumulation.'
    ],
    proposedSolutions: [
      'Institutional fast-track protocol between PHC and Provincial Finance Department for automatic SNE release within 45 days of court notification.',
      'Introduction of time-scale promotion rules and Judicial Technical Cadre Allowance to arrest ministerial and stenographic attrition.',
      'Proactive judicial officer reserve pool to maintain 100% bench occupancy across high-pendency divisions.'
    ]
  },
  {
    id: 2,
    title: 'Court Infrastructure, Unified Complexes & Land Allocation',
    shortTitle: 'Infrastructure & Complexes',
    description: 'Severely fragmented, dilapidated, or un-owned court infrastructure. Multiple districts operate out of rented, flood-prone, or geographically displaced premises, with administrative delays in land acquisition, C&W execution, and security fortification.',
    districtsCount: 14,
    participatingDistricts: ['Chitral Lower', 'Chitral Upper', 'Hangu', 'Karak', 'Kohistan Upper', 'Kolai-Palas', 'Kurram', 'Mardan', 'North Waziristan', 'Orakzai', 'Shangla', 'South Waziristan', 'Tank', 'Torghar'],
    keyHighlights: [
      'Referee Court Mardan and judicial branches operating across 5 scattered premises, creating logistical bottlenecks and flood vulnerability.',
      'Kolai-Palas district courts operating completely outside territorial jurisdiction in Shangla district.',
      'North Waziristan land possession and construction stalled due to inter-departmental security clearances.',
      'Upper Kohistan complex displaced by Dasu Hydropower Dam reservoir construction.'
    ],
    proposedSolutions: [
      'Establishment of an Autonomous High Court Engineering & Infrastructure Monitoring Cell with delegated financial powers.',
      'Statutory priority acquisition mechanism for Judicial Complexes under emergency provisions of Land Acquisition Act.',
      'Time-bound transitional relocation plan for displaced and borderless courts (Kolai-Palas, North Waziristan, Upper Kohistan).'
    ]
  },
  {
    id: 3,
    title: 'Digital Systems, CFMIS, E-Release & Technological Integration',
    shortTitle: 'Digital Systems & CFMIS',
    description: 'Inconsistent adoption of Case Flow Management Information System (CFMIS), lack of statutory High Court Rules backing for electronic filing and summons, absence of inter-departmental API connectivity with Police and Prisons, and severe deficits in solar energy and high-speed bandwidth.',
    districtsCount: 12,
    participatingDistricts: ['Abbottabad', 'Charsadda', 'Haripur', 'Mansehra', 'Mardan', 'Nowshera', 'Peshawar', 'Swabi', 'Swat', 'Tank', 'Upper Dir', 'Upper Kohistan'],
    keyHighlights: [
      'Absence of statutory backing in High Court Rules & Orders for electronic process service, WhatsApp summons, and paperless filing.',
      'Successful Mardan E-Release pilot requires province-wide institutional scaling to eliminate prisoner transit hazards.',
      'Lack of automated API data exchange between Police (PSRMS), Prisons, and District CFMIS databases.'
    ],
    proposedSolutions: [
      'Exercise High Court rule-making powers under Section 122 CPC to enact a dedicated chapter on Electronic Proceedings and CFMIS.',
      'Provincial rollout of the Mardan E-Release Protocol across all 35 district judicial locks and central prisons.',
      'Deployment of hybrid solar micro-grids (10kVA - 30kVA) and dual redundant satellite/fiber links at all tehsil courts.'
    ]
  },
  {
    id: 4,
    title: 'Caseflow Management, Docket Liquidation & Execution of Decrees',
    shortTitle: 'Caseflow & Decrees',
    description: 'Skyrocketing case pendency driven by mechanical civil procedure, unregulated adjournment culture, non-appearance of official executive witnesses, and total paralysis in executing money decrees against government departments shielded by Section 82 CPC.',
    districtsCount: 15,
    participatingDistricts: ['Abbottabad', 'Bannu', 'Buner', 'Charsadda', 'D.I. Khan', 'Haripur', 'Kohat', 'Lakki Marwat', 'Malakand', 'Mansehra', 'Mardan', 'Nowshera', 'Peshawar', 'Swabi', 'Swat'],
    keyHighlights: [
      'PKR 18.684 Billion in unexecuted land compensation decrees in Mardan accumulating 6% annual compounding statutory interest.',
      'Total absence of institutional sanction mechanisms against defaulting provincial departments.',
      'Adjournment culture and non-appearance of investigating officers and chemical examiners stalling trial conclusion.'
    ],
    proposedSolutions: [
      'Enactment of the Lakki Marwat ADP At-Source Deduction Framework for judgment-debtor departments.',
      'Implementation of Differentiated Case Management (DCM) track systems (Expedited, Standard, Complex) statewide.',
      'High Court Practice Direction imposing mandatory cost recovery for unexcused executive and witness adjournments.'
    ]
  },
  {
    id: 5,
    title: 'Security, Mobility & Continuity of Justice in High-Risk Zones',
    shortTitle: 'Security & Continuity',
    description: 'Severe kinetic and aerial threats against judicial officers and court installations, especially in the southern belt and merged districts. Kinetic drone strike on Sessions Judge premises in South Waziristan, paralysis caused by military Road Opening Days (ROD), and acute lack of armored mobility.',
    districtsCount: 11,
    participatingDistricts: ['Bannu', 'D.I. Khan', 'Khyber', 'Kurram', 'Lakki Marwat', 'North Waziristan', 'Orakzai', 'Peshawar', 'South Waziristan', 'Tank', 'Torghar'],
    keyHighlights: [
      'February 2026 kinetic drone strike on Sessions Judge residence in South Waziristan (Tank headquarters).',
      'Judges in Tank and South Waziristan stranded due to military Road Opening Day (ROD) convoy schedules.',
      'Bannu District Courts facing critical shortfall of PKR 140 Million for perimeter hardening and bomb-proof barriers.'
    ],
    proposedSolutions: [
      'Formal High Court Standard Operating Procedure authorizing virtual court hearings during security blockades and canceled RODs.',
      'Creation of an elite, centralized High Court Judicial Protection Cadre with bulletproof transport in volatile zones.',
      'Immediate provincial grant allocation of PKR 140 Million for perimeter blast-proofing and electronic counter-measures in Bannu.'
    ]
  },
  {
    id: 6,
    title: 'Inter-Agency Coordination & Executive Stakeholder Accountability',
    shortTitle: 'Inter-Agency Coordination',
    description: 'Systemic inertia between the judiciary and executive branches, including late submission of police challans, chronic delays in FSL and chemical examination reports, non-production of under-trial prisoners, and revenue department non-compliance in land demarcation.',
    districtsCount: 13,
    participatingDistricts: ['Abbottabad', 'Charsadda', 'D.I. Khan', 'Hangu', 'Haripur', 'Karak', 'Kohat', 'Mardan', 'Nowshera', 'Peshawar', 'Swabi', 'Swat', 'Tank'],
    keyHighlights: [
      'FSL Peshawar report backlogs exceeding 6 to 9 months, halting bail and murder trial adjudications.',
      'Revenue field staff (Patwaris, Tehsildars) failing to execute court-ordered commissions and demarcations.',
      'Frequent failure of police escorts to produce under-trial prisoners on designated hearing dates.'
    ],
    proposedSolutions: [
      'Institutional High Court Service Level Agreement (SLA) with Home Department and Police establishing binding 14-day FSL timelines.',
      'Institutionalization of monthly District Criminal Justice Coordination Committees (CJCC) with statutory reporting to AMIT-II.',
      'Summary contempt protocol against revenue officers failing to complete judicial commissions within 30 days.'
    ]
  },
  {
    id: 7,
    title: 'Judicial Wellbeing, Terms of Service & Hard-Station Policy',
    shortTitle: 'Wellbeing & Hard Stations',
    description: 'Disproportionate hardships endured by judicial officers and court staff deployed in remote, hazardous, or merged districts. Absence of adequate residential facilities, lack of family medical coverage, uncompensated security risks, and arbitrary tenure durations.',
    districtsCount: 9,
    participatingDistricts: ['Bajaur', 'Chitral Lower', 'Chitral Upper', 'Kohistan Upper', 'Kolai-Palas', 'Kurram', 'North Waziristan', 'South Waziristan', 'Torghar'],
    keyHighlights: [
      'Judges stationed in harsh mountainous or merged districts separated from families with zero residential amenities.',
      'Lack of specialized medical emergency evacuation cover in snowbound and security-compromised locations.',
      'Absence of a defined Hard-Station Tenure Cap resulting in prolonged postings and judicial burnout.'
    ],
    proposedSolutions: [
      'Comprehensive Hard-Area Policy establishing a strict maximum 1-year tenure cap for designated high-hardship stations.',
      'Special Hardship & Risk Allowance benchmarked at 50% of basic pay for officers in frontier and merged jurisdictions.',
      'Immediate construction or leasing of fully furnished, secure official judicial residences at each remote station.'
    ]
  },
  {
    id: 8,
    title: 'Access to Justice, Vulnerable Litigants, Bar Relations & ADR',
    shortTitle: 'Access to Justice & ADR',
    description: 'Inadequate facilities for vulnerable court users (women, children, persons with disabilities), persistent strikes and aggressive boycotts by district bar associations, under-utilization of statutory Alternative Dispute Resolution (ADR) centers, and deficit in legal aid.',
    districtsCount: 10,
    participatingDistricts: ['Abbottabad', 'Bannu', 'Charsadda', 'Haripur', 'Karak', 'Kohat', 'Mansehra', 'Mardan', 'Peshawar', 'Swabi'],
    keyHighlights: [
      'Complete absence of dedicated waiting areas, daycare facilities, or gender-segregated sanitation in 60% of district courts.',
      'Frequent unannounced strikes by district and tehsil bar associations crippling judicial output and causing public dismay.',
      'ADR mediation centers under-resourced and lacking mandatory pre-trial referral mechanisms in civil and family litigation.'
    ],
    proposedSolutions: [
      'Mandatory pre-trial ADR mediation referral for commercial, partition, and family disputes with trained accredited mediators.',
      'Joint PHC-KP Bar Council Regulatory Code governing strike protocols and providing for emergency hearing exceptions.',
      'Immediate capital allocation for Model Child-Friendly Courts and dedicated Women Litigant Waiting Lounges across all districts.'
    ]
  }
];
