import { useQuery } from "@tanstack/react-query";
import { getUser } from "../lib/api";
import { UserResponseType } from "../types";

export const AUTH = "auth";

const useAuth = (opts = {}) => {
  const data = useQuery<any>({
    queryKey: [AUTH],
    queryFn: getUser,
    staleTime: Infinity,
    ...opts,
  });

  return data;
};

export default useAuth;
