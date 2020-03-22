import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../features/Profile/profileSlice';
import jobListReducer from '../features/JobList/jobListSlice';

export default configureStore({
  reducer: {
    profile: profileReducer,
    jobList: jobListReducer,
  },
});
