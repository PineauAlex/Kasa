import styled from 'styled-components';

import ImgBackground from '../assets/aboutPicture.jpg';

const AboutPictureMain = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    width: auto;
    height: 223px;
    margin: 20px;
    border-radius: 10px;

    overflow: hidden;
`
const AboutPictureImg = styled.img`
    width: 100%;
    height: 223px;

    object-fit: cover;
`

const AboutPictureEffect = styled.div`
    position: absolute;
    width: 100%;
    height: 223px;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.3;
`

function AboutPicture() {
    return (
        <AboutPictureMain>
            <AboutPictureImg src={ImgBackground} />
            <AboutPictureEffect />
        </AboutPictureMain>
    );
}

export default AboutPicture;