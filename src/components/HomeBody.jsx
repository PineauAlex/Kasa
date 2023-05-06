import styled from 'styled-components';

import Card from '../components/Card';

const logementsList = require('../datas/logements.json');

const AboutBodyMain = styled.div`
    width: 100%;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: calc(100% - 40px);
        border-radius: 10px;
        padding: 20px;
        background-color: #F6F6F6;
    }
`


function HomeBody() {
    return (
        <AboutBodyMain>
            {logementsList.map((logement) => (
                <Card key={logement.id} title={logement.title} image={logement.cover} />
            ))}
        </AboutBodyMain>
    );
}

export default HomeBody;