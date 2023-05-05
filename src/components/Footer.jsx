import styled from 'styled-components';

import Logo from '../assets/logo_white.png';

const FooterBackground = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 209px;
    background: black;
    margin-top: 50px;
`
const FooterLogo = styled.img`
    width: 122px;
    padding-bottom: 5px;
`

const FooterText = styled.p`
    font-size: 12px;
    color: white;
    padding-top: 5px;
`


function Footer() {
    return (
        <FooterBackground>
            <FooterLogo src={Logo} alt='Logo de Kasa' />
            <FooterText>© 2020 Kasa. All rights reserved</FooterText>
        </FooterBackground>
    );
}

export default Footer;