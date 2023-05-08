import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from 'types/auth.type';

export const initialState: UserState = {
    userId: '',
    name: '',
    email: '',
    phoneNumber: '',
    companyName: '',
    userToken: '',
    isLoggedIn: false,
    respCode: null,
    successMessage: '',
    failureMessage: '',
};
const authSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.phoneNumber = action.payload.phoneNumber;
            state.email = action.payload.email;
            state.companyName = action.payload.companyName;
        },
        setSuccessData: (state, action: any) => {
            state.successMessage = action.payload;
        },
        setFailureData: (state, action: any) => {
            state.failureMessage = action.payload.message;
            state.respCode = action.payload.code;
        },
        clearRespMessage: (state) => {
            state.respCode = null;
            state.failureMessage = '';
        }
    },
});
export const { setUserDetails, setSuccessData, setFailureData, clearRespMessage } = authSlice.actions;
export default authSlice.reducer;
