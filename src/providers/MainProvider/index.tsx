import { fetchPublicJson } from "@/utils/publicConfig";
import type { IPublicConfig } from "@/types/common";
import type { IThemeContext } from "@/types/theme";
import { type ReactNode, useEffect, useState } from "react";
import { MainContext } from "./MainContext";

export default function MainProvider({ children }: { children?: ReactNode }) {
  const [publicConfig, setPublicConfig] = useState<IPublicConfig | null>(null);
  const [theme, setTheme] = useState<IThemeContext | null>(null);

  useEffect(() => {
    Promise.all([fetchPublicJson<IPublicConfig>("config.json"), fetchPublicJson<IThemeContext>("themes.json")]).then(([config, themeData]) => {
      setPublicConfig(config ?? { API_ENDPOINT: "" });
      setTheme(themeData ?? {});
    });
  }, []);

  const isLoading = publicConfig === null || theme === null;

  if (isLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-primary-500" />
      </div>
    );
  }

  return <MainContext.Provider value={{ publicConfig, theme }}>{children}</MainContext.Provider>;
}
