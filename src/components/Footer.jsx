import styled from 'styled-components';

import LogoK from '../assets/logo_blanc.png';

const FooterBackground = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
    height: 209px;
    
    background: #000000;
`
const FooterLogoK = styled.img`
    background: #FFFFFF;
`


function Footer() {
    return (
        <FooterBackground>
            <FooterLogoK src={LogoK}>
            </FooterLogoK>
        </FooterBackground>
    );
}

export default Footer;