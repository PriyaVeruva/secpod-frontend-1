import endpoints from 'utils/apiEndpoints.utils';
import { axiosInstance } from 'utils/axios.utils';
import { AxiosResponse } from 'axios';

export async function authenticateUser(action: any): Promise<AxiosResponse<any>> {
    const data = action;
    const resp = await axiosInstance.post(endpoints.signup, data);
    return resp.data;
}

export async function sendForgotPwd(action: any): Promise<AxiosResponse<any>> {
    const data = action;
    const resp = await axiosInstance.post(endpoints.forgotPwd, data);
    return resp.data;
}
