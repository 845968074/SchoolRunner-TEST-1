import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import LoginPage from './loginPage.jsx';
import HomePage from './home.jsx';
import Delivery from './delivery.jsx';
import Book from './book.jsx';
import App from './app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
require('jquery');
require("bootstrap-webpack");
import $ from 'jquery';

// ReactDOM.render(
//   <LoginPage />,
//   document.getElementById("content")
// );
const route = <Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={LoginPage}/>
        <Route path='LoginPage' component={LoginPage}/>
        <Route path='home' component={HomePage} />
        <Route path='book' component={Book}/>
        <Route path='delivery' component={Delivery}/>
    </Route>
</Router>
// use jquery
ReactDOM.render(
    route,
    document.getElementById("content")
);
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
    module.hot.accept();
}
