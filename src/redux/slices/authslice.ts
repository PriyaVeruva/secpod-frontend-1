import { createSlice } from '@reduxjs/toolkit';
import {
    FailureAction,
    SetUserDetailsAction,
    UserState,
    SuccessAction,
    SetSelectProductAction,
    PlanSelectionAction,
} from 'types/auth.type';

export const initialState: UserState = {
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
        productId: '',
        planId: '',
        devices: '',
    },

    isLoggedIn: false,
    successMessage: '',
    failureMessage: '',
    respCode: null,
    clearStore: '',
};
// need to declare some states for on page laod api response for select product

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

        setDevices: (state, action) => {
            state.userDetails.devices = action.payload;
        },

        // select product state updation
        setSelectProduct: (state, action: SetSelectProductAction) => {
            state.userDetails.productId = action.payload.productId;
        },

        setPlanSelection: (state, action: PlanSelectionAction) => {
            state.userDetails.planId = action.payload.planId;
        },

        setSuccessData: (state, action: SuccessAction) => {
            state.successMessage = action.payload.message;
            state.respCode = action.payload.code;
            state.failureMessage = '';
        },

        setFailureData: (state, action: FailureAction) => {
            state.failureMessage = action.payload.message;
            state.respCode = action.payload.code;
            state.successMessage = '';
        },
        setClearRespMessage: (state) => {
            state.respCode = null;
            state.failureMessage = '';
            state.successMessage = '';
            state.userDetails.devices = '';
        },
    },
});
export const {
    setUserDetails,
    setSuccessData,
    setFailureData,
    setClearRespMessage,
    setSelectProduct,
    setPlanSelection,
    setDevices,
} = authSlice.actions;
export default authSlice.reducer;
