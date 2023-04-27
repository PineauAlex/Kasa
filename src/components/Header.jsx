import { Link } from 'react-router-dom'
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
    font-size: 12px;
    padding-left: 20px;
    color: #FF6060;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

function Header() {
    return (
        <HeaderMain>
            <HeaderLogo src={Logo}></HeaderLogo>
            <div>
                <HeaderLinks to="/">ACCUEIL</HeaderLinks>
                <HeaderLinks to="/about">A PROPOS</HeaderLinks>
            </div>
        </HeaderMain>
    );
}

export default Header;