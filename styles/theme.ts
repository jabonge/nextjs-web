import baseStyled, {
  css,
  ThemedStyledInterface,
  CSSProp
} from 'styled-components';

const sizes: { [key: string]: number } = {
  desktop: 1024,
  tablet: 768
};

type BackQuoteArgs = TemplateStringsArray;

interface Media {
  desktop: (args: BackQuoteArgs) => CSSProp | undefined;
  mobile: (args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  desktop: (_args: BackQuoteArgs) => undefined,
  mobile: (_args: BackQuoteArgs) => undefined
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (args: BackQuoteArgs) => css`
        @media only screen and (min-width: ${sizes.desktop}px) {
          ${args}
        }
      `;
      break;
    case 'mobile':
      acc.mobile = (args: BackQuoteArgs) => css`
        @media only screen and (min-width: ${sizes.mobile}px) {
          ${args}
        }
      `;
      break;
    default:
      break;
  }
  return acc;
}, media);

type CColor = { [key: string]: string };
const color: CColor = {
  blue: '#2054ae',
  pink: '#c43683',
  black: '#24272a'
};

const theme = {
  color,
  media
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
