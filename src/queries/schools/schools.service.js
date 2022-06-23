import { getEnvVariable } from "../../helpers/utils";

export async function fetchSchools({ params, token }) {
  return fetch(`${getEnvVariable("REACT_APP_BACKEND_ENDPOINT")}/schools`, {
    method: "GET",
    // credentials: "include",
    headers: { Authorization: "Bearer " + token },
    params: {
      ...params,
    },
  }).then((data) => data.json());
}
