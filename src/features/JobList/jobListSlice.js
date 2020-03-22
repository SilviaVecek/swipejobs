import { createSlice } from '@reduxjs/toolkit';
import { fetchAllJobs } from '../../api';

// reducer
export const slice = createSlice({
  name: 'jobList',
  initialState: {
    loading: false,
    jobs: []
  },
  reducers: {
    setJobList: (state, action) => {
        state.jobs = action.payload;
        state.loading = false;
    },
    setLoading: (state) => {
        state.loading = true;
    }
  },
});

export const { setJobList, setLoading } = slice.actions;

export const jobListRequest = workerId => async dispatch => {
    dispatch(setLoading());
    const jobList = await fetchAllJobs(workerId);
    dispatch(setJobList(jobList));
};

// selector
export const selectJobList = state => state.jobList.jobs;
export const selectLoadingIndicator = state => state.jobList.loading;

export default slice.reducer;
