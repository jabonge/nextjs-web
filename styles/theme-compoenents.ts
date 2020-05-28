import * as styledComponents from 'styled-components';
import { Theme } from './theme';

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  ServerStyleSheet
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, keyframes, ThemeProvider, ServerStyleSheet };

export default styled;
