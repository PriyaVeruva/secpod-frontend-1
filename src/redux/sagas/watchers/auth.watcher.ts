import { AllEffect, ForkEffect, all, fork, takeLatest } from 'redux-saga/effects';
import { handleSignUpUser,handleLoginUser } from '../handlers/auth.handler';
import { authSagaActions } from '../sagaActions/auth.actions';

function* signUpUserWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.SIGNUP_USER, handleSignUpUser);
}

function* loginUserWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.LOGIN_USER, handleLoginUser);
}

export function* authWatcher(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
    yield all([fork(signUpUserWatcher),fork(loginUserWatcher)]);
}
