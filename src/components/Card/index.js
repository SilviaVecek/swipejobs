import React from 'react';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 360px;
    margin-top: ${props => props.profile ? `1rem` : `3rem`};
    ${props => props.profile && `align-items: center;`}
    @media screen and (min-width: ${props => props.breakPoint}) {
        max-width: 500px;
    }
`;

const Image = styled.img`
    ${props => props.profile && `max-width: 200px;`}
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
`;
const Title = styled.div`
    font-size: 1rem;
    font-weight: bold;
    margin: 0.5rem 0;
`;

const TitleDetail = styled.div`
    font-size: 0.85rem;
    font-weight: 500;
`;

const InfoWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #00ddb3;
    padding: 0.5rem 1rem;
`;

const InfoDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.7rem;
    ${props => props.flexend && `align-items: flex-end;`}
`;

const InfoDetailTitle = styled.div`
    font-size: 0.6rem;
    font-weight: bold;
    white-space: nowrap;
`;

const InfoDetailDesciption = styled.div`
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold;
`;

const Card = ({ profile, src, title, titleDetail, infoTitleOne, infoTitleDescOne,  infoTitleTwo, infoTitleDescTwo, breakPoint }) => {
    
    return (
        <ProfileWrapper profile={profile} breakPoint={breakPoint}>
            <Image src={src} alt={src} profile={profile}/>
            <TitleWrapper>
                <Title>{title}</Title>
                <TitleDetail>{titleDetail}</TitleDetail>
            </TitleWrapper>
            <InfoWrapper>
                <InfoDetailWrapper>
                    <InfoDetailTitle>{infoTitleOne}</InfoDetailTitle>
                    <InfoDetailDesciption>{infoTitleDescOne}</InfoDetailDesciption>
                </InfoDetailWrapper>
                <InfoDetailWrapper flexend>
                    <InfoDetailTitle>{infoTitleTwo}</InfoDetailTitle>
                    <InfoDetailDesciption>{infoTitleDescTwo}</InfoDetailDesciption>
                </InfoDetailWrapper>
            </InfoWrapper>
        </ProfileWrapper>
    )
}

export default Card