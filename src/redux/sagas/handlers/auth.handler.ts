import { call, put } from 'redux-saga/effects';
import {
    authenticateSignUpUser,
    authenticateLoginUser,
    sendForgotPwd,
    authenticateVerifyEmail,
    authenticateGetProduct,
    authenticateSelectProduct,
    authenticateSelectPlan,
    authenticateUpdateProfile,
} from '../requests/auth.request';
import ResponseCode from 'enums/responseCode';
import {
    setFailureData,
    setGetProducts,
    setSelectProduct,
    // setPlanSelection,
    setSuccessData,
    setUserDetails,
} from '../../slices/authslice';
import {
    ForgotPwdAction,
    LoginAction,
    LoginSuccessResponse,
    // PlanSelectionSuccessResponse,
    SignUpAction,
    VerifyEmailAction,
    GetProductSuccessResponse,
    SelectProductActionById,
    SelectPlanSelectionAction,
    SelectProductSuccessResponse,
    UpdateProfileAction,
} from 'types/auth.type';

export function* handleSignUpUser(action: SignUpAction): Generator<any, void, any> {
    try {
        const resp = yield call(() => authenticateSignUpUser(action.payload));
        if (resp.code === ResponseCode.Success) {
            yield put(setUserDetails(action.payload));
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
// on page load get products api
export function* handleGetProduct(): any {
    try {
        const resp = yield call(() => authenticateGetProduct());
        if (resp.code === ResponseCode.Success) {
            const responseData: GetProductSuccessResponse = {
                getProducts: resp.response,
                code: ResponseCode.Success,
            };

            yield put(setGetProducts(responseData));
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        const { data } = e.response;
        yield put(setFailureData(data));
    }
}

// selecting products api  need to pass product id as payload

export function* handleSelectProduct(action: SelectProductActionById): Generator<any, void, any> {
    try {
        const resp: any = yield call((): any => authenticateSelectProduct(action.payload));
        console.log(resp, 'resp');
        if (resp.code === ResponseCode.Success) {
            const response = resp.response;

            const responseData: SelectProductSuccessResponse = {
                getPlans: response,
                code: ResponseCode.Success,
            };
            console.log(responseData, 'responseData');

            yield put(setSelectProduct(responseData));
            // maintain seperate state for response data like login
        } else {
            yield put(setFailureData(resp));
        }
    } catch (e: any) {
        console.log(e, 'error');
        const { data } = e.response;
        yield put(setFailureData(data));
    }
}

export function* handleSelectPlanSelection(action: SelectPlanSelectionAction): any {
    try {
        const resp: any = yield call((): any => authenticateSelectPlan(action.payload));
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

// update profile

export function* handleUpdateProfile(action: UpdateProfileAction): any {
    try {
        const resp: any = yield call((): any => authenticateUpdateProfile(action.payload));
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
