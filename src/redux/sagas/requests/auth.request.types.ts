export interface SignUpAction {
    name: string;
    phoneNumber: string;
    email: string;
    companyName: string;
    password: string;
}
export interface LoginAction {
    type: string;
    payload: {
        email: string;
        password: string;
    };
}
