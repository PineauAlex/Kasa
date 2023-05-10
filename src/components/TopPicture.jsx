import styled from 'styled-components';

const TopPictureMain = styled.div`
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
const TopPictureImg = styled.img`
    width: 100%;
    height: 111px;
    object-fit: cover;

    @media (min-width: 992px) {
        height: 160px;
    }
`

const TopPictureEffect = styled.div`
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

const TopPictureText = styled.h2`
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

function TopPicture({ text, image }) {
    return (
        <TopPictureMain>
            <TopPictureImg src={image} alt="Image d'un paysage" />
            <TopPictureEffect />
            <TopPictureText>{text}</TopPictureText>
        </TopPictureMain>
    );
}

export default TopPicture;