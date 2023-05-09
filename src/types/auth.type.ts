export interface UserState {
    userId: string;
    name: string;
    email: string;
    phoneNumber: string;
    companyName: string;
    userToken: string;
    isLoggedIn: boolean;
    respCode: number | null;
    successMessage: string;
    failureMessage: string;
}

export type ForgotPwdAction = {
    type: string;
    payload: {
        email: string;
    };
};
