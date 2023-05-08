import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Dropdown from '../components/Dropdown';

const logementsList = require('../datas/logements.json');

const HousingBodyMain = styled.div`    
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: 2fr 2fr;
        grid-gap: 50px;
    }
`


function HousingBody() {
    const [selectedLoge, setSelectedLoge] = useState({equipments:[]});

    let { logementId } = useParams();
    useEffect(() => {
        const logement = logementsList.find(loge => loge.id === logementId);
        setSelectedLoge(logement);
    });

    return (
        <HousingBodyMain>
            <Dropdown title="Description" text={selectedLoge.description} />
            <Dropdown title="Équipements" text={selectedLoge.equipments} />
        </HousingBodyMain>
    );
}

export default HousingBody;