import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @font-face {
      font-family: "Vazir";
      src: url("../fonts/Vazir.eot");
      src: url("../fonts/Vazir.eot?#iefix") format("embedded-opentype"),
        url("./fonts/Vazir.woff2") format("woff2"),
        url("./fonts/Vazir.woff") format("woff"),
        url("./fonts/Vazir.ttf") format("truetype");
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
      `}
  />
);

export default Fonts;
