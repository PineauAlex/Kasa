import styled from 'styled-components';
import { useState } from 'react';

import Arrow from '../assets/arrow.png';
import ImgBackground from '../assets/homePicture.jpg';

const HousingPictureMain = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    width: auto;
    height: 255px;
    margin: 20px 0;
    border-radius: 10px;

    overflow: hidden;
`

const HousingPictureImg = styled.img`
    width: 100%;
    height: 255px;

    object-fit: cover;
`

const HousingPictureSelect = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    height: 14px;
    width: calc(100% - 20px);
    padding: 0 10px;
`

const HousingPictureArrowLeft = styled.img`
    transform: rotate(270deg);
`
const HousingPictureArrowRight = styled.img`
    transform: rotate(90deg);
`

function HousingPictures({ pictures }) {

    const [currentImage, setCurrentImage] = useState(0);

    function previousImg(event) {
        event.preventDefault();
        setCurrentImage(currentImage--);
    }
    function nextImg(event) {
        event.preventDefault();
        setCurrentImage(currentImage++);
    }

    return (
        <HousingPictureMain>
            <HousingPictureImg src={ImgBackground} />
            <HousingPictureSelect>
                <HousingPictureArrowLeft src={Arrow} onClick={previousImg} />
                <HousingPictureArrowRight src={Arrow} onClick={nextImg} />
            </HousingPictureSelect>
        </HousingPictureMain>
    );
}

export default HousingPictures;