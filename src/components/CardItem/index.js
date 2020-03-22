import React from 'react';
import styled from 'styled-components';
import { formatShiftDates } from '../../utils/globalVariables';

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
    @media screen and (min-width: ${props => props.breakPoint}) {
        ${props => props.title === 'Shift Dates' && `max-height: 180px; overflow: overlay;`}
    }
    width: 100%;
`

const Title = styled.div`
    font-weight: bold;
    font-size: 1rem;
`

const TitleDetails = styled.div`
    padding: 0.5rem 0;
    font-size: 0.8rem;
`

const CardItem = ({ src, title, titleDetails, breakPoint}) => {
    return (
        <CardItemWrapper>
            <Icon src={src} alt={src}></Icon>
            <CardDetailWrapper title={title} breakPoint={breakPoint}>
                <Title>{title}</Title>
                {Array.isArray(titleDetails) 
                    ? titleDetails.map((item, index) => 
                    (title === "Shift Dates"
                        ? <TitleDetails>{formatShiftDates(item.startDate, item.endDate)}</TitleDetails>
                        : <TitleDetails key={index}>{item}</TitleDetails>)
                    )
                    : <TitleDetails>{titleDetails}</TitleDetails>}
            </CardDetailWrapper>
        </CardItemWrapper>
    )
}

export default CardItem