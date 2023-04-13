import styled from 'styled-components';

const HousingInfoTitle = styled.h3`
    color: #FF6060;
    font-size: 20px;
    font-weight: normal;
`

const HousingInfoLieu = styled.p`
    color: #FF6060;
    font-size: 16px;
`


function HousingInfo() {
    return (
        <>
            <HousingInfoTitle>Titre</HousingInfoTitle>
            <HousingInfoLieu>Ville, Pays</HousingInfoLieu>
        </>
    );
}

export default HousingInfo;