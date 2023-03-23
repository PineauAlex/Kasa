const logementsList = require('../datas/logements.json');

function CardExample(props) {
    return (
        /*
        <>
        {logementsList.map((logement) => {
            <>
            <CardImage key={logement.id}>
                <img src={logement.cover} />
                <CardShadow />
                <CardText>
                    {logement.title}
                <CardText />
            <CardImage />
            </>
        })}
        </>
        */
        <div>
            <p>Logement</p>
            {props.children}
        </div>
    );
}

export default CardExample;