const baseURL = import.meta.env.DEV ? "http://94.45.233.241:46877" : "";

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

export async function getDetails(inn: number) {
  const res = await fetch(
    "/details" + "?" + new URLSearchParams({ inn: inn.toString() })
  );

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