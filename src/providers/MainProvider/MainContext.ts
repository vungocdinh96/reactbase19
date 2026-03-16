import React from "react";
import type { IPublicConfig } from "@/types/common";
import type { IThemeContext } from "@/types/theme";

export interface IMainContext {
  publicConfig: IPublicConfig;
  theme: IThemeContext;
}

export const MainContext = React.createContext<IMainContext>({ publicConfig: { API_ENDPOINT: "" }, theme: {} });
