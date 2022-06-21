import { getEnvVariable } from "../helpers/utils";
import { useQuery } from "react-query";

async function login(credentials) {
  return fetch(`${getEnvVariable("REACT_APP_BACKEND_ENDPOINT")}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

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
