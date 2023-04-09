import axios from "axios";
import type { Details, Offer, Product } from "../types";

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

export async function getProductList() {
  const res = await api.get<Product[]>("/api/okpd/all");
  return res;
}

export async function getProduct(id: string) {
  const res = await api.get<Offer[]>("/api/okpd/product/" + id);
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
