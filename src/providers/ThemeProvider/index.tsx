import { useContext, useEffect, useMemo, type ReactNode } from 'react';
import { ConfigProvider, type ThemeConfig } from 'antd';
import { MainContext } from '../MainProvider/MainContext';
import { SafeLocalStorage } from '@/utils/safeStorage';
import CONSTANTS from '@/utils/constants';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import type { ColorPalette, ITheme, IThemeContext } from '@/types/theme';
import { updateSelectedTheme } from '@/store/globalSlice';
import defaultTheme from '@/utils/defaultTheme';
import { useAppSelector } from '@/hooks/useAppSelector';
import { initAntdTheme } from '@/utils/initAntdTheme';

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

/**
 * Builds a merged theme by combining the default theme with overrides from the theme context.
 * For each color group declared in the selected theme, individual shades are deep-merged
 * on top of the corresponding default group — only explicitly declared shades are overridden.
 * @param themeContext - The full theme context object containing all named theme variants.
 * @param selectedTheme - The key of the active theme variant (e.g. `"light"`, `"dark"`).
 * @returns A complete `ITheme` object with default values filled in for any missing shades.
 */
function buildMergedTheme(themeContext: IThemeContext, selectedTheme: string): ITheme {
  const themeData = themeContext?.[selectedTheme];
  const mergedTheme: ITheme = { ...defaultTheme };

  if (themeData) {
    for (const [group, value] of Object.entries(themeData)) {
      if (typeof value === 'object' && value !== null) {
        mergedTheme[group] = { ...((defaultTheme as Record<string, ColorPalette>)[group] ?? {}), ...(value as ColorPalette) };
      }
    }
  }

  return mergedTheme;
}

export default function ThemeConfigProvider({ children }: { children?: ReactNode }) {
  const dispatch = useAppDispatch();
  const mainContext = useContext(MainContext);
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
  }, [dispatch]);

  // Build the merged theme object based on context and selected theme
  const mergedTheme = useMemo(() => buildMergedTheme(mainContext.theme, selectedTheme), [mainContext.theme, selectedTheme]);

  // Whenever the merged theme changes, apply it to CSS variables
  useEffect(() => {
    applyThemeToCssVars(mergedTheme);
  }, [mergedTheme]);

  // Generate the Ant Design theme configuration based on the merged theme
  const antdTheme: ThemeConfig = useMemo(() => initAntdTheme(mergedTheme), [mergedTheme]);

  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
}
