import type { ITheme } from '@/types/theme';
import type { ThemeConfig } from 'antd';

export function initAntdTheme(themeData: ITheme): ThemeConfig {
  const antdThemeConfig: ThemeConfig = {
    token: {
      colorPrimary: themeData.primary?.[500] ?? '#1890ff',
    },
  };
  return antdThemeConfig;
}
