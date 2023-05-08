import { call, put } from 'redux-saga/effects';
import { authenticateSignUpUser, authenticateLoginUser } from '../requests/auth.request';
import ResponseCode from 'enums/responseCode';
import { setFailureData, setSuccessData, setUserDetails } from '../../slices/authslice';
import { SetUserDetailsAction } from 'redux/slices/auth.types';
import { FailureResponseData, LoginSuccessResponse } from './auth.handlers.types';

export function* handleSignUpUser(action: any): Generator<any, void, any> {
    try {
        const resp = yield call(() => authenticateSignUpUser(action.payload));
        if (resp.code === ResponseCode.Success) {
            yield put(setSuccessData(resp));
        } else {
            const failureData: FailureResponseData = {
                code: resp.code,
                message: resp.message,
            };
            yield put(setFailureData(failureData));
        }
    } catch (e: any) {
        const failureResponse: FailureResponseData = {
            code: e.response.data.code,
            message: e.response.data.message,
        };
        yield put(setFailureData(failureResponse));
    }
}
export function* handleLoginUser(action: SetUserDetailsAction): Generator<any, void, any> {
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
            const failureData: FailureResponseData = {
                code: resp.code,
                message: resp.message,
            };
            yield put(setFailureData(failureData));
        }
    } catch (e: any) {
        const failureResponse: FailureResponseData = {
            code: e.response.data.code,
            message: e.response.data.message,
        };
        yield put(setFailureData(failureResponse));
    }
}
