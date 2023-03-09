import { Link } from 'react-router-dom'
import styled from 'styled-components';

import LogoOrange from '../assets/logo_orange.png';

const HeaderMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: auto;
    height: 47px;
    padding: 20px;
    background-color: white;
`

const HeaderLogo = styled.img`
    width: 150px;
`

const HeaderLinks = styled(Link)`
    font-size: 16px;

    padding-right: 20px;

    color: #FF6060;
`

function Header() {
    return (
        <HeaderMain>
            <HeaderLogo src={LogoOrange}></HeaderLogo>
            <div>
                <HeaderLinks to="/">ACCUEIL</HeaderLinks>
                <HeaderLinks to="/about">A PROPOS</HeaderLinks>
            </div>
        </HeaderMain>
    );
}

export default Header;