import { getEnvVariable } from "../../helpers/utils";

export async function login(credentials) {
  return fetch(`${getEnvVariable("REACT_APP_AUTH_ENDPOINT")}/login`, {
    method: "POST",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
export async function logout() {
  return fetch(`${getEnvVariable("REACT_APP_AUTH_ENDPOINT")}/logout`, {
    method: "POST",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) => data.json());
}

export async function signUp(credentials) {
  return fetch(`${getEnvVariable("REACT_APP_AUTH_ENDPOINT")}/register`, {
    method: "POST",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
