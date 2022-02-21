import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle(
  ({ theme: { defaultFont, colors } }) => css`
    body {
      font-family: '${defaultFont}';
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background: ${colors.whiteBody};
      color: ${colors.black1};
      font-weight: 300;
      font-size: 18px;
      overflow-x: hidden;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/Gilroy-Bold.ttf') format('opentype');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/Gilroy-Medium.ttf') format('opentype');
        font-weight: 500;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/Gilroy-Regular.ttf') format('opentype');
        font-weight: 400;
    }

    @font-face {
        font-family: 'Gilroy';
        src: url('/Gilroy-Light.ttf') format('opentype');
        font-weight: 300;
    }
  `
);

export default GlobalStyle

