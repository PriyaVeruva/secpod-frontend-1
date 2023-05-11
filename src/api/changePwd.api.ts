import endpoints from 'utils/apiEndpoints.utils';
import { axiosInstance } from 'utils/axios.utils';

export async function updatePwd(newPwd: string, authorization: string | null): Promise<any> {
    const data = { password: newPwd };
    const headers = {
        Authorization: authorization,
    };
    try {
        const resp = await axiosInstance.put(endpoints.updatePwd, data, {
            headers: headers,
        });
        return resp;
    } catch (error) {
        console.log('error', error);
    }
}
