import styled from 'styled-components';
import { useState } from 'react';

import Arrow from '../assets/arrow.png';

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

    @media (min-width: 768px) {
        height: 40px;
    }
`

const HousingPictureArrowLeft = styled.img`
    transform: rotate(270deg);

    &:hover {
        cursor: pointer;
    }
`
const HousingPictureArrowRight = styled.img`
    transform: rotate(90deg);

    &:hover {
        cursor: pointer;
    }
`

const HousingPictureText = styled.p`
    position: absolute;
    text-align: center;
    margin-top: 220px;
    width: 100%;
    color: white;
`

function HousingPictures({ pictures }) {

    const totalPictures = (pictures.length - 1);
    const [currentImage, setCurrentImage] = useState(0);

    function previousImg(event) {
        event.preventDefault();
        setCurrentImage(currentImage - 1);
        if (currentImage <= 0) {
            setCurrentImage(totalPictures);
        }
    }
    function nextImg(event) {
        event.preventDefault();
        setCurrentImage(currentImage + 1);
        if (currentImage >= totalPictures) {
            setCurrentImage(0);
        }
    }

    return (
        <HousingPictureMain>
            <HousingPictureImg src={pictures[currentImage]} alt="Image de l'appartement" />
            <HousingPictureSelect>
                <HousingPictureArrowLeft src={Arrow} onClick={previousImg} />
                <HousingPictureArrowRight src={Arrow} onClick={nextImg} />
            </HousingPictureSelect>
            <HousingPictureText>{currentImage + 1}/{totalPictures + 1}</HousingPictureText>
        </HousingPictureMain>
    );
}

export default HousingPictures;