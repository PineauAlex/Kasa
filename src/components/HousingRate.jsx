import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Rating from '../components/Rating';
import HostInfo from '../components/HostInfo';

const logementsList = require('../datas/logements.json');


const HousingRateMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    @media (min-width: 768px) {
        flex-direction: column-reverse;
        justify-content: flex-end;
        align-content: flex-end;
    }
`


function HousingRate() {
    const [selectedLoge, setSelectedLoge] = useState({host:{}});

    let { logementId } = useParams();
    useEffect(() => {
        const logement = logementsList.find(loge => loge.id === logementId);
        setSelectedLoge(logement);
    });

    return (
        <HousingRateMain>
            <Rating stars={selectedLoge.rating} />
            <HostInfo name={selectedLoge.host.name} picture={selectedLoge.host.picture} />
        </HousingRateMain>
    );
}

export default HousingRate;