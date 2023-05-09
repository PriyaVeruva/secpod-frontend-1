import { createSlice } from '@reduxjs/toolkit';
import { FailureAction, SetUserDetailsAction, SignUpState, SuccessAction } from './auth.types';

export const initialState: SignUpState = {
    userDetails: {
        name: '',
        phoneNumber: '',
        email: '',
        companyName: '',
        password: '',
        userId: '',
        loginToken: '',
        roles: [],
        userProfile: [],
    },
    isLoggedIn: false,
    successMessage: '',
    failureMessage: '',
    respCode: null,
    clearStore: '',
};

const authSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setUserDetails: (state, action: SetUserDetailsAction) => {
            state.userDetails.name = action.payload.name;
            state.userDetails.phoneNumber = action.payload.phoneNumber;
            state.userDetails.email = action.payload.email;
            state.userDetails.companyName = action.payload.companyName;
            state.userDetails.password = action.payload.password;
            state.userDetails.userId = action.payload.userId;
            state.userDetails.userProfile = action.payload.userProfile;
            state.userDetails.roles = action.payload.roles;
            state.userDetails.loginToken = action.payload.loginToken;
            state.respCode = action.payload.code;
            state.successMessage = action.payload.message;
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        setSuccessData: (state, action: SuccessAction) => {
            state.successMessage = action.payload.message;
            state.respCode = action.payload.code;
        },

        setFailureData: (state, action: FailureAction) => {
            state.failureMessage = action.payload.message;
            state.respCode = action.payload.code;
        },
        setClearRespMessage: (state) => {
            state.respCode = null;
            state.failureMessage = '';
        },
    },
});
export const { setUserDetails, setSuccessData, setFailureData, setClearRespMessage } = authSlice.actions;
export default authSlice.reducer;
