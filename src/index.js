import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleWare} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleWare(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>


, document.getElementById('root'));


