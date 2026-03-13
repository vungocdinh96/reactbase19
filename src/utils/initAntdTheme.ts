import type { ITheme } from '@/types/theme';
import type { ThemeConfig } from 'antd';

export function initAntdTheme(themeData: ITheme): ThemeConfig {
  const antdThemeConfig: ThemeConfig = {
    token: {},

    components: {
      Button: {
        colorBgContainer: themeData.colorBgContainerButton as string,
        colorPrimary: themeData.colorBgPrimaryButton as string,
        primaryColor: themeData.colorTextPrimaryButton as string,
        colorPrimaryHover: themeData.colorBgHoverPrimaryButton as string,
        colorPrimaryTextHover: themeData.colorTextHoverPrimaryButton as string,
        colorLink: themeData.colorBgPrimaryButton as string,
        colorLinkHover: themeData.colorLinkHoverButton as string,
        borderRadius: themeData.borderRadiusButton as number,
        colorPrimaryActive: '#007FCE',
      },
    },
  };
  return antdThemeConfig;
}
