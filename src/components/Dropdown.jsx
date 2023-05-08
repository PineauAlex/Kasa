import { useState } from 'react';
import styled from 'styled-components';

import Arrow from '../assets/arrow.png';

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
    font-size: 14px;
    font-weight: normal;
    line-height: 142.6%;
    padding-left: 10px;
    color: #FFFFFF;
`

const DropdownHeadArrow = styled.img`
    height: 8px;
    ${props => props.open ? `transform: rotate(180deg); padding-left: 10px;` : `transform: rotate(0); padding-right: 10px;`}
    transition: all 0.5s ease-out;
`

const DropdownTextBackground = styled.div`
    background: #F6F6F6;
    border-radius: 10px;
    ${props => props.open ? "margin-top: -20px; height: 100%;" : "margin-top: 0; height: 0;"}
    transition: all 0.5s ease-out;

    ul {
        margin: 0;
        padding: ${props => props.open ? "35px" : "0"} 10px 10px 10px;
        list-style-type: none;
        transition: all 0.5s ease-out;
    }
`
// 140px

const DropdownText = styled.p`
    font-size: 14px;
    font-weight: 300;
    margin: 0;
    padding: ${props => props.open ? "35px" : "0"} 10px 10px 10px;
    color: #FF6060;
    ${props => props.open ? "opacity: 1;" : "opacity: 0;"}
    transition: all 0.5s ease-out;
`

const DropdownList = styled.li`
    font-size: 14px;
    font-weight: 300;
    margin: 0;
    color: #FF6060;
    ${props => props.open ? "opacity: 1;" : "opacity: 0;"}
    transition: all 0.5s ease-out;
`


function Dropdown({ title, text }) {

    const [isOpen, setIsOpen] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        isOpen === false ? setIsOpen(true) : setIsOpen(false);
    }

    return (
        <>
            <DropdownHead onClick={handleClick}>
                <DropdownHeadTitle>{title}</DropdownHeadTitle>
                <DropdownHeadArrow src={Arrow} open={isOpen} />
            </DropdownHead>
            <DropdownTextBackground open={isOpen}>
                { Array.isArray(text) ?
                <ul>
                    {text.map((elem) => (
                        <DropdownList key={elem} open={isOpen}>{elem}</DropdownList>
                    ))}
                </ul> :
                <DropdownText open={isOpen}>{text}</DropdownText> }
            </DropdownTextBackground>
        </>
    );
}

export default Dropdown;