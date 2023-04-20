import styled from 'styled-components';

const HousingInfoTitle = styled.h2`
    color: #FF6060;
    font-size: 20px;
    font-weight: 500;
`

const HousingInfoLieu = styled.h3`
    color: #FF6060;
    font-size: 16px;
    font-weight: 500;
`


function HousingInfo({ title, location }) {
    return (
        <>
            <HousingInfoTitle>{title}</HousingInfoTitle>
            <HousingInfoLieu>{location}</HousingInfoLieu>
        </>
    );
}

export default HousingInfo;