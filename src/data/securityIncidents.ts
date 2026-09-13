import { SecurityIncident } from '../types';

export const securityIncidentsData: SecurityIncident[] = [
  {
    id: 'SEC-SWA-01',
    districtId: 'south_waziristan',
    districtName: 'South Waziristan (Stationed at Tank)',
    date: 'February 2026',
    title: 'Kinetic Drone Strike on Judicial Residence Premises',
    severity: 'Critical',
    summary: 'A kinetic drone attack targeted the official premises of the learned District & Sessions Judge in February 2026. Despite armed security deployment, the drone breached perimeter air space, executed the strike, and egressed without interception.',
    sourceReference: 'South Waziristan Submission (Annexure-A, Page 1 of 5)',
    impactOnJustice: 'Exposes critical vulnerability in aerial defense; underscores the inability of conventional local security guards to neutralize modern aerial asymmetrical threats. Directly threatens judicial life and institutional presence.',
    proposedMitigation: 'Deploy anti-drone jamming technology; replace locally deployed personnel having familial exposure with outside police cadres from Tank/D.I. Khan; provide bulletproof/armored vehicular transport.',
    location: 'District Sessions Judge Residence Premises, Tank Headquarters',
    involvedAgencies: ['Peshawar High Court', 'Inspector General of Police KP', 'Frontier Constabulary', 'Counter-Terrorism Department (CTD)']
  },
  {
    id: 'SEC-BNU-01',
    districtId: 'bannu',
    districtName: 'Bannu',
    date: 'September 2026',
    title: 'Capital Security Hardening & Perimeter Defense Shortfall',
    severity: 'Critical',
    summary: 'The District Courts complex in Bannu faces imminent security perils due to low boundary walls, lack of elevated watchtowers, absence of vehicle bomb-proof hydraulic barriers, and an urgent deficit of armed Frontier Constabulary (FC) personnel.',
    sourceReference: 'Bannu Submission (Annexure-A, Page 1 of 3)',
    impactOnJustice: 'Severe hazard of coordinated suicide or armed assault on judges, lawyers, and thousands of attending litigants. Heightened panic and deterrence against timely attendance.',
    proposedMitigation: 'Immediate release of PKR 140 Million emergency capital grant for blast-proof gates, perimeter fortification, high-resolution thermal surveillance, and deployment of dedicated FC platoons.',
    location: 'District Courts Complex & Judicial Lockups, Bannu',
    involvedAgencies: ['Finance Department KP', 'Home Department KP', 'Frontier Constabulary', 'Peshawar High Court']
  },
  {
    id: 'SEC-TNK-01',
    districtId: 'tank',
    districtName: 'Tank',
    date: 'Continuous / Ongoing 2026',
    title: 'Intermittent Military Road Opening Day (ROD) Stranding',
    severity: 'High',
    summary: 'Movement to and from District Tank is strictly contingent upon declaration of Road Opening Days (ROD) by the Pakistan Army. Because RODs occur unpredictably (sometimes once in 10-14 days), judicial officers leaving for sanctioned duties or weekends are frequently stranded outside the district.',
    sourceReference: 'Tank Submission (Annexure-A, Pages 6-7 of 7)',
    impactOnJustice: 'Courts are brought to an unplanned halt when judges cannot travel back through hostile corridors; cases are adjourned repeatedly without judicial intention.',
    proposedMitigation: 'Empower District & Sessions Judge to authorize virtual online court sittings during non-ROD days; establish a dedicated high-security escort corridor in coordination with 11 Corps / Frontier Corps.',
    location: 'D.I. Khan — Tank Highway & Southern Mobility Corridors',
    involvedAgencies: ['Pakistan Army (11 Corps)', 'Frontier Corps KP', 'District Administration Tank']
  },
  {
    id: 'SEC-ORK-01',
    districtId: 'orakzai',
    districtName: 'Orakzai',
    date: 'September 2026',
    title: 'Access Corridor Closure to Upper Orakzai (Shahoo-Ghiljo Route)',
    severity: 'High',
    summary: 'The primary access corridor connecting Baber Mela with Upper Orakzai (Ghiljo and Daboori via Shahoo) has been closed due to volatile law and order conditions, completely severing physical court access and process serving in Upper Orakzai.',
    sourceReference: 'Orakzai Submission (Annexure-A, Page 2 of 6)',
    impactOnJustice: 'Complete suspension of court summons, warrants, local commissions, and physical inspection in Upper Orakzai; litigants unable to travel to Baber Mela courts.',
    proposedMitigation: 'Direct Law Enforcement Agencies at provincial level to restore safe transit routes and deploy permanent security checkpoints along the Shahoo-Ghiljo arterial road.',
    location: 'Upper Orakzai (Ghiljo / Daboori / Shahoo Axis)',
    involvedAgencies: ['Law Enforcement Agencies (LEAs)', 'Orakzai Scouts', 'KP Police']
  },
  {
    id: 'SEC-NWA-01',
    districtId: 'north_waziristan',
    districtName: 'North Waziristan',
    date: 'September 2026',
    title: 'Seven Division Military Construction Restrictions & Cordon',
    severity: 'High',
    summary: 'Construction of the newly acquired Judicial Complex at Miranshah remains blocked due to security restrictions and withholding of NOC by Seven Division, Pakistan Army.',
    sourceReference: 'North Waziristan Submission (Annexure-A, Page 1 of 3)',
    impactOnJustice: 'Judicial officers and staff operate out of temporary and insecure quarters without appropriate judicial decorum or sovereign protection.',
    proposedMitigation: 'Convene joint high-level committee between Peshawar High Court and Seven Division Headquarters, Miranshah to grant the required security NOC with tailored access controls.',
    location: 'Miranshah Headquarters, North Waziristan',
    involvedAgencies: ['Seven Division (Pakistan Army)', 'Peshawar High Court', 'Deputy Commissioner North Waziristan']
  },
  {
    id: 'SEC-KRK-01',
    districtId: 'karak',
    districtName: 'Karak',
    date: 'September 2026',
    title: 'Perimeter Security Deficit & Weapon Proliferation',
    severity: 'High',
    summary: 'Karak district judiciary is situated in a high-threat zone with local police personnel overwhelmed by anti-terror duties, leaving court gates and judicial residences vulnerable to armed breaches.',
    sourceReference: 'Karak Submission (Annexure-A, Page 1 of 6)',
    impactOnJustice: 'Heightened vulnerability of judicial officers handling high-profile anti-terror, narcotics, and organized crime proceedings.',
    proposedMitigation: 'Deploy dedicated Frontier Reserve Police (FRP) or Frontier Constabulary (FC) at court premises; install automated walkthrough gates and luggage scanners.',
    location: 'District Courts Karak',
    involvedAgencies: ['KP Police', 'District Police Officer Karak', 'Peshawar High Court']
  }
];

export const securityIncidents = securityIncidentsData;
