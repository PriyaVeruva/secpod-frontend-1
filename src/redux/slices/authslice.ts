import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface UserState {
    name: string;
    phoneNumber: string;
    email: string;
    companyName: string;
    password: string;
    successMessage: string;
    FailureMessage: string;
}
export const initialState: UserState = {
    name: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    password: '',
    successMessage: '',
    FailureMessage: '',
};
const userSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.phoneNumber = action.payload.phoneNumber;
            state.email = action.payload.email;
            state.companyName = action.payload.companyName;
            state.password = action.payload.password;
        },
        setSuccessData: (state, action: any) => {
            state.successMessage = action.payload;
        },
        setFailureData: (state, action: any) => {
            state.FailureMessage = action.payload;
        },
    },
});
export const { setUserDetails, setSuccessData, setFailureData } = userSlice.actions;
export default userSlice.reducer;
