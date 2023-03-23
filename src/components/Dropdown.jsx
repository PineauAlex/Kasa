import styled from 'styled-components';

import ArrowDown from '../assets/dropdown_arrow_close.png';

const DropdownBase = styled.div`
    width: auto;
    height: 30px;
    margin: 20px;

    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;

    background: #FF6060;
    border-radius: 10px;
`

const DropdownArrow = styled.img`
    height: 8px;
    padding-right: 10px;
`

const DropdownText = styled.h3`
    font-size: 13px;
    font-weight: normal;
    line-height: 142.6%;
    padding-left: 10px;

    color: #FFFFFF;
`

function Dropdown() {
    return (
        <DropdownBase>
            <DropdownText>Fiabilité</DropdownText>
            <DropdownArrow src={ArrowDown} />
        </DropdownBase>
    );
}

export default Dropdown;