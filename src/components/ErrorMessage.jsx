import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ErrorMessageMain = styled.div`
    text-align: center;
    color: #FF6060;
`

const ErrorCode = styled.h2`
    font-size: 96px;
    font-weight: bold;
    margin-top: 200px;
    margin-bottom: 0;

    @media (min-width: 992px) {
        font-size: 152px;
    }
`

const ErrorText = styled.p`
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 100px;

    @media (min-width: 992px) {
        font-size: 24px;
    }
`

const ErrorLink = styled(Link)`
    font-size: 12px;

    &:visited {
        color: #FF6060;
    }

    @media (min-width: 992px) {
        font-size: 16px;
    }
`

function ErrorMessage() {
    return (
        <ErrorMessageMain>
            <ErrorCode>404</ErrorCode>
            <ErrorText>Oups! La page que vous demandez n'existe pas.</ErrorText>
            <ErrorLink to="/">Retourner sur la page d’accueil</ErrorLink>
        </ErrorMessageMain>
    );
}

export default ErrorMessage;