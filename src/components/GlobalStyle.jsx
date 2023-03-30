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
        padding: 20px;
    }
`

export default GlobalStyle;