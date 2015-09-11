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

let TestPage = require('./components/pages/TestPage');
let PageToo = require('./components/pages/PageToo');

let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let Route = Router.Route;
let RouteHandler = Router.RouteHandler;

let App = React.createClass({
  mixins: [MuiThemeMixin],
  render: function () {
    return (
      <div>
        <h1>Super Site</h1>
        <Router.Link to="testpage">Page 1</Router.Link>
        <Router.Link to="pagetoo">Page 2</Router.Link>
        <div>
          <RouteHandler/>
        </div>
      </div>
    );
  },
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="testpage" handler={TestPage} ignoreScrollBehavior={true} />
    <Route name="pagetoo" handler={PageToo} ignoreScrollBehavior={true} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
