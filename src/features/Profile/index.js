import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectProfile,
    profileRequest,
} from './profileSlice';
import Header from './../../components/Header';
import Card from './../../components/Card';
import CardItem from './../../components/CardItem';
import ProfilePic from './ProfilePhoto.png';
import Location from '../../utils/assets/address.png';
import ID from '../../utils/assets/id.png';
import Phone from '../../utils/assets/telephone.png';
import { breakPoint, workerID } from '../../utils/globalVariables.js'

const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const CardItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 360px;
    margin: 0 auto;
    @media screen and (min-width: ${props => props.breakPoint}) {
        max-width: 500px;
    }
`

const Profile = () => {
    const profileData = useSelector(selectProfile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(profileRequest(workerID));
    }, []);

    const fullName = `${profileData.firstName} ${profileData.lastName}`
    return (
        <ProfileWrapper>
            <Header name={fullName}/>
            <Card 
                profile
                breakPoint={breakPoint}
                src={ProfilePic} title={fullName} 
                titleDetail={`Email: ${profileData.email}`} 
                infoTitleOne='Maximum Distance' infoTitleDescOne={profileData.maxJobDistance}  
                infoTitleTwo='Zone ID' infoTitleDescTwo={profileData.address?.zoneId} 
            />
            <CardItemWrapper breakPoint={breakPoint}>
                <CardItem src={Location} title="Address" titleDetails={profileData.address?.formattedAddress}/>
                <CardItem src={Phone} title="Number" titleDetails={profileData.phoneNumber}/>
                <CardItem src={ID} title="ID" titleDetails={profileData.workerId}/>
            </CardItemWrapper>
        </ProfileWrapper>
    )
};

export default Profile