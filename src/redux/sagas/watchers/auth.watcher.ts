import { AllEffect, ForkEffect, all, fork, takeLatest } from 'redux-saga/effects';
import {
    handleSignUpUser,
    handleLoginUser,
    handleSendForgotPwd,
    handleVerifyEmail,
    handleGetProduct,
    handleSelectProduct,
    handleSelectPlanSelection,
    handleUpdateProfile,
} from '../handlers/auth.handler';
import { authSagaActions } from '../sagaActions/auth.actions';

function* signUpUserWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.SIGNUP_USER, handleSignUpUser);
}

function* loginUserWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.LOGIN_USER, handleLoginUser);
}

function* sendForgotPwdWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.SEND_FORGOT_PWD, handleSendForgotPwd);
}
function* verifyEmailWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.VERIFY_EMAIL, handleVerifyEmail);
}

function* getProductsWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.GET_PRODUCTS, handleGetProduct);
}
function* getPlanSelectionWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.SELECT_PRODUCTS, handleSelectProduct);
}

function* selectPlanSelectionWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.SELECT_PLAN_PRODUCTS, handleSelectPlanSelection);
}

function* updateProfileWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.UPDATE_PROFILE, handleUpdateProfile);
}

export function* authWatcher(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
    yield all([
        fork(signUpUserWatcher),
        fork(loginUserWatcher),
        fork(sendForgotPwdWatcher),
        fork(verifyEmailWatcher),
        fork(getProductsWatcher),
        fork(getPlanSelectionWatcher),
        fork(selectPlanSelectionWatcher),
        fork(updateProfileWatcher),
    ]);
}
