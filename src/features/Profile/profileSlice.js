import { createSlice } from '@reduxjs/toolkit';
import { fetchProfile } from '../../api';

// reducer
export const slice = createSlice({
  name: 'profile',
  initialState: {
    loading: false,
    profile: {}
  },
  reducers: {
    setProfile: (state, action) => {
        state.profile = action.payload;
        state.loading = false;
    },
    setLoading: (state) => {
        state.loading = true;
    }
  },
});

export const { setProfile, setLoading } = slice.actions;

export const profileRequest = workerId => async dispatch => {
    dispatch(setLoading());
    const profileData = await fetchProfile(workerId);
    dispatch(setProfile(profileData));
};

// selector
export const selectProfile = state => state.profile.profile;
export const selectLoadingIndicator = state => state.profile.loading;

export default slice.reducer;
