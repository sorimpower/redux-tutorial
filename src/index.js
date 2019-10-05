import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import allReducers from "./redux/reducers";


//2개이상의 reducer를 합쳤을 때 store.getState()의 결과는 ?

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//Action
const updateUser = {
	type:'updateUser',
	payload:'Tom'
}
store.dispatch(updateUser);

ReactDOM.render(<provider store={store}> <App /></provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
