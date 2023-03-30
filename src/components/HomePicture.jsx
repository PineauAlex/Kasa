import styled from 'styled-components';

import ImgBackground from '../assets/welcome.jpg';

const HomePictureMain = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    width: auto;
    height: 111px;
    margin: 20px 0;
    border-radius: 10px;

    overflow: hidden;
`
const HomePictureImg = styled.img`
    width: 100%;
    height: 111px;

    object-fit: cover;
`

const HomePictureEffect = styled.div`
    position: absolute;
    width: 100%;
    height: 111px;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.3;
`

const HomePictureText = styled.h2`
    position: absolute;
    z-index: 10;
    max-width: 217px;
    margin-left: 16px;
    
    font-size: 24px;
    color: white;
`

function HomePicture() {
    return (
        <HomePictureMain>
            <HomePictureImg src={ImgBackground} />
            <HomePictureEffect />
            <HomePictureText>Chez vous, partout et ailleurs</HomePictureText>
        </HomePictureMain>
    );
}

export default HomePicture;