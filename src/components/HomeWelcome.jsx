import styled from 'styled-components';

import ImgBackground from '../assets/welcome.jpg';

const WelcomeMain = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    width: auto;
    height: 111px;
    margin: 20px;
    border-radius: 10px;

    overflow: hidden;
`
const WelcomeImg = styled.img`
    width: 100%;
    height: 111px;

    object-fit: cover;
`

const WelcomeImgEffect = styled.div`
    position: absolute;
    width: 100%;
    height: 111px;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.3;
`

const WelcomeText = styled.h2`
    position: absolute;
    z-index: 10;
    max-width: 217px;
    margin-left: 16px;
    
    font-size: 24px;
    color: white;
`

function HomeWelcome() {
    return (
        <WelcomeMain>
            <WelcomeImg src={ImgBackground} />
            <WelcomeImgEffect />
            <WelcomeText>Chez vous, partout et ailleurs</WelcomeText>
        </WelcomeMain>
    );
}

export default HomeWelcome;