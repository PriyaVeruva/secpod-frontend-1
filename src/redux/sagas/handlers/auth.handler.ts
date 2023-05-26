import { call, put } from 'redux-saga/effects';
import {
    authenticateSignUpUser,
    authenticateLoginUser,
    sendForgotPwd,
    authenticateVerifyEmail,
    authenticateGetProduct,
    authenticatePlanSelectionProduct,
    authenticateSelectProduct,
} from '../requests/auth.request';
import ResponseCode from 'enums/responseCode';
import {
    setFailureData,
    setPlanSelection,
    setSelectProduct,
    setSuccessData,
    setUserDetails,
} from '../../slices/authslice';
import {
    ForgotPwdAction,
    LoginAction,
    LoginSuccessResponse,
    PlanSelectionAction,
    PlanSelectionSuccessResponse,
    SelectPlanSelectionAction,
    SelectProductSuccessResponse,
    SignUpAction,
    VerifyEmailAction,
} from 'types/auth.type';

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
// need to look once api is given
export function* handleGetProduct(): any {
    try {
        const resp: any = yield call((): any => authenticateGetProduct());
        console.log(resp, 'resp');
        // the response we receive in array of objects of map and later add the required response data and pass it to setSelectProduct
        if (resp.code !== ResponseCode.Success) {
            const response: any = resp.data.map((ele: any) => ele);

            const responseData: SelectProductSuccessResponse = {
                productId: response.id,
            };

            yield put(setSelectProduct(responseData));
            // maintain seperate state for response data like login
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        const { data } = e.response;
        yield put(setFailureData(data));
    }
}

export function* handlePlanSelection(action: PlanSelectionAction): any {
    try {
        const resp: any = yield call((): any => authenticatePlanSelectionProduct(action.payload));
        console.log(resp, 'resp');
        // the response we receive in array of objects of map and later add the required response data and pass it to setSelectProduct
        if (resp.code === ResponseCode.Success) {
            const response: any = resp.data.map((ele: any) => ele);

            const responseData: PlanSelectionSuccessResponse = {
                planId: response.id,
            };

            yield put(setPlanSelection(responseData));
            // maintain seperate state for response data like login
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        const { data } = e.response;
        yield put(setFailureData(data));
    }
}

export function* handleSelectPlanSelection(action: SelectPlanSelectionAction): any {
    try {
        const resp: any = yield call((): any => authenticateSelectProduct(action.payload));
        if (resp.code === ResponseCode.Success) {
            yield put(setSuccessData(resp));
            // maintain seperate state for response data like login
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        const { data } = e.response;
        yield put(setFailureData(data));
    }
}
