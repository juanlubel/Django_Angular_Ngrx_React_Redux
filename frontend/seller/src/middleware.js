const promiseMiddleware = store => next => action => {
  console.log('MIDDLEWARE', next)
  if (isPromise(action.payload)) {
    // store.dispatch({ type: 'ASYNC_START', subtype: action.type });
    action.payload.then(
      res => {
        console.log('RESULT', res);
        action.payload = res;
        console.log(store, action);
        // store.dispatch({ type: 'ASYNC_END', promise: action.payload });
        store.dispatch(action);
      },
      error => {
        console.log('ERROR', error);
        action.error = true;
        action.payload = error.response.body;
        console.log(action);
        store.dispatch(action);
      }
    );

    return;
  }

  next(action);
};

const localStorageMiddleware = store => next => action => {
  console.log(next);
  if (action.type === 'REGISTER' || action.type === 'LOGIN') {
    if (!action.error) {
      window.localStorage.setItem('jwt', action.payload.token);
      // agent.setToken(action.payload.user.token);
    }
  } else if (action.type === 'LOGOUT') {
    window.localStorage.setItem('jwt', '');
    // agent.setToken(null);
  }

  next(action);
};

function isPromise(v) {
  return v && typeof v.then === 'function';
}


export { promiseMiddleware, localStorageMiddleware }
