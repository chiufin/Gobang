import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import { createStore } from 'redux'
import { counter } from './reducers/CurrentUserReducer'


let store = createStore(counter)


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
