import styled from 'styled-components';

const TagBackground = styled.div`
    min-width: 84px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-content: center;

    background: #FF6060;
    border-radius: 10px;
`

const TagText = styled.h3`
    text-align: center;
    font-weight: 500;
    font-size: 10px;
    margin: 0 5px;
    align-self: center;

    color: #FFFFFF;
`


function Tag({ tagName }) {
    return (
        <TagBackground>
            <TagText>{tagName}</TagText>
        </TagBackground>
    );
}

export default Tag;