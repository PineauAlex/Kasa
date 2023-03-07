import styled from 'styled-components';

import LogoK from '../assets/Logo_Orange.png';

const HeaderMain = styled.div`
    display: flex;
    justify-content: space-between;

    width: auto;
    height: 47px;
    padding: 20px;
    background-color: red;
`

const HeaderLogoK = styled.img`
    width: 150px;
`

function Header() {
    return (
        <HeaderMain>
            <HeaderLogoK src={LogoK}>
            </HeaderLogoK>
        </HeaderMain>
    );
}

export default Header;