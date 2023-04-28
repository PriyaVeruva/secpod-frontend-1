import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/authslice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootsaga';

const sagaMiddleWare = createSagaMiddleware();

// add reducers here
export const rootReducer = combineReducers({
    user: userReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
