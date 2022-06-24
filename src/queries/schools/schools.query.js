import { useQuery } from "react-query";
import { useAuth } from "../../contexts/AuthContext";
import {
  fetchNoticeBySchoolID,
  fetchRateByID,
  fetchSchoolByName,
  fetchSchools,
} from "./schools.service";

export const useSchools = (params) => {
  const { token } = useAuth();
  return useQuery(
    ["schools", params],
    async () =>
      await fetchSchools({ params, token }, { enable: false, retry: 1 })
  );
};
export const useSchoolSearch = (schoolName) => {
  return useQuery(
    ["school-search", schoolName],
    async () => await fetchSchoolByName(schoolName, { enable: false })
  );
};
export const useRate = (id) => {
  return useQuery(
    ["school-rate", id],
    async () => await fetchRateByID(id, { enable: false })
  );
};
export const useNoticeBySchool = (id) => {
  return useQuery(
    ["notices-by-school", id],
    async () => await fetchNoticeBySchoolID(id, { enable: true })
  );
};
