import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer';
import { createStore, applyMiddleware } from 'redux';
import { loadEmployees } from './actions/action-creators';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer,composeWithDevTools(
  applyMiddleware(thunk)
));
//console.log(store.getState());

// let sample =[
//   {LocationID:'MUM', Name:'ABC', Age:30,Department:'JVTC',Designation:'Sr. Executive',Location:'Mumbai',EmpCode:'2233'}
// ]

// store.dispatch(loadEmployees(sample));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
