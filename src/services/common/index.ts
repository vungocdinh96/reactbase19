import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import commonAPIs from "./common-apis";
import type { IWhoami } from "@/types/common";

const commonService = {
  useWhoami: (enabled?: boolean) => {
    return useQuery<AxiosResponse<IWhoami>>({
      queryKey: ["whoami"],
      queryFn: () => commonAPIs.whoami(),
      enabled: enabled,
    });
  },
};

export default commonService;
