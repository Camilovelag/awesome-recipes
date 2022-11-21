import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import recipesReducer from './recipes/recipesSlice';

const middlewares = [logger, thunk];

const store = configureStore({
  reducer: {
    recipesReducer,
  },
}, applyMiddleware(...middlewares));

export default store;
