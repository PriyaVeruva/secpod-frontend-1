export interface LoginSuccessResponse {
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
}

export interface FailureResponseData {
    code: number;
    message: string;
}
