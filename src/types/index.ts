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
  contracts: { month: string; count: number }[];
  arbitration_cases: { month: string; count: number }[];
}
