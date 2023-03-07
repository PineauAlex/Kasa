import styled from 'styled-components';

const TagBackground = styled.div`
    position: absolute;
    width: 115px;
    height: 25px;

    background: #FF6060;
    border-radius: 10px;
`

const TagText = styled.div`
    position: absolute;
    left: 19.13%;
    right: 19.13%;
    top: 12%;
    bottom: 8%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 142.6%;
    text-align: center;

    color: #FFFFFF;
`


function Tag() {
    return (
        <TagBackground>
            <TagText>Tag-Name</TagText>
        </TagBackground>
    );
}

export default Tag;