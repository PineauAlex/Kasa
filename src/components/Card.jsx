import styled from 'styled-components';

const logementsList = require('../datas/logements.json');

const CardImage = styled.div`
    width: 340px;
    height: 340px;

    background: #FF6060;
    border-radius: 10px;
`

const CardShadow = styled.div`
    position: absolute;
    width: 340px;
    height: 340px;
    
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
        <>
        {/* {logementsList.map((logement) => (
            <>
            <CardImage key={logement.id}>
                <img src={logement.cover} />
                <CardShadow />
                <CardText>
                    {logement.title}
                <CardText />
            <CardImage />
            </>
        ))} */}
        </>
    );
}

export default Card;