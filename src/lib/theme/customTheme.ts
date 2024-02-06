interface IColorState {
  enabled?: string;
  hover?: string;
  active?: string;
}

interface ITextColorState extends IColorState {
  main?: string;
  secondary?: string;
  disabled?: string;
}

interface IColorGroup {
  calm: IColorState;
  loud: IColorState;
  border?: {
    enabled: string;
  };
}

interface IThemeColors {
  bg: {
    calm: {
      section: string;
      global: string;
      disabled: string;
    };
  };
  text: {
    calm: {
      main: string;
    };
    loud: ITextColorState;
  };
  lead: IColorGroup;
  accent: {
    [key: string]: IColorGroup;
  };
}

interface IThemeSpacing {
  [key: string]: any;
}

interface IThemeFont {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  base: string;
  small: string;
}
interface IThemeFontWeight {
  regular: string;
  medium: string;
  semiBold: string;
}
export interface IThemeTypography {
  family: {
    base: string;
    heading: string;
    monospace: string;
  };
  fontSize: IThemeFont;
  lineHeight: Partial<IThemeFont>;
  fontWeight: Partial<IThemeFontWeight>;
}

export type TypographyProperty = keyof IThemeTypography;

interface IThemeShadows {
  focus: string;
}

export interface ITheme {
  colors: IThemeColors;
  spacing: IThemeSpacing;
  typography: IThemeTypography;
  shadows: IThemeShadows;
  cornerRadius: { [key: string]: any };
  zIndices: { [key: string]: any };
  animation: { [key: string]: any };
}
