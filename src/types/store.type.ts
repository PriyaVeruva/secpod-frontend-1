import { SignUpState } from 'redux/slices/auth.types';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { AnyAction, EmptyObject } from 'redux';
import { Persistor } from 'redux-persist';
import { SagaMiddleware } from 'redux-saga';
import { UserState } from './auth.type';

export type StoreReturnType = {
    store: ToolkitStore<
        EmptyObject & {
            user: SignUpState;
        },
        AnyAction,
        SagaMiddleware<object>[]
    >;
    persistor: Persistor;
};

export type ReduxStoreType = {
    user: UserState;
};
