import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { setFailureData, setSuccessData, setUserDetails } from '../slices/authslice';
import { SIGNUP_API } from 'utils/apiEndpoints';
interface responseData {
    data: any;
}
export function* userSaga(action: any):any {
    try {
        const response: responseData = yield call(axios.post, SIGNUP_API, action.payload);
        const responseData: void = yield response.data;
        yield put(setSuccessData(responseData));
    } catch (error: any) {
        yield put(setFailureData(error.message));
    }
}
function* rootSaga():any {
    yield takeEvery(setUserDetails, userSaga);
    // to make multiple api calls declare the action and decalre function and inside function make over the api call
}
export default rootSaga;
