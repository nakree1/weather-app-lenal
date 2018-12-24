import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import rootReducer from './components/rootReducer';
import rootSaga from './components/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  const state = store.getState();

  localStorage.setItem('location', JSON.stringify(state.location.currentLocation));
  localStorage.setItem('notes', JSON.stringify(state.notes.data));
});

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

render();
