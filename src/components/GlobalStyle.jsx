import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }

    h2 {
        font-weight: normal;
    }

    .body-content {
        @media (max-width: 991px) {
            padding: 20px;
        }
        @media (min-width: 992px) {
            padding: 20px 100px;
        }
    }
`

export default GlobalStyle;