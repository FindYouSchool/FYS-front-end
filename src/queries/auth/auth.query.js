import { useQuery } from "react-query";
import { login, logout, signUp } from "./auth.service";

// QUERIES

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
export const useLogout = () => {
  return useQuery(["logout"], async () => await logout(), {
    enabled: false,
  });
};

export const useSignUp = (credentials) => {
  return useQuery(
    ["sign-up", credentials],
    async () => await signUp(credentials),
    {
      enabled: false,
      suspense: true,
    }
  );
};
