import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
    display: flex;
    align-self: center;
    margin-bottom: 2rem;
`

const buttonStyling = props => {
    if (props.reject) {
        return `color: #cacaca; border: 1px solid #cacaca; background-color: #fff;`
    } else {
        return `color: white; background-color: #000;`
    }
}
const ButtonStyle = styled.button`
    ${buttonStyling}
    border-radius: 5px;
    padding: 1rem 2rem;
    font-size: 1rem;
    margin: 0 1rem;
`

const Buttons = ({ onReject, onAccept }) => {

    return (
        <ButtonWrapper>
            <ButtonStyle onClick={onReject} reject>No Thanks</ButtonStyle>
            <ButtonStyle onClick={onAccept}>I'll Take it</ButtonStyle>
        </ButtonWrapper>
    )
}

export default Buttons