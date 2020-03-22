import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import {
    selectProfile,
    profileRequest
} from '../Profile/profileSlice';
import {
    selectJobList,
    jobListRequest,
    selectLoadingIndicator,
} from '../JobList/jobListSlice';
import Header from '../../components/Header';
import Card from '../../components/Card'
import CardItem from '../../components/CardItem';
import Location from '../../utils/assets/address.png';
import User from '../../utils/assets/user.png';
import Calendar from '../../utils/assets/timetable.png';
import Requirements from '../../utils/assets/tools.png';
import { breakPoint, workerID } from '../../utils/globalVariables';


const JobDetail = () => {
    let { id } = useParams();
    const profileData = useSelector(selectProfile);
    const jobListData = useSelector(selectJobList);
    const jobsLoading = useSelector(selectLoadingIndicator);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobListRequest(workerID)); //doing another GET request because I exposed the url
        dispatch(profileRequest(workerID)); 
    }, []);

    if (jobsLoading) {
        return 'Loading...'
    }

    if (!profileData?.email || !jobListData?.length) {
        return 'No data'
    }
    const fullName = `${profileData.firstName} ${profileData.lastName}`
    const jobDetail = jobListData.find(item => item.jobId === id);
    console.log(jobDetail, jobListData, id);
    
    return (
        <>
            <Header name={fullName}/>
            <Card src={jobDetail.jobTitle?.imageUrl} title={jobDetail.jobTitle?.name}
                titleDetail={jobDetail.company?.name} infoTitleOne="Distance" 
                infoTitleTwo="Hourly Rate" infoTitleDescOne={`${jobDetail.milesToTravel} miles`}
                infoTitleDescTwo={`$${jobDetail.wagePerHourInCents}`}
                breakPoint={breakPoint}
            />
            {/* <CardItem src={Calendar} title="Shift Dates" titleDetails={card.address}/>
            <CardItem src={Location} title="Location" titleDetails={card.address}/>
            <CardItem src={Requirements} title="Requirements" titleDetails={card.address}/>
            <CardItem src={User} title="Report To" titleDetails={card.address}/> */}
        </>
    );
}

export default JobDetail;