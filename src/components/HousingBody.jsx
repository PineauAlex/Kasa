import styled from 'styled-components';

import HousingInfo from '../components/HousingInfo';
import HousingRate from '../components/HousingRate';

const HousingBodyMain = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
    }
`


function HousingBody() {
    return (
        <HousingBodyMain>
            <HousingInfo />
            <HousingRate />
        </HousingBodyMain>
    );
}

export default HousingBody;