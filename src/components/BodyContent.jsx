import styled from 'styled-components';

const PaddingBody = styled.div`
    padding: 20px;
    
    @media (min-width: 992px) {
        padding: 20px 100px;
    }
`


function BodyContent( {children} ) {
    return (
        <PaddingBody>{children}</PaddingBody>
    );
}

export default BodyContent;