import { axiosInstance } from "@/configs/axiosInstance";
import { getPublicConfigs } from "@/utils/publicJson";

const commonAPIs = {
  whoami: async () => {
    return axiosInstance.get(`${(await getPublicConfigs()).API_ENDPOINT}/sessions/whoami`);
  },
};

export default commonAPIs;
