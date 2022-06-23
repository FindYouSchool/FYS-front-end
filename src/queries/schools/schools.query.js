import { useQuery } from "react-query";
import { useAuth } from "../../contexts/AuthContext";
import { fetchSchools } from "./schools.service";

export const useSchools = (params) => {
  const { token } = useAuth();
  return useQuery(
    ["schools", params],
    async () =>
      await fetchSchools({ params, token }, { enable: false, retryDelay: 500 })
  );
};
