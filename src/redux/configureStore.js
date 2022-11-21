import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [logger, thunk];

const store = configureStore({
  reducer: {
    // Add your reducers here
  },
}, applyMiddleware(...middlewares));

export default store;
