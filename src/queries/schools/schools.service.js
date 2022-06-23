import { getEnvVariable } from "../../helpers/utils";

export async function fetchSchools({ params, token }) {
  return fetch(
    `${getEnvVariable("REACT_APP_BACKEND_ENDPOINT")}/public/schools`,
    {
      method: "GET",
      // credentials: "include",
      headers: { Authorization: "Bearer " + token },
      params: {
        ...params,
      },
    }
  )
    .then(async (res) => {
      const data = await res.json();
      console.log(data);
      if (!data.schools) {
        throw new Error("Oups, erreur du serveur.");
      }
      return data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
}
