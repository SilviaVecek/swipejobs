import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
    selectProfile,
    profileRequest
} from '../Profile/profileSlice';
import {
    selectJobList,
    jobListRequest,
} from './jobListSlice';
import Header from '../../components/Header';
import Card from '../../components/Card';
import { breakPoint, workerID } from '../../utils/globalVariables';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
`

const JobList = () => {
    const profileData = useSelector(selectProfile);
    const jobListData = useSelector(selectJobList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(jobListRequest(workerID));
        dispatch(profileRequest(workerID));
    }, []);

    const fullName = `${profileData.firstName} ${profileData.lastName}`
    
    return (
        <>
            <Header name={fullName}/>
            {jobListData?.length && jobListData.map((item, index) => 
                <StyledLink key={index} to={`/jobs/${item.jobId}`}>
                    <Card key={index} src={item.jobTitle.imageUrl} title={item.jobTitle.name}
                        titleDetail={item.company.name} infoTitleOne="Distance" 
                        infoTitleTwo="Hourly Rate" infoTitleDescOne={`${item.milesToTravel} miles`}
                        infoTitleDescTwo={`$${item.wagePerHourInCents}`}
                        breakPoint={breakPoint}
                    />
                </StyledLink>
            )}
        </>
    )
}

export default JobList