import { AllEffect, ForkEffect, all, fork, takeLatest } from 'redux-saga/effects';
import { handleAuthenticateUser } from '../handlers/auth.handler';
import { authSagaActions } from '../sagaActions/auth.actions';

function* authenticateUserWatcher(): Generator<ForkEffect<never>, void, unknown> {
    yield takeLatest(authSagaActions.AUTHENTICATE_USER, handleAuthenticateUser);
}

export function* authWatcher(): Generator<AllEffect<ForkEffect<void>>, void, unknown> {
    yield all([fork(authenticateUserWatcher)]);
}
