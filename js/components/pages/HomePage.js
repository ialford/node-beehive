'use strict'
let React = require('react');
let Router = require('react-router');
let RouteHandler = Router.RouteHandler;
let Ajax = require('simple-ajax');

let HomePage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func,
  },

  getInitialState: function() {
    return {
      collections: {},
    }
  },

  getCollections: function(url) {
    var xmlhttp;
    if (window.XMLHttpRequest){
      xmlhttp=new XMLHttpRequest();
    }
    else{
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    self = this;
    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
        if(xmlhttp.status == 200){
          var collections = JSON.parse(xmlhttp.responseText);
          self.setState({collections: collections});
          console.log(collections);
        }
        else if(xmlhttp.status == 400) {
          console.log('There was an error 400');
        }
        else {
          console.log('something else other than 200 was returned');
        }
      }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  },

  componentWillMount: function() {
    this.getCollections("http://localhost:3017/v1/collections");
  },

  render: function() {
    var nodes = [];
    for (var key in this.state.collections) {
     if (this.state.collections.hasOwnProperty(key)) {
      var collection = this.state.collections[key];
       if (collection.id) {
         var link = "/#/collections/" + collection.id;
         nodes.push((<div><a href={link}>{collection.name}</a></div>));
       }
     }
    }
    return (
      <div>
        <div>{nodes}</div>
      </div>
    );
  }
});
module.exports = HomePage;
