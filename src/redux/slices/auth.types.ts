export interface SignUpState {
    userDetails: {
        name: string;
        phoneNumber: string;
        email: string;
        companyName: string;
        password: string;
        userId: string;
        loginToken: string;
        roles: Array<string>;
        userProfile: Array<string>;
    };
    isLoggedIn: boolean;
    successMessage: string;
    failureMessage: string;
    respCode: number | null;
    clearStore: string;
}
export interface SetUserDetailsAction {
    type: string;
    payload: {
        name: string;
        phoneNumber: string;
        email: string;
        companyName: string;
        password: string;
        userId: string;
        userProfile: Array<string>;
        roles: string[];
        loginToken: string;
        code: number;
        message: string;
        isLoggedIn: boolean;
    };
}

export interface SuccessAction {
    type: string;
    payload: {
        message: string;
        code: number | null;
    };
}

export interface FailureAction {
    type: string;
    payload: {
        message: string;
        code: number | null;
    };
}
