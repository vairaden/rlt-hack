import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.DEV ? "http://94.45.223.241:46877" : "",
});

export async function login(username: string, password: string) {
  const res = await fetch("/login", {
    method: "post",
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return res;
}

export async function register(username: string, password: string) {
  const res = await fetch("/register", {
    method: "post",
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return res;
}

export async function getDetails(inn: string) {
  interface Details {
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
  const res = await api.get<Details>("/api/companies/" + inn);
  return res;
}

export async function search(query: string) {
  const res = await fetch("/search", {
    method: "post",
    body: JSON.stringify({
      query,
    }),
  });

  return res;
}
