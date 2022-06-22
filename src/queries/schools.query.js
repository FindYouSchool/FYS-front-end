import { getEnvVariable } from "../helpers/utils";
import { useQuery } from "react-query";

async function fetchSchools(params) {
  return fetch(`${getEnvVariable("REACT_APP_BACKEND_ENDPOINT")}/schools`, {
    method: "GET",
    params: {
      ...params,
    },
  }).then((data) => data.json());
}

export const useSchools = (params) => {
  return useQuery(
    ["schools", params],
    async () => await fetchSchools(params, { enable: false, retryDelay: 500 })
  );
};
