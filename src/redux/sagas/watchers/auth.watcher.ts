import { AllEffect, ForkEffect, all, fork, takeLatest } from 'redux-saga/effects';
import { handleSignUpUser, handleLoginUser, handleSendForgotPwd, handleVerifyEmail } from '../handlers/auth.handler';
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
export function* authWatcher(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
    yield all([fork(signUpUserWatcher), fork(loginUserWatcher), fork(sendForgotPwdWatcher), fork(verifyEmailWatcher)]);
}
