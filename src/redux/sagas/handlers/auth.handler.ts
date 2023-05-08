import { call, put } from 'redux-saga/effects';
import { authenticateUser, sendForgotPwd } from '../requests/auth.request';
import ResponseCode from 'enums/responseCode';
import { setFailureData, setSuccessData } from '../../slices/authslice';

export function* handleAuthenticateUser(action: any): any {
    try {
        const resp: any = yield call((): any => authenticateUser(action.payload));
        if (resp.code === ResponseCode.Success) {
            yield put(setSuccessData(resp));
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        yield put(setFailureData(e.response));
    }
}

export function* handleSendForgotPwd(action: any): any {
    try {
        const resp: any = yield call((): any => sendForgotPwd(action.payload));

        if (resp.code === ResponseCode.Success) {
            yield put(setSuccessData(resp));
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        console.log('forgot pwd resp', e.response);
        const { data } = e.response;
        yield put(setFailureData(data));
    }
}
