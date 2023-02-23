import styled from 'styled-components';

const CardImage = styled.div`
    position: absolute;
    width: 340px;
    height: 340px;

    background: #FF6060;
    border-radius: 10px;
`

const CardShadow = styled.div`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    border-radius: 10px;
`

const CardText = styled.h3`
    position: absolute;
    left: 5.88%;
    right: 5.88%;
    top: 78.82%;
    bottom: 5.88%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;

    display: flex;
    align-items: flex-end;

    color: #FFFFFF;
`

function Card() {
    return (
        <CardImage>
            <CardShadow>
                <CardText>Titre de la location</CardText>
            </CardShadow>
        </CardImage>
    );
}

export default Card;