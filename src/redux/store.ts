import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './slices/authslice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootsaga';

const sagaMiddleWare = createSagaMiddleware();

// add reducers here
export const rootReducer = combineReducers({
    user: userReducer,
});

const persistConfig = {
    key: 'secpodRoot',
    storage,
    whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [sagaMiddleWare],
});
sagaMiddleWare.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
