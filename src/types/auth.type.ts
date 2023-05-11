export type UserState = {
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
};

export type SignUpAction = {
    type: string;
    payload: {
        name: string;
        email: string;
        phoneNumber: string;
        companyName: string;
        password: string;
    };
};
export type LoginAction = {
    type: string;
    payload: {
        email: string;
        password: string;
    };
};
export type ForgotPwdAction = {
    type: string;
    payload: {
        email: string;
    };
};

export type VerifyEmailAction = {
    type: string;
    payload: {
        email: string;
    };
};

export type SetUserDetailsAction = {
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
};

export type SuccessAction = {
    type: string;
    payload: {
        message: string;
        code: number | null;
    };
};

export type FailureAction = {
    type: string;
    payload: {
        message: string;
        code: number | null;
    };
};

export type LoginSuccessResponse = {
    name: string;
    phoneNumber: string;
    email: string;
    companyName: string;
    password: string;
    userId: string;
    userProfile: string[];
    roles: string[];
    loginToken: string;
    code: number;
    message: string;
    isLoggedIn: boolean;
};

export type FailureResponseData = {
    code: number;
    message: string;
};
