import { getEnvVariable } from "../helpers/utils";
import { useQuery } from "react-query";

// SERVICES
async function login(credentials) {
  return fetch(`${getEnvVariable("REACT_APP_AUTH_ENDPOINT")}/login`, {
    method: "POST",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}
async function logout(credentials) {
  return fetch(`${getEnvVariable("REACT_APP_AUTH_ENDPOINT")}/login`, {
    method: "POST",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

async function signUp(credentials) {
  return fetch(`${getEnvVariable("REACT_APP_AUTH_ENDPOINT")}/register`, {
    method: "POST",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

// QUERIES

export const useLogin = (credentials) => {
  return useQuery(
    ["login", credentials],
    async () => await login(credentials),
    {
      enabled: false,
      suspense: true,
    }
  );
};
export const useLogout = (credentials) => {
  return useQuery(
    ["login", credentials],
    async () => await logout(credentials),
    {
      enabled: false,
      suspense: true,
    }
  );
};

export const useSignUp = (credentials) => {
  return useQuery(
    ["sign-up", credentials],
    async () => await signUp(credentials),
    {
      enabled: false,
      suspense: true,
    }
  );
};
