import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common/common.css';
import ShowSubscriber from './ShowSubscriber';
import * as serviceWorker from './serviceWorker';
import AddSubscriber from './AddSubsriber';
import PhoneDirectory from './PhoneDirectory';

//note above imported files are for all the components within src
ReactDOM.render(<PhoneDirectory/>, document.getElementById('root'));  //App.js/App class is loaded within root element/DOM


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
