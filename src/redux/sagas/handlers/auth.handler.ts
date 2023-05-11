import { call, put } from 'redux-saga/effects';
import {
    authenticateSignUpUser,
    authenticateLoginUser,
    sendForgotPwd,
    authenticateVerifyEmail,
} from '../requests/auth.request';
import ResponseCode from 'enums/responseCode';
import { setFailureData, setSuccessData, setUserDetails } from '../../slices/authslice';
import { ForgotPwdAction, LoginAction, LoginSuccessResponse, SignUpAction, VerifyEmailAction } from 'types/auth.type';

export function* handleSignUpUser(action: SignUpAction): Generator<any, void, any> {
    try {
        const resp = yield call(() => authenticateSignUpUser(action.payload));
        if (resp.code === ResponseCode.Success) {
            yield put(setSuccessData(resp));
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        const { data } = e.response;
        yield put(setFailureData(data));
    }
}

export function* handleLoginUser(action: LoginAction): Generator<any, void, any> {
    try {
        const resp = yield call(() => authenticateLoginUser(action.payload));

        if (resp.code === ResponseCode.Success) {
            const responseData: LoginSuccessResponse = {
                userId: resp.response.userId,
                name: resp.response.name,
                email: resp.response.email,
                phoneNumber: resp.response.phoneNumber,
                companyName: resp.response.companyName,
                loginToken: resp.response.loginToken,
                roles: resp.response.roles,
                userProfile: resp.response.userProfile,
                password: '', // add necessary properties
                code: ResponseCode.Success,
                message: resp.message,
                isLoggedIn: true,
            };
            yield put(setUserDetails(responseData));
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        const { data } = e.response;
        yield put(setFailureData(data));
    }
}

export function* handleVerifyEmail(action: VerifyEmailAction): any {
    try {
        const resp = yield call(() => authenticateVerifyEmail(action.payload));
        if (resp.code === ResponseCode.Success) {
            yield put(setSuccessData(resp));
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        const { data } = e.response;
        yield put(setFailureData(data));
    }
}

export function* handleSendForgotPwd(action: ForgotPwdAction): any {
    try {
        const resp: any = yield call((): any => sendForgotPwd(action.payload));

        if (resp.code === ResponseCode.Success) {
            yield put(setSuccessData(resp));
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        const { data } = e.response;
        yield put(setFailureData(data));
    }
}
