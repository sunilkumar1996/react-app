import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Home from './components/pages/Home';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
// import reducer from './reducers/reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
})

const store = createStore(rootReducer)

// ReactDOM.render(
//   // <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));