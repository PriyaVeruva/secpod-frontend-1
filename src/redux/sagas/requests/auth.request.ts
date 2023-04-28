import endpoints from '@utils/apiEndpoints.utils';
import { axiosInstance } from '@utils/axios.utils';
import { AxiosResponse } from 'axios';

export async function authenticateUser(action: any): Promise<AxiosResponse<any>> {
    const data = action;
    const resp = await axiosInstance.post(endpoints.signin, data);
    return resp.data;
}
