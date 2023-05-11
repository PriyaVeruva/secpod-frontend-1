import endpoints from 'utils/apiEndpoints.utils';
import { axiosInstance } from 'utils/axios.utils';
import { AxiosResponse } from 'axios';
import { LoginAction, SignUpAction, VerifyEmailAction } from 'types/auth.type';

export async function authenticateSignUpUser(action: SignUpAction['payload']): Promise<AxiosResponse<any>> {
    const data = action;
    const resp = await axiosInstance.post(endpoints.signup, data);
    return resp.data;
}

export async function sendForgotPwd(action: any): Promise<AxiosResponse<any>> {
    const data = action;
    const resp = await axiosInstance.post(endpoints.forgotPwd, data);
    return resp.data;
}

export async function authenticateLoginUser(action: LoginAction['payload']): Promise<AxiosResponse<any>> {
    const data = action;
    const resp = await axiosInstance.post(endpoints.login, data);
    return resp.data;
}

export async function authenticateVerifyEmail(action: VerifyEmailAction['payload']): Promise<AxiosResponse<any>> {
    const resp = await axiosInstance.put(`${endpoints.verifyEmail}?email=${action}`);
    return resp.data;
}
