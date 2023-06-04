import endpoints from 'utils/apiEndpoints.utils';
import { axiosInstance } from 'utils/axios.utils';
import { AxiosResponse } from 'axios';
import {
    LoginAction,
    SelectPlanSelectionAction,
    SelectProductActionById,
    SignUpAction,
    UpdateProfileAction,
    VerifyEmailAction,
} from 'types/auth.type';

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

export async function authenticateGetProduct(): Promise<AxiosResponse<any>> {
    const resp = await axiosInstance.get(endpoints.getProducts);
    return resp.data;
}

export async function authenticateSelectProduct(
    action: SelectProductActionById['payload'],
): Promise<AxiosResponse<any>> {
    const resp = await axiosInstance.get(`${endpoints.getPlans}?productId=${action}`);
    return resp.data;
}

export async function authenticateSelectPlan(
    action: SelectPlanSelectionAction['payload'],
): Promise<AxiosResponse<any>> {
    const data = action;
    // need to specify endpoint look into it
    const resp = await axiosInstance.post(endpoints.subscriptionPlans, data);
    return resp.data;
}

export async function authenticateUpdateProfile(action: UpdateProfileAction['payload']): Promise<AxiosResponse<any>> {
    const data = action;
    const resp = await axiosInstance.put(endpoints.updateProfile, data);
    return resp.data;
}
