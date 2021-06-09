import { Theme } from '~/styles';

type ThemeInterface = typeof Theme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
