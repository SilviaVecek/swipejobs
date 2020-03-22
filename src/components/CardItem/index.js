import React from 'react';
import styled from 'styled-components';

const CardItemWrapper = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
`

const Icon = styled.img`
    max-width: 25px;
    max-height: 25px;
    margin-right: 1rem;
`;

const CardDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-weight: bold;
    font-size: 1rem;
`

const TitleDetails = styled.div`
    padding: 0.5rem 0;
    font-size: 0.8rem;
`

const CardItem = ({ src, title, titleDetails}) => {
    return (
        <CardItemWrapper>
            <Icon src={src} alt={src}></Icon>
            <CardDetailWrapper>
                <Title>{title}</Title>
                <TitleDetails>{titleDetails}</TitleDetails>
            </CardDetailWrapper>
        </CardItemWrapper>
    )
}

export default CardItem