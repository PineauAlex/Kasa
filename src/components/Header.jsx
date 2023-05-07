import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../assets/logo_orange.png';

const HeaderMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 47px;
    background-color: white;
`

const HeaderLogo = styled.img`
    width: 145px;
`

const HeaderLinks = styled(Link)`
    text-transform: uppercase;
    font-size: 12px;
    padding-left: 20px;
    color: #FF6060;
    text-decoration: none;
    @media (min-width: 768px) {
        font-size: 18px;
        text-transform: none;
    }
    @media (min-width: 992px) {
        padding-left: 50px;
    }

    &:hover {
        text-decoration: underline;
    }
`

function Header() {
    return (
        <HeaderMain>
            <HeaderLogo src={Logo} alt='Logo de Kasa'></HeaderLogo>
            <div>
                <HeaderLinks to="/">Accueil</HeaderLinks>
                <HeaderLinks to="/about">A Propos</HeaderLinks>
            </div>
        </HeaderMain>
    );
}

export default Header;