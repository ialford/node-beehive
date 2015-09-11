/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
require("babel/polyfill");
let React = require('react');
let injectTapEventPlugin = require("react-tap-event-plugin");
let attachFastClick = require('fastclick');
attachFastClick(document.body);
//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

let Router = require('react-router'); // or let Router = ReactRouter; in browsers
let MuiThemeMixin = require('./components/material-ui/MuiThemeMixin');

let HomePage = require('./components/pages/HomePage');
let CollectionPage = require('./components/pages/CollectionPage');



let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

let routes = (
  <Route>
    <Route name="collections" path="/" handler={HomePage} />
    <Route name="collection" path="/collections/:id" handler={CollectionPage} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
