import styled from 'styled-components';

const CardMain = styled.div`
    position: relative;
    display: flex;
    width: auto;
    height: 255px;
    background: #FF6060;
    border-radius: 10px;
    margin-bottom: 20px;
`

const CardImage = styled.img`
    width: 100%;
    height: 255px;
    object-fit: cover;
    border-radius: 10px;
`

const CardShadow = styled.div`
    position: absolute;
    width: auto;
    height: 255px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    border-radius: 10px;
`

const CardText = styled.h3`
    position: absolute;
    left: 20px;
    right: 20px;
    top: 85%;
    bottom: 20px;
    font-weight: normal;
    font-size: 18px;
    line-height: 142.6%;
    display: flex;
    align-items: flex-end;
    color: white;
`

function Card({ title, image }) {
    return (
        <CardMain>
            <CardImage src={image} alt="Image de l'appartement" />
            <CardShadow />
            <CardText>{title}</CardText>
        </CardMain>
    );
}

export default Card;