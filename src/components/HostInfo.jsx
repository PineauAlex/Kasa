import styled from 'styled-components';

const InfoDisplay = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    max-width: 140px;
`

const ProfilePicture = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    background-color: black;
    border-radius: 20px;
`

const HostName = styled.p`
    font-size: 16px;
    color: #FF6060;
    text-align: right;
`


function HostInfo({ name, picture }) {
    return (
        <InfoDisplay>
            <HostName>{name}</HostName>
            <ProfilePicture src={picture} alt="Photo de l'utilisateur" />
        </InfoDisplay>
    );
}

export default HostInfo;