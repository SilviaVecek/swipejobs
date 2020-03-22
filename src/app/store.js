import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/Profile/profileSlice';
import jobListReducer from '../features/JobList/jobListSlice';
import jobDetailReducer from '../features/JobDetail/jobDetailSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    jobList: jobListReducer,
    jobDetail: jobDetailReducer,
  },
});
