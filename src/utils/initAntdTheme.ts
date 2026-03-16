import type { ITheme } from "@/types/theme";
import type { ThemeConfig } from "antd";

export function initAntdTheme(themeData: ITheme): ThemeConfig {
  const antdThemeConfig: ThemeConfig = {
    token: {},

    components: {
      Button: {
        borderRadius: themeData.borderRadiusButton as number,
      },
    },
  };
  return antdThemeConfig;
}
