import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import recipesReducer from './recipes/recipesSlice';

const middlewares = [logger, thunk];

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, recipesReducer);

const store = configureStore({
  reducer: {
    persistedReducer,
  },
}, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export default store;
export { persistor };
