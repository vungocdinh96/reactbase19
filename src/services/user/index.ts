import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import userAPIs from "./user-apis";
import type { IUser, ICreateUserPayload, IUpdateUserPayload } from "@/types/user";

const USER_QUERY_KEY = "users";

const userService = {
  useGetList: (enabled?: boolean) => {
    return useQuery<AxiosResponse<IUser[]>>({
      queryKey: [USER_QUERY_KEY],
      queryFn: () => userAPIs.getList(),
      enabled,
    });
  },

  useGetById: (id: string, enabled?: boolean) => {
    return useQuery<AxiosResponse<IUser>>({
      queryKey: [USER_QUERY_KEY, id],
      queryFn: () => userAPIs.getById(id),
      enabled,
    });
  },

  useCreate: () => {
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse<IUser>, Error, ICreateUserPayload>({
      mutationFn: payload => userAPIs.create(payload),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      },
    });
  },

  useUpdate: () => {
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse<IUser>, Error, { id: string; payload: IUpdateUserPayload }>({
      mutationFn: ({ id, payload }) => userAPIs.update(id, payload),
      onSuccess: (_data, { id }) => {
        queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
        queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY, id] });
      },
    });
  },

  useRemove: () => {
    const queryClient = useQueryClient();
    return useMutation<AxiosResponse<void>, Error, string>({
      mutationFn: id => userAPIs.remove(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY] });
      },
    });
  },
};

export default userService;
