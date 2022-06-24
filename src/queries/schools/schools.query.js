import { useQuery } from "react-query";
import { useAuth } from "../../contexts/AuthContext";
import { fetchSchoolByName, fetchSchools } from "./schools.service";

export const useSchools = (params) => {
  const { token } = useAuth();
  return useQuery(
    ["schools", params],
    async () =>
      await fetchSchools({ params, token }, { enable: false, retry: 1 })
  );
};
export const useSchool = (schoolName) => {
  const { token } = useAuth();
  return useQuery(
    ["school", schoolName],
    async () =>
      await fetchSchoolByName({ schoolName, token }, { enable: false })
  );
};
