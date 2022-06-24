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
export async function fetchSchoolByName({ filters, search }) {
  return fetch(
    `${getEnvVariable("REACT_APP_BACKEND_ENDPOINT")}/public/schools/${search}`,
    {
      method: "GET",
    }
  )
    .then(async (res) => {
      const content = await res.json();
      console.log(content.data);
      if (!content.data) {
        throw new Error("Oups, erreur du serveur.");
      }
      return content.data.schools;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
}
export async function fetchRateByID(id) {
  return fetch(
    `${getEnvVariable(
      "REACT_APP_BACKEND_ENDPOINT"
    )}/public/schools/${id}/grade`,
    {
      method: "GET",
    }
  )
    .then(async (res) => {
      const content = await res.json();
      if (!content.data || !content.data.id) {
        throw new Error("Oups, erreur du serveur.");
      }
      return content.data.rating;
    })
    .catch((err) => {
      throw new Error(err);
    });
}
export async function fetchNoticeBySchoolID(id) {
  return fetch(
    `${getEnvVariable(
      "REACT_APP_BACKEND_ENDPOINT"
    )}/public/notices/school/${id}`,
    {
      method: "GET",
    }
  )
    .then(async (res) => {
      const content = await res.json();
      if (!content.data) {
        throw new Error("Oups, erreur du serveur.");
      }
      return content.data.notices;
    })
    .catch((err) => {
      throw new Error(err);
    });
}
