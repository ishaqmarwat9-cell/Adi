import { PolicyTheme } from '../types';

export const policyThemes: PolicyTheme[] = [
  {
    id: 1,
    title: 'Judicial Human Resources, Vacancies & Cadre Management',
    shortTitle: 'Human Resources & Cadres',
    icon: 'Users',
    description: 'Systemic shortage of Additional District & Sessions Judges and Civil Judges, stagnation in non-judicial cadres, lack of professional court administrators, legal research associates, and pending SNE financial sanctions.',
    affectedDistricts: ['abbottabad', 'bajaur', 'bannu', 'd_i_khan', 'dir_upper', 'khyber', 'kohistan_lower', 'kurram', 'peshawar', 'south_waziristan', 'swat', 'bunar', 'torghar'],
    recurringProblems: [
      'Chronic vacancies in sanctioned posts of Additional District & Sessions Judges and Civil Judges causing case accumulation.',
      'SNE (Schedule of New Expenditure) proposals pending clearance with the Provincial Finance Department for extended periods.',
      'Absence of specialized non-judicial support cadres (Court Administrators, Legal Research Associates, dedicated IT Managers), burdening judges with routine clerical tasks.',
      'Unscheduled transfers without immediate replacement resulting in case re-transfers and procedural delays.',
      'Lack of time-scale promotion and career progression structures for district judiciary officers and ministerial staff.'
    ],
    institutionalImpact: 'High judicial officer caseload directly compromises adjudicative speed, analytical depth of judgments, and creates administrative fatigue across district bars and benches.',
    practicalSolutions: [
      'Establish a high-level PHC-Finance Department Liaison Committee to fast-track pending SNE sanctions.',
      'Introduce specialized non-judicial cadres: Judicial Law Clerks/Research Associates and Professional Court Administrators.',
      'Implement an annual predictable recruitment and promotion calendar to minimize vacancy lag.',
      'Adopt Time-Scale Promotion (TSP) / personal grade enhancement structures (BPS-21/22) for long-serving judges.'
    ],
    proposedPHCInterventions: [
      'Administrative follow-up with the Chief Secretary and Finance Department for immediate clearance of pending district SNEs.',
      'Framing of structured Service Rules creating dedicated research, administrative, and technical wings within the subordinate judiciary.',
      'Notification of a revised Judicial Transfer & Posting Policy ensuring vacancy lead-times and minimal transfer disruption.'
    ],
    metrics: [
      { label: 'Districts Reporting HR Shortage', value: '18 / 35', subtext: 'Over 51% of district submissions' },
      { label: 'Key Vacant Tiers Reported', value: 'AD&SJ & CJ', subtext: 'Civil Judge dockets exceeding 700/court' },
      { label: 'Cadre Gap', value: 'Zero Dedicated Research Clerks', subtext: 'Judges handling clerical administration' }
    ],
    issueIds: ['ISU-ABT-01', 'ISU-BJR-01', 'ISU-BNU-02', 'ISU-BNR-03', 'ISU-DIK-01', 'ISU-DRU-01', 'ISU-KHB-02', 'ISU-KHL-01', 'ISU-KRM-01', 'ISU-KHT-01', 'ISU-PSH-01', 'ISU-PSH-02', 'ISU-SWT-02', 'ISU-SWA-03', 'ISU-TRG-01']
  },
  {
    id: 2,
    title: 'Court Infrastructure, Unified Complexes & Land Allocation',
    shortTitle: 'Infrastructure & Complexes',
    icon: 'Building2',
    description: 'Courts operating in scattered, rented, dilapidated or flood-damaged premises; absence of purpose-built Judicial Complexes, slow land acquisition, and heavy reliance on the provincial C&W Department.',
    affectedDistricts: ['mardan', 'bajaur', 'khyber', 'shangla', 'kolai_palas', 'orakzai', 'north_waziristan', 'kohistan_lower', 'dir_upper', 'nowshera', 'malakand', 'kohistan_upper'],
    recurringProblems: [
      'Courts scattered across multiple distant premises (e.g. Mardan operating across 5 separate locations including Town Hall and Khazana building).',
      'Districts operating without any permanent infrastructure at designated headquarters (e.g. Kolai-Palas functioning in Shangla/Besham; Shangla at Alpurai in administrative building).',
      'Inordinate delays, cost overruns, and sub-standard construction executed through the provincial C&W Department without judicial oversight.',
      'Severe shortages of official residential accommodation for judicial officers and visiting session house annexes.',
      'Lack of basic litigant amenities, clean drinking water, bar rooms, and child/female-friendly waiting spaces.'
    ],
    institutionalImpact: 'Fragmented court locations multiply security hazards, cause daily procedural adjournments due to counsel travel delays, and expose valuable judicial records to weather damage and water seepage.',
    practicalSolutions: [
      'Create a dedicated Planning & Development (P&D) Directorate of Works / Engineering Wing under direct Peshawar High Court control to supervise judicial projects.',
      'Prioritize land acquisition and ring-fenced ADP allocations for unified Judicial Complexes at Mardan, Khyber, Bajaur, Shangla, and North Waziristan.',
      'Establish uniform minimum infrastructure standards for courtrooms, judicial residences, and litigant facilities across all districts.'
    ],
    proposedPHCInterventions: [
      'Direct policy engagement with the Provincial Government to approve independent engineering and execution powers for the High Court.',
      'Immediate administrative directions to Deputy Commissioners for peaceful land handover and codal formalities in merged districts.',
      'Inclusion of pending Judicial Complex schemes in the priority Annual Development Programme (ADP).'
    ],
    metrics: [
      { label: 'Scattered Premises Impact', value: '5 Sites in Mardan', subtext: 'Record leakage & security exposure' },
      { label: 'Displaced Establishments', value: 'Kolai-Palas in Besham', subtext: 'Operating entirely outside parent district' },
      { label: 'Pending Judicial Complexes', value: '8 Districts', subtext: 'Land acquired or site plans submitted' }
    ],
    issueIds: ['ISU-MRD-01', 'ISU-BJR-02', 'ISU-KHB-01', 'ISU-SNG-01', 'ISU-KLP-01', 'ISU-ORK-03', 'ISU-NWA-01', 'ISU-NWA-02', 'ISU-KHL-03', 'ISU-DRU-03', 'ISU-NSH-01', 'ISU-MLK-03', 'ISU-MAN-03', 'ISU-KHU-01']
  },
  {
    id: 3,
    title: 'Digital Systems, CFMIS, E-Release & Technological Integration',
    shortTitle: 'Digital Systems & CFMIS',
    icon: 'Cpu',
    description: 'Technical constraints in CFMIS, lack of statutory backing under Section 122 CPC, absence of automated Tehsil-HQ data synchronization, lack of E-Release integration with prisons, and fragile internet connectivity.',
    affectedDistricts: ['mardan', 'swabi', 'charsadda', 'karak', 'kohistan_lower', 'mohmand', 'lower_chitral', 'hangu'],
    recurringProblems: [
      'CFMIS lacks a codified chapter in the Peshawar High Court Rules & Orders under Section 122 CPC, leading to ad-hoc practices.',
      'Scanned case data and PDF records from Tehsil Courts do not automatically synchronize with District Headquarters.',
      'Absence of duplicate-case detection in Institution Branches resulting in parallel case numbers on identical filings.',
      'Bail and release orders are hand-carried to prisons physically due to lack of a secure E-Release system, delaying lawful releases.',
      'Frequent disconnection of judicial internet links due to decentralized PTCL billing and lack of corporate SLAs.',
      'Court computer operators diverted to specialized IT maintenance instead of court duties due to lack of sanctioned IT posts.'
    ],
    institutionalImpact: 'Unreliable digital systems force district courts back into sluggish manual procedures, compromise data integrity for provincial monitoring, and create unnecessary hurdles for litigants seeking online case records.',
    practicalSolutions: [
      'Frame and notify a dedicated Chapter in High Court Rules & Orders governing CFMIS, E-Court, and digital processes under Section 122 CPC.',
      'Transition CFMIS from desktop architecture to a centralized, cloud-synchronized web-based enterprise platform.',
      'Deploy an automated E-Release module with QR-code verification and audit trails between courts and KP Prisons.',
      'Sign a province-wide corporate SLA with PTCL for fiber-optic links and dedicated technical response teams.',
      'Sanction dedicated IT and network management posts to relieve courtroom computer operators.'
    ],
    proposedPHCInterventions: [
      'High Court Rules Committee to draft and approve CFMIS & E-Filing rules under Section 122 CPC.',
      'Direct the High Court IT Directorate to operationalize E-Release, automatic Tehsil sync, and Institution Branch duplicate filters.',
      'Execution of a centralized institutional MoU with PTCL and the Provincial Prisons Department.'
    ],
    metrics: [
      { label: 'Core Technical Gaps Identified', value: '14 Modules in Mardan', subtext: 'Sync, E-Release, SDC, PTCL, Cause lists' },
      { label: 'E-Release Readiness', value: 'Immediate Need', subtext: 'Preventing manual paper delivery to jails' },
      { label: 'Statutory Backing Gap', value: 'Section 122 CPC Rules', subtext: 'Required for binding judicial digitization' }
    ],
    issueIds: ['ISU-SWB-01', 'ISU-SWB-02', 'ISU-SWB-03', 'ISU-MRD-02', 'ISU-CSD-01', 'ISU-CSD-02', 'ISU-KRK-03', 'ISU-KHL-02', 'ISU-MHM-01', 'ISU-LCT-03', 'ISU-LCT-04', 'ISU-LCT-05']
  },
  {
    id: 4,
    title: 'Caseflow Management, Docket Liquidation & Execution of Decrees',
    shortTitle: 'Caseflow & Execution',
    icon: 'Scale',
    description: 'Chronic pendency, flawed quantitative disposal quotas that incentivize rapid superficial disposals over complex decade-old suits, and monumental unpaid land acquisition decretal amounts.',
    affectedDistricts: ['abbottabad', 'mardan', 'lakki_marwat', 'bannu', 'dir_upper', 'nowshera', 'lower_chitral', 'swat', 'haripur', 'batkhela'],
    recurringProblems: [
      'Over 600 execution petitions pending in Referee Court Mardan alone, with outstanding base compensation of PKR 18.684 Billion growing at 6% annual statutory interest.',
      'Government departments routinely fail to deposit decretal amounts, hiding behind legal exemptions from property attachment.',
      'Raw, purely numerical monthly disposal quotas penalize judges handling complex, contested, multi-party land suits.',
      'Process serving remains manual, slow, and prone to corruption, causing perpetual trial adjournments.',
      'Senior lawyers overburdened with immense dockets seeking frequent adjournments; single-handed practice bottlenecking courts.'
    ],
    institutionalImpact: 'Failure to execute decrees against the state destroys public faith in judicial remedies, causes severe public outrage from displaced landowners, and compounds provincial financial liabilities.',
    practicalSolutions: [
      'Institute a Differentiated Case Management (DCM) regime automatically routing cases into Fast-Track, Standard, and Complex tracks.',
      'Replace raw disposal quotas with a Weighted Case Evaluation Policy crediting resolution of chronic, contested, decade-old disputes.',
      'Direct the Provincial Government to establish a ring-fenced "Land Acquisition Compensation Fund" with structured repayment schedules.',
      'Establish a dedicated Judicial Execution Wing / Executory Force with independent enforcement powers to serve processes and warrants.'
    ],
    proposedPHCInterventions: [
      'Issuance of a formal High Court Policy Directive and Practice Guidelines on Differentiated Case Management.',
      'Binding judicial/administrative orders to the KP Government regarding the PKR 18.684B Mardan decretal liability.',
      'Framing of uniform Practice Directions regulating lawyer adjournments and single-handed practice.'
    ],
    metrics: [
      { label: 'Mardan Decretal Backlog', value: 'PKR 18.684 Billion', subtext: 'Over 600 petitions pending since 2009' },
      { label: 'Bannu Civil Pendency', value: '4,588 Civil Cases', subtext: '600-714 cases per active civil court' },
      { label: 'Evaluation Reform Demand', value: '6 Districts', subtext: 'Demanding weighted rather than raw metrics' }
    ],
    issueIds: ['ISU-ABT-02', 'ISU-MRD-03', 'ISU-LKM-01', 'ISU-BNU-02', 'ISU-DRU-02', 'ISU-NSH-05', 'ISU-LCT-01', 'ISU-LCT-02', 'ISU-SWT-01', 'ISU-HRP-01', 'ISU-MLK-01']
  },
  {
    id: 5,
    title: 'Security, Mobility & Continuity of Justice in High-Risk Zones',
    shortTitle: 'Security & Mobility',
    icon: 'ShieldAlert',
    description: 'Direct security hazards in southern and merged districts, physical perimeter vulnerabilities, reliance on intermittent military Road Opening Days (ROD), and the need for remote continuity of court proceedings.',
    affectedDistricts: ['bannu', 'karak', 'south_waziristan', 'tank', 'north_waziristan', 'orakzai', 'kurram', 'kohat', 'dir_lower'],
    recurringProblems: [
      'February 2026 drone attack on the official residential premises of the Sessions Judge in South Waziristan (stationed at Tank).',
      'Movement of judicial officers in Tank and South Waziristan strictly dependent on intermittent Army Road Opening Days (ROD, often once in 10 days).',
      'Judges stranded outside stations when ROD is canceled or delayed, with no codified authorization for conducting online court hearings.',
      'Bannu Judicial Complex lacks watchtowers, bomb-proof gates, jammer coverage, anti-blast walls, and bulletproof transport (Rs. 140M needed).',
      'Local security personnel deployed at sensitive courts have close familial ties in the conflict area, compromising independent protective reaction.',
      'Upper Orakzai main road via Shahoo closed to officials and public, preventing execution of processes and site commissions.'
    ],
    institutionalImpact: 'Direct physical threats against judges, court staff, and litigants paralyze court calendars in southern districts and force judicial officers to commute under extreme, unprotected vulnerability.',
    practicalSolutions: [
      'Authorize District & Sessions Judges in volatile districts to permit online court proceedings when travel is cut off by non-ROD periods.',
      'Sanction a turnkey security enhancement package for Bannu, Tank, Karak, and Waziristan (bulletproof vehicles, bomb-proof gates, watchtowers).',
      'Deploy security personnel from outside the home district to eliminate familial vulnerability.',
      'Deploy Frontier Constabulary (FC) squads for dedicated judicial perimeter defense.'
    ],
    proposedPHCInterventions: [
      'Notification of an emergency Continuity of Justice SOP permitting virtual court functioning during travel disruptions in hard stations.',
      'High-level engagement with Home Department, Corps Commander, and FC IG for dedicated protective deployments.',
      'Sanction of special capital grants for perimeter hardening and electronic countermeasures.'
    ],
    metrics: [
      { label: 'Verified Kinetic Incidents', value: 'Drone Strike Feb 2026', subtext: 'South Waziristan Sessions Judge compound' },
      { label: 'Mobility Restriction', value: 'ROD 1x in ~10 Days', subtext: 'Judges stranded without online hearing powers' },
      { label: 'Bannu Fortification Budget', value: 'PKR 140 Million', subtext: '4 gates, 12 watchtowers, jammers, APC' }
    ],
    issueIds: ['ISU-BNU-01', 'ISU-KRK-01', 'ISU-SWA-01', 'ISU-TNK-03', 'ISU-NWA-03', 'ISU-ORK-01', 'ISU-KHT-04', 'ISU-DRL-01']
  },
  {
    id: 6,
    title: 'Inter-Agency Coordination & Executive Stakeholder Accountability',
    shortTitle: 'Inter-Agency Coordination',
    icon: 'Network',
    description: 'Trial bottlenecks created by external justice-sector stakeholders: delayed police investigation reports/challans, non-production of witnesses, defective prosecution scrutinies, and delayed revenue records.',
    affectedDistricts: ['abbottabad', 'charsadda', 'kohat', 'lakki_marwat', 'mohmand', 'dir_lower', 'd_i_khan', 'bajaur', 'orakzai'],
    recurringProblems: [
      'Police consistently fail to submit challans within statutory timeframes and routinely fail to produce official witnesses.',
      'Absence of digital integration between the Judiciary, Police, Health, NADRA, and Revenue Departments.',
      'Severe shortage of Public Prosecutors (e.g. Kohat has only 5 prosecutors for 15 active criminal courts).',
      'Only 1 Forensic Science Laboratory (FSL) in Peshawar serving the entire province, making CNSA 4-day dispatch rules unworkable.',
      'Absence of Woman Medical Officers (WMO) for post-mortems and medico-legal reports in merged districts like Mohmand.',
      'District Criminal Justice Coordination Committees (CJCC) lack statutory power to discipline defaulting external officials.'
    ],
    institutionalImpact: 'Non-judicial delays caused by police, health, and prosecution are unfairly blamed on the judiciary, destroying public confidence and prolonging pre-trial detention.',
    practicalSolutions: [
      'Formulate a binding Provincial Justice Sector Accord and inter-departmental SOP with strict Service Level Agreements (SLAs).',
      'Develop an automated Compliance & Oversight Dashboard tracking challan submissions, witness production, and FSL turnaround.',
      'Decentralize FSL capacity by establishing divisional or regional forensic testing units.',
      'Empower District Judges to record adverse performance entries in the ACRs of persistently delinquent police and executive officers.'
    ],
    proposedPHCInterventions: [
      'Convene the Provincial Justice Committee under the chairmanship of the Hon’ble Chief Justice to mandate binding SLAs.',
      'Direct the Secretary Health to notify permanent postings of WMOs for medico-legal examinations at district hospitals.',
      'Issue judicial practice directions empowering District Judges to initiate contempt or disciplinary notices for repeat challan defaults.'
    ],
    metrics: [
      { label: 'Prosecutorial Deficit', value: '5 Prosecutors for 15 Courts', subtext: 'Kohat district criminal docket bottleneck' },
      { label: 'Forensic Bottle-neck', value: '1 FSL for 35 Districts', subtext: 'Peshawar FSL overwhelmed with CNSA samples' },
      { label: 'Missing Medico-Legal Staff', value: 'No WMO at Ghallanai', subtext: 'Autopsies and rape exams delayed in Mohmand' }
    ],
    issueIds: ['ISU-ABT-03', 'ISU-CSD-01', 'ISU-KHT-03', 'ISU-LKM-02', 'ISU-MHM-04', 'ISU-DRL-02', 'ISU-DIK-02']
  },
  {
    id: 7,
    title: 'Judicial Wellbeing, Terms of Service & Hard-Station Policy',
    shortTitle: 'Wellbeing & Hard Stations',
    icon: 'HeartHandshake',
    description: 'Unpredictable postings to volatile and hardship zones, non-enforcement of prescribed 1-year tenure limits, lack of hardship allowances, restrictive leave quotas for remote stations, and mismatched evaluation cycles.',
    affectedDistricts: ['tank', 'south_waziristan', 'upper_chitral', 'torghar', 'nowshera', 'peshawar', 'hangu', 'batkhela', 'swat', 'd_i_khan'],
    recurringProblems: [
      'Non-compliance with prescribed 1-year tenure in hard stations (e.g. Tank Senior Civil Judge in 3rd consecutive year).',
      'Zero specific hard-area financial allowance for judicial officers serving in extreme hardship stations like Tank.',
      'South Waziristan judges exposed to extreme volatility requesting a strict 6-month tenure cap and preferential subsequent postings.',
      'Upper Chitral leave policy of 2 days/month unworkable when travel to native districts takes 12 to 16 hours; joining time of 7 days insufficient.',
      'Torghar/Oghi not categorized as winter/hard stations despite sub-zero winter temperatures and difficult mountain terrain.',
      'ACR/PER evaluation cycle based on calendar year (Jan-Dec) conflicts with judicial year (Sept-Aug).'
    ],
    institutionalImpact: 'Neglect of living conditions, safety, and rest causes severe demoralization, stress, and anxiety among officers serving in frontline and isolated districts.',
    practicalSolutions: [
      'Enforce a strict 1-year tenure cap for Hard Stations and 6-month tenure cap for Extreme Volatile Stations (South Waziristan).',
      'Sanction a monthly Hard-Area Allowance of PKR 100,000/- for officers posted at Tank and comparable high-risk stations.',
      'Revise Upper Chitral leave policy from 2 days to 4 days per month, and expand joining time from 7 to 14 days.',
      'Declare Tehsil Oghi/Torghar as a Winter and Hard Station with seasonal administrative facilities.',
      'Align the ACR/PER evaluation reporting period with the judicial year (1 September to 31 August).'
    ],
    proposedPHCInterventions: [
      'Re-issue and strictly enforce the Hard Station Transfer & Posting Policy with automated tenure expiration tracking.',
      'Administrative proposal to the Provincial Government for formal notification of the Hard-Area Special Allowance.',
      'Notification revising leave entitlements and joining time rules for remote northern circuits.'
    ],
    metrics: [
      { label: 'Exceeded Hard Tenure', value: 'Entering 3rd Year', subtext: 'Documented case of SCJ Tank beyond 1-yr policy' },
      { label: 'Travel Burden in North', value: '12 - 16 Hours', subtext: 'Upper Chitral journey to native districts' },
      { label: 'Proposed Hardship Grant', value: 'PKR 100,000 / Month', subtext: 'For judges serving in Tank / South Waziristan' }
    ],
    issueIds: ['ISU-TNK-01', 'ISU-TNK-02', 'ISU-SWA-02', 'ISU-UPC-01', 'ISU-UPC-02', 'ISU-TRG-02', 'ISU-TRG-03', 'ISU-NSH-02', 'ISU-NSH-04', 'ISU-PSH-03', 'ISU-HNG-05']
  },
  {
    id: 8,
    title: 'Access to Justice, Vulnerable Litigants, Bar Relations & ADR',
    shortTitle: 'Access, Vulnerability & Bar',
    icon: 'FileCheck',
    description: 'Lack of protection facilities for women, children, and mentally ill prisoners; shortage of court interpreters; exploitation of indigent accused by professional bail touts; and unregulated bar strikes.',
    affectedDistricts: ['bunar', 'lakki_marwat', 'swat', 'haripur', 'hangu', 'lower_chitral', 'nowshera', 'mohmand', 'batkhela'],
    recurringProblems: [
      'No Dar-ul-Aman (Women Crisis Center) in Buner; vulnerable women forced to travel to Swat amid cultural and security concerns.',
      'No psychiatric specialist or substance detoxification center in Buner district jail.',
      'Absence of certified sign-language/court interpreters for litigants and witnesses with hearing and speech disabilities.',
      'Lack of court psychologists to counsel female litigants and juvenile probationers in family and GBV cases.',
      'Poor and indigent accused remain imprisoned after bail because they cannot arrange sureties, falling victim to commercial bail touts.',
      'Bar rooms encroaching into judicial premises, and frequent bar strikes called over non-judicial or petty matters.'
    ],
    institutionalImpact: 'Marginalized litigants, disabled citizens, impoverished undertrials, and vulnerable women are deprived of constitutional rights to fair trial, dignity, and swift judicial relief.',
    practicalSolutions: [
      'Establish a Government-backed Surety & Legal Aid Scheme for indigent prisoners to eradicate commercial surety syndicates.',
      'Direct the Social Welfare Department to notify a local Dar-ul-Aman in Buner and Child Observation Homes in Swat under JJSA 2018.',
      'Empanel certified district court interpreters and dedicated court psychologists.',
      'Promulgate a binding Code of Conduct and liaison protocol with District Bar Associations regarding strike moderation and chamber ceilings.'
    ],
    proposedPHCInterventions: [
      'Directive to the Provincial Government for establishment of district-level jail detoxification wards and shelter homes.',
      'Formulation of High Court rules on Court Interpreters and Judicial Psychological Support Units.',
      'High Court consultation with the KP Bar Council to designate strikes over petty issues as professional misconduct.'
    ],
    metrics: [
      { label: 'Shelter Gap in Buner', value: 'Zero Women Centers', subtext: 'Transferred to Swat despite tribal custom barriers' },
      { label: 'Jail Health Deficit', value: 'No Detox / Psychiatrist', subtext: 'Buner jail lacks mental health facilities' },
      { label: 'Surety Exploitation', value: 'Commercial Touts', subtext: 'Poor granted bail remain incarcerated' }
    ],
    issueIds: ['ISU-BNR-01', 'ISU-BNR-02', 'ISU-LKM-03', 'ISU-LKM-04', 'ISU-LKM-05', 'ISU-SWT-04', 'ISU-SWT-05', 'ISU-HRP-01', 'ISU-HNG-01', 'ISU-NSH-03', 'ISU-MLK-02']
  }
];
