import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { selectProfile, profileRequest } from '../Profile/profileSlice';
import { selectJobList, jobListRequest, selectLoadingIndicator } from '../JobList/jobListSlice';
import { jobListAccept, jobListReject, selectJobResponse } from '../JobDetail/jobDetailSlice';
import Header from '../../components/Header';
import Card from '../../components/Card'
import Buttons from '../../components/Buttons'
import Modal from '../../components/Modal'
import CardItem from '../../components/CardItem';
import Location from '../../utils/assets/address.png';
import User from '../../utils/assets/user.png';
import Calendar from '../../utils/assets/timetable.png';
import Requirements from '../../utils/assets/tools.png';
import { breakPoint, workerID } from '../../utils/globalVariables';

const CardItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 360px;
    margin: 0 auto;
    @media screen and (min-width: ${props => props.breakPoint}) {
        max-width: 500px;
    }
`
const JobDetail = () => {
    let { id } = useParams();
    const [ modalState, setModalState ] = useState(false);
    const profileData = useSelector(selectProfile);
    const jobListData = useSelector(selectJobList);
    const jobsLoading = useSelector(selectLoadingIndicator);
    const jobResponse = useSelector(selectJobResponse);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobListRequest(workerID)); //doing another GET request because I exposed the url
        dispatch(profileRequest(workerID)); 
    }, []);

    const handleClick = (action) => {
        if (action === 'reject') dispatch(jobListReject(workerID, id));
        if (action === 'accept') dispatch(jobListAccept(workerID, id));
        setModalState(true)
    }

    if (jobsLoading) {
        return 'Loading...'
    }

    if (!profileData?.firstName || !jobListData?.length) {
        return 'No data'
    }
    
    const fullName = `${profileData.firstName} ${profileData.lastName}`
    const jobDetail = jobListData.find(item => item.jobId === id);
    const reportDetails = jobDetail.company.reportTo.name && jobDetail.company.reportTo.phone ? 
    `${jobDetail.company.reportTo.name} ${jobDetail.company.reportTo.phone}` : `${jobDetail.company.reportTo.name} ${jobDetail.branchPhoneNumber}`;
    
    return (
        <>
            <Header name={fullName}/>
            <Card src={jobDetail.jobTitle?.imageUrl} title={jobDetail.jobTitle?.name}
                titleDetail={jobDetail.company?.name} infoTitleOne="Distance" 
                infoTitleTwo="Hourly Rate" infoTitleDescOne={`${Math.round(jobDetail.milesToTravel)} miles`}
                infoTitleDescTwo={`$${Math.round(jobDetail.wagePerHourInCents/100)}`}
                breakPoint={breakPoint}
            />
            <CardItemWrapper breakPoint={breakPoint}>
                <CardItem breakPoint={breakPoint} src={Calendar} title="Shift Dates" titleDetails={jobDetail.shifts}/>
                <CardItem src={Location} title="Location" titleDetails={jobDetail.company.address.formattedAddress}/>
                {jobDetail.requirements && <CardItem src={Requirements} title="Requirements" titleDetails={jobDetail.requirements}/>}
                <CardItem src={User} title="Report To" titleDetails={reportDetails}/>
                <Buttons onReject={() => handleClick('reject')} onAccept={() => handleClick('accept')}/>
            </CardItemWrapper>        
            {modalState && <Modal onClick={() => setModalState(false)} text={jobResponse.success ? 'Your action was successful' : jobResponse.message}></Modal>}
        </>
    );
}

export default JobDetail;