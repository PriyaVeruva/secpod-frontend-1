import endpoints from 'utils/apiEndpoints.utils';
import { axiosInstance } from 'utils/axios.utils';
import { AxiosResponse } from 'axios';
import { LoginAction, SignUpAction } from './auth.request.types';

export async function authenticateSignUpUser(action: SignUpAction): Promise<AxiosResponse<any>> {
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
