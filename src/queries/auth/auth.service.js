import { getEnvVariable } from "../../helpers/utils";

export async function login(credentials) {
  return fetch(`${getEnvVariable("REACT_APP_AUTH_ENDPOINT")}/login`, {
    method: "POST",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then(async (res) => {
      const data = await res.json();
      console.log(data);
      if (!data.success) {
        if (data.status === 500) {
          throw new Error("Oups, erreur du serveur.");
        }
        throw new Error(data.message);
      }
      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
}
export async function logout() {
  return fetch(`${getEnvVariable("REACT_APP_AUTH_ENDPOINT")}/logout`, {
    method: "POST",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(async (res) => {
      if (!res.status === 200) {
        throw new Error(res.data?.message);
      }
      return await res.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export async function signUp(credentials) {
  return fetch(`${getEnvVariable("REACT_APP_AUTH_ENDPOINT")}/register`, {
    method: "POST",
    // credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  })
    .then(async (res) => {
      const data = await res.json();
      if (!data.success) {
        if (data.status === 500) {
          throw new Error("Oups, erreur du serveur.");
        }
        throw new Error(data.message);
      }

      return data;
    })
    .catch((err) => {
      throw new Error(err);
    });
}
