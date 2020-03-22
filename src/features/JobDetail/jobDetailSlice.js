import { createSlice } from '@reduxjs/toolkit';
import { acceptJob, rejectJob } from '../../api';

// reducer
export const slice = createSlice({
  name: 'jobDetail',
  initialState: {
    jobResponse: {}
  },
  reducers: {
    setJobResponse: (state, action) => {
        state.jobResponse = action.payload;
    },
  },
});

export const { setJobResponse } = slice.actions;

export const jobListAccept = (workerId, jobId) => async dispatch => {
    const acceptJobResponse = await acceptJob(workerId, jobId);
    dispatch(setJobResponse(acceptJobResponse));
};

export const jobListReject = (workerId, jobId) => async dispatch => {
    const rejectJobResponse = await rejectJob(workerId, jobId);
    dispatch(setJobResponse(rejectJobResponse));
};

// selector
export const selectJobResponse = state => state.jobDetail.jobResponse;

export default slice.reducer;
