import styled from 'styled-components';

import ImgBackground from '../assets/homePicture.jpg';

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
    
    @media (min-width: 992px) {
        height: 160px;
    }
`
const HomePictureImg = styled.img`
    width: 100%;
    height: 111px;
    object-fit: cover;

    @media (min-width: 992px) {
        height: 160px;
    }
`

const HomePictureEffect = styled.div`
    position: absolute;
    width: 100%;
    height: 111px;
    top: 0;
    left: 0;
    background-color: black;
    opacity: 0.3;

    @media (min-width: 992px) {
        height: 160px;
    }
`

const HomePictureText = styled.h2`
    position: absolute;
    z-index: 10;
    max-width: 217px;
    margin-left: 16px;
    font-size: 24px;
    color: white;

    @media (min-width: 768px) {
        text-align: center;
        margin-left: calc(50% - 225px);
        max-width: 100%;
        font-size: 32px;
    }
`

function HomePicture() {
    return (
        <HomePictureMain>
            <HomePictureImg src={ImgBackground} alt="Image d'un paysage" />
            <HomePictureEffect />
            <HomePictureText>Chez vous, partout et ailleurs</HomePictureText>
        </HomePictureMain>
    );
}

export default HomePicture;