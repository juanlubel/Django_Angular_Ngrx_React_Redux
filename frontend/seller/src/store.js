import {applyMiddleware, createStore} from 'redux';
import {localStorageMiddleware, promiseMiddleware} from './middleware';
import reducer from './reducer';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(promiseMiddleware, localStorageMiddleware);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(promiseMiddleware, localStorageMiddleware)
  }
};

export const store = createStore(
  reducer, getMiddleware());
