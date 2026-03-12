import { useContext, useEffect, useMemo, type ReactNode } from 'react';
import { ConfigProvider } from 'antd';
import { MainContext } from '../MainProvider/MainContext';
import { SafeLocalStorage } from '@/utils/safeStorage';
import CONSTANTS from '@/utils/constants';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import type { ITheme } from '@/types/theme';
import { updateSelectedTheme } from '@/store/globalSlice';
import defaultTheme from '@/utils/defaultTheme';
import { useAppSelector } from '@/hooks/useAppSelector';

/**
 * Applies a theme palette to CSS custom properties on the document root.
 * Iterates each color group (e.g. "primary", "error") and its shades,
 * setting `--dyn-{group}-{shade}` variables so Tailwind can consume them
 * via the `@theme` mappings defined in main.css.
 * @param themeData The theme palette object (e.g. `theme.light` or `theme.dark`).
 */
function applyThemeToCssVars(themeData: ITheme) {
  const root = document.documentElement;
  for (const [group, shades] of Object.entries(themeData)) {
    if (typeof shades !== 'object' || shades === null) continue;
    for (const [shade, value] of Object.entries(shades)) {
      root.style.setProperty(`--dyn-${group}-${shade}`, value as string);
    }
  }
}

export default function ThemeConfigProvider({ children }: { children?: ReactNode }) {
  const dispatch = useAppDispatch();
  const themeData = useContext(MainContext)?.theme;
  const selectedTheme = useAppSelector(state => state.global.selectedTheme);

  useEffect(() => {
    const cachedTheme = SafeLocalStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.THEME, CONSTANTS.LOCAL_STORAGE_KEYS.THEME);

    if (cachedTheme) {
      // Theme exists in localStorage — restore it
      dispatch(updateSelectedTheme(cachedTheme));
    } else {
      // No theme cached — use default and persist it
      dispatch(updateSelectedTheme(CONSTANTS.DEFAULT_THEME));
      SafeLocalStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEYS.THEME, CONSTANTS.DEFAULT_THEME, CONSTANTS.LOCAL_STORAGE_KEYS.THEME);
    }
  }, [themeData, dispatch]);

  useEffect(() => {
    // TODO: optimize by only applying changed variables instead of the whole theme on every change
    applyThemeToCssVars(themeData?.[selectedTheme] ?? defaultTheme);
  }, [themeData, selectedTheme]);

  // custom antd theme tokens
  const antdTheme = useMemo(() => {
    if (!themeData || !selectedTheme) return {};

    return {
      token: {
        colorPrimary: themeData[selectedTheme]?.primary?.[500] ?? '#1890ff',
        colorError: themeData[selectedTheme]?.error?.[500] ?? '#ff4d4f',
        colorWarning: themeData[selectedTheme]?.warning?.[500] ?? '#faad14',
        colorSuccess: themeData[selectedTheme]?.success?.[500] ?? '#52c41a',
        colorInfo: themeData[selectedTheme]?.info?.[500] ?? '#1890ff',
      },
    };
  }, [themeData, selectedTheme]);

  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
}
