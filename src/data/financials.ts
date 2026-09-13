export interface DecretalLiabilityItem {
  id: string;
  schemeName: string;
  department: string;
  awardReference: string;
  principalAmount: number; // PKR
  formattedAmount: string;
  annualInterestPenalty: number; // 6% per annum
  status: 'Unpaid / Pending Execution' | 'Partially Liquidated' | 'Under Audit';
  district: string;
}

export const mardanDecretalLiabilities: DecretalLiabilityItem[] = [
  {
    id: 'DEC-MRD-01',
    schemeName: 'Abdul Wali Khan University Mardan (AWKUM)',
    department: 'Higher Education Department',
    awardReference: 'Award No. 57/4 dated 20/07/2010',
    principalAmount: 8805645861,
    formattedAmount: 'PKR 8,805,645,861',
    annualInterestPenalty: 528338751,
    status: 'Unpaid / Pending Execution',
    district: 'Mardan'
  },
  {
    id: 'DEC-MRD-02',
    schemeName: 'Agriculture University Mardan',
    department: 'Agriculture & Higher Education',
    awardReference: 'Award No. 59/4 dated 28/09/2010',
    principalAmount: 5947167185,
    formattedAmount: 'PKR 5,947,167,185',
    annualInterestPenalty: 356830031,
    status: 'Unpaid / Pending Execution',
    district: 'Mardan'
  },
  {
    id: 'DEC-MRD-03',
    schemeName: 'Bacha Khan Medical College (BKMC)',
    department: 'Health Department',
    awardReference: 'Award No. 96/4 dated 10/10/2010',
    principalAmount: 2113434257,
    formattedAmount: 'PKR 2,113,434,257',
    annualInterestPenalty: 126806055,
    status: 'Unpaid / Pending Execution',
    district: 'Mardan'
  },
  {
    id: 'DEC-MRD-04',
    schemeName: 'Swat Expressway Land Acquisition (Mardan Section)',
    department: 'Pakhtunkhwa Highways Authority (PKHA)',
    awardReference: 'Award No. Misc-PKHA/2016',
    principalAmount: 1503873500,
    formattedAmount: 'PKR 1,503,873,500',
    annualInterestPenalty: 90232410,
    status: 'Unpaid / Pending Execution',
    district: 'Mardan'
  },
  {
    id: 'DEC-MRD-05',
    schemeName: 'Tehsil Municipal Administration Mardan (Civic Works)',
    department: 'Local Government & Rural Development',
    awardReference: 'Awards 117/4, 119/4, 123/4 dated 2012',
    principalAmount: 155790000,
    formattedAmount: 'PKR 155,790,000',
    annualInterestPenalty: 9347400,
    status: 'Unpaid / Pending Execution',
    district: 'Mardan'
  },
  {
    id: 'DEC-MRD-06',
    schemeName: 'Communication & Works Infrastructure Schemes',
    department: 'C & W Department KP',
    awardReference: 'Award 317/4 dated 2020',
    principalAmount: 60580000,
    formattedAmount: 'PKR 60,580,000',
    annualInterestPenalty: 3634800,
    status: 'Unpaid / Pending Execution',
    district: 'Mardan'
  },
  {
    id: 'DEC-MRD-07',
    schemeName: 'Police Department District Facilities',
    department: 'Police Department KP',
    awardReference: 'Awards 152, 155, 158 dated 2012',
    principalAmount: 48780300,
    formattedAmount: 'PKR 48,780,300',
    annualInterestPenalty: 2926818,
    status: 'Unpaid / Pending Execution',
    district: 'Mardan'
  },
  {
    id: 'DEC-MRD-08',
    schemeName: 'District Health Facilities & Hospitals',
    department: 'Health Department KP',
    awardReference: 'Award No. 90/4',
    principalAmount: 39870500,
    formattedAmount: 'PKR 39,870,500',
    annualInterestPenalty: 2392230,
    status: 'Unpaid / Pending Execution',
    district: 'Mardan'
  },
  {
    id: 'DEC-MRD-09',
    schemeName: 'Commerce College Mardan Campus',
    department: 'Higher Education Department',
    awardReference: 'Award No. 120/4',
    principalAmount: 9850000,
    formattedAmount: 'PKR 9,850,000',
    annualInterestPenalty: 591000,
    status: 'Unpaid / Pending Execution',
    district: 'Mardan'
  }
];

export const totalMardanLiabilities = mardanDecretalLiabilities.reduce(
  (acc, item) => acc + item.principalAmount,
  0
);

export const totalMardanAnnualInterest = mardanDecretalLiabilities.reduce(
  (acc, item) => acc + item.annualInterestPenalty,
  0
);

export const capitalFundingDemands = [
  {
    district: 'Bannu',
    purpose: 'Emergency Security Hardening, Watchtowers, Hydraulic Gates & FC Barracks',
    amount: 140000000,
    formattedAmount: 'PKR 140 Million',
    urgency: 'Immediate / Critical',
    source: 'Bannu Submission (Page 1)'
  },
  {
    district: 'Mardan',
    purpose: 'Unified Judicial Complex Phase-I Land & Construction',
    amount: 1250000000,
    formattedAmount: 'PKR 1.25 Billion (Est.)',
    urgency: 'High Priority',
    source: 'Mardan Submission (Page 1)'
  },
  {
    district: 'Khyber',
    purpose: '150-Kanal Integrated Judicial Complex & Residences at Jamrud',
    amount: 850000000,
    formattedAmount: 'PKR 850 Million (Est.)',
    urgency: 'High Priority',
    source: 'Khyber Submission (Page 1)'
  },
  {
    district: 'Tank',
    purpose: 'Monthly Hard-Area Allowance (PKR 100k/judge) & Satellite Virtual Court Hardware',
    amount: 18000000,
    formattedAmount: 'PKR 18 Million / Annum',
    urgency: 'High Priority',
    source: 'Tank Submission (Page 4)'
  }
];
