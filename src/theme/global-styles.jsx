// Dependencies
import { createGlobalStyle } from 'styled-components';

import styles from 'assets/styles/destyle.scss';

// Media queries
import { device } from './device';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  @media ${device.tablet} {
    html {
      font-size: 20px;
    }
  }

  @media ${device.laptop} {
    html {
      font-size: 24px;
    }
  }

  @media ${device.desktop} {
    html {
      font-size: 28px;
    }
  }
`;

export default GlobalStyle;
