import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import HousingLocation from '../components/HousingLocation';
import TagContent from '../components/TagContent';

const logementsList = require('../datas/logements.json');


const HousingInfoMain = styled.div`
    display: flex;
    flex-direction: column;
`


function HousingInfo() {
    const [selectedLoge, setSelectedLoge] = useState({tags:[]});

    let { logementId } = useParams();
    useEffect(() => {
        const logement = logementsList.find(loge => loge.id === logementId);
        setSelectedLoge(logement);
    });

    return (
        <HousingInfoMain>
            <HousingLocation title={selectedLoge.title} location={selectedLoge.location} />
            <TagContent tags={selectedLoge.tags} />
        </HousingInfoMain>
    );
}

export default HousingInfo;