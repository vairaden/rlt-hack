export interface Details {
  name: string;
  inn: number;
  kpp: number;
  ogrn: number;
  creation_date: string;
  registration_authority: number;
  tax_authority: number;
  registration_date: string;
  ceo: string;
  okved: {
    type: string;
    code: string;
    description: string;
    date: string;
  }[];
  contracts_supplier: { month: string; count: number }[];
  contracts_customer: { month: string; count: number }[];
  arbitration_cases: { month: string; count: number }[];
}

export interface Product {
  id: number;
  section: string;
  section_name: string;
  code: string;
  name: string;
}

export interface Offer {
  name: string;
  region: string;
  tender_id: number;
  tender_date: string;
  tender_end_date: string;
  sum_in_rub: number;
  company_name: string;
  company_inn: number;
}
