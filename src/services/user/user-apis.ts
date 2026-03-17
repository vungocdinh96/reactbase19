import { axiosInstance } from "@/configs/axiosInstance";
import { getPublicConfigs } from "@/utils/publicJson";
import type { ICreateUserPayload, IUpdateUserPayload } from "@/types/user";

const userAPIs = {
  getList: async () => {
    return axiosInstance.get(`${(await getPublicConfigs()).API_ENDPOINT}/users`);
  },

  getById: async (id: string) => {
    return axiosInstance.get(`${(await getPublicConfigs()).API_ENDPOINT}/users/${id}`);
  },

  create: async (payload: ICreateUserPayload) => {
    return axiosInstance.post(`${(await getPublicConfigs()).API_ENDPOINT}/users`, payload);
  },

  update: async (id: string, payload: IUpdateUserPayload) => {
    return axiosInstance.put(`${(await getPublicConfigs()).API_ENDPOINT}/users/${id}`, payload);
  },

  remove: async (id: string) => {
    return axiosInstance.delete(`${(await getPublicConfigs()).API_ENDPOINT}/users/${id}`);
  },
};

export default userAPIs;
