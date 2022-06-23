import { getEnvVariable } from "../helpers/utils";
import { useQuery } from "react-query";
import { useAuth } from "../contexts/AuthContext";

// SERVICES

async function fetchSchools({ params, token }) {
  return fetch(`${getEnvVariable("REACT_APP_BACKEND_ENDPOINT")}/schools`, {
    method: "GET",
    // credentials: "include",
    headers: { Authorization: "Bearer " + token },
    params: {
      ...params,
    },
  }).then((data) => data.json());
}

// QUERIES

export const useSchools = (params) => {
  const { token } = useAuth();
  return useQuery(
    ["schools", params],
    async () =>
      await fetchSchools({ params, token }, { enable: false, retryDelay: 500 })
  );
};
