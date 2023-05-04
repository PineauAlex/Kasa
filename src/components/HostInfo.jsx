import styled from 'styled-components';

const InfoDisplay = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
`

const ProfilePicture = styled.img`
    width: 40px;
    height: 40px;
    margin-left: 10px;
    background-color: black;
    border-radius: 20px;
`

const HostName = styled.p`
    font-size: 14px;
    color: #FF6060;
    text-align: right;
    word-spacing: 99999px;
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