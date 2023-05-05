import styled from 'styled-components';

const Title = styled.h2`
    color: #FF6060;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 8px;
`

const Location = styled.h3`
    color: #FF6060;
    font-size: 16px;
    font-weight: 500;
    margin-top: 0;
`


function HousingLocation({ title, location }) {
    return (
        <>
            <Title>{title}</Title>
            <Location>{location}</Location>
        </>
    );
}

export default HousingLocation;