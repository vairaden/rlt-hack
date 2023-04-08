import axios from "axios";
import type { Details } from "../types";

const api = axios.create({
  baseURL: "http://94.45.223.241:46877",
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
