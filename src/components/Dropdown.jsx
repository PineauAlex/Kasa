import styled from 'styled-components';

const DropdownBase = styled.div`
    position: absolute;
    width: 582px;
    height: 52px;

    background: #FF6060;
    border-radius: 10px;
`

const DropdownArrow = styled.img`
    position: absolute;
    left: 92.96%;
    right: 1.55%;
    top: 80.77%;
    bottom: -42.31%;

    transform: rotate(-90deg);
`

const DropdownText = styled.h3`
    position: absolute;
    left: 3.44%;
    right: 75.26%;
    top: 25%;
    bottom: 25%;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 142.6%;

    /* identical to box height, or 26px */
    display: flex;
    align-items: center;

    color: #FFFFFF;
`

function Dropdown() {
    return (
        <DropdownBase>
            <DropdownArrow>
                <DropdownText>Équipements</DropdownText>
            </DropdownArrow>
        </DropdownBase>
    );
}

export default Dropdown;