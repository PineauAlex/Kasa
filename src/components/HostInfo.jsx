import styled from 'styled-components';

const InfoDisplay = styled.div`
    display: flex;
    justify-content: right;
`

const ProfilePicture = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 10px;
`

const HostName = styled.p`
    color: #FF6060;
`


function HostInfo({ name, picture }) {
    return (
        <InfoDisplay>
            <HostName>{name}</HostName>
            <ProfilePicture src={picture} />
        </InfoDisplay>
    );
}

export default HostInfo;