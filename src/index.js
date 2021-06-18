import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import contactReducer from "./reducer/contactReducer"
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'react-toastify/dist/ReactToastify.css';


const store = createStore(contactReducer, composeWithDevTools());

ReactDOM.render(

    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
