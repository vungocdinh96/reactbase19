export interface ColorPalette {
  [shade: string]: string;
}

export interface ITheme {
  primary: ColorPalette;
  secondary: ColorPalette;
  neutral: ColorPalette;
  success: ColorPalette;
  error: ColorPalette;
  info: ColorPalette;
  warning: ColorPalette;
  [key: string]: string | number | boolean | ColorPalette | undefined;
}

export interface IThemeContext {
  [theme: string]: ITheme | undefined;
}
