import styled from 'styled-components';

const LineStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


function LineBlock({ children }) {
    return (
        <LineStyle>{children}</LineStyle>
    );
}

export default LineBlock;