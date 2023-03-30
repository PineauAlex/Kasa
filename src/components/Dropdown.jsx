import { useState } from 'react';
import styled from 'styled-components';

import ArrowDown from '../assets/dropdown_arrow_open.png';

const DropdownHead = styled.div`
    width: auto;
    height: 30px;
    margin-top: 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    background: #FF6060;
    border-radius: 10px;
`

const DropdownHeadTitle = styled.h3`
    font-size: 13px;
    font-weight: normal;
    line-height: 142.6%;
    padding-left: 10px;
    color: #FFFFFF;
`

const DropdownHeadArrow = styled.img`
    height: 8px;
    padding-right: 10px;
`

const DropdownTextBackground = styled.div`
    margin-top: 0px;
    border-radius: 10px;
    margin-top: -20px;
    height: 140px;
    background: #F6F6F6;
    display: ${props => props.open};
`

const DropdownText = styled.p`
    font-size: 12px;
    font-weight: 300;
    margin: 0;
    padding: 35px 10px 0 10px;
    color: #FF6060;
`

function Dropdown() {

    const [isOpen, setIsOpen] = useState("none");
    function handleClick(event) {
        event.preventDefault();
        isOpen === "none" ? setIsOpen("block") : setIsOpen("none");
    }

    return (
        <>
            <DropdownHead onClick={handleClick}>
                <DropdownHeadTitle>Fiabilité</DropdownHeadTitle>
                <DropdownHeadArrow src={ArrowDown} />
            </DropdownHead>
            <DropdownTextBackground open={isOpen}>
                <DropdownText>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</DropdownText>
            </DropdownTextBackground>
        </>
    );
}

export default Dropdown;