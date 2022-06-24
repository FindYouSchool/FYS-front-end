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
      const content = await res.json();
      if (!content.data.schools) {
        throw new Error("Oups, erreur du serveur.");
      }
      return content.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
}
export async function fetchSchoolByName({ schoolName, token }) {
  return fetch(
    `${getEnvVariable(
      "REACT_APP_BACKEND_ENDPOINT"
    )}/public/schools/${schoolName}`,
    {
      method: "GET",
      // credentials: "include",
      headers: { Authorization: "Bearer " + token },
    }
  )
    .then(async (res) => {
      const content = await res.json();
      if (!content.data || !content.data.id) {
        throw new Error("Oups, erreur du serveur.");
      }
      return !content.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
}
