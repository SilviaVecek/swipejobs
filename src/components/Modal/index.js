import React from 'react';
import styled from 'styled-components';
import CrossIcon from '../../utils/assets/cross';

const ModalBox = styled.div`
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    background: #000;
    color: #fff;
    padding: 2rem 3rem;
`

const ModalOverlay = styled.div`
    position fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
`;

const Modal = ({ text, onClick }) => {
    return (
        <ModalOverlay onClick={onClick}>
            <ModalBox>{text}<CrossIcon style={{maxWidth: '15px', maxHeight: '15px', fill: '#fff', position: 'fixed', right: '6%', top: '20%'}}/></ModalBox>
        </ModalOverlay>
    );
}

export default Modal