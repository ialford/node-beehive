let React = require('react');
let Router = require('react-router');

let CollectionPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func,
  },

  getInitialState: function() {
    return {
      collection: {},
    }
  },
  getCollection: function(id) {
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
          var collection = JSON.parse(xmlhttp.responseText);
          self.setState({collection: collection});
        }
        else if(xmlhttp.status == 400) {
          console.log('There was an error 400');
        }
        else {
          console.log('something else other than 200 was returned');
        }
      }
    }
    xmlhttp.open("GET", "http://localhost:3017/v1/collections/" + id + "/showcases", true);
    xmlhttp.send();
  },

  componentWillMount: function() {
    this.getCollection(this.context.router.getCurrentParams().id);
  },

  render: function() {
    var nodes = [];
    if(this.state.collection.showcases) {
      for (var key in this.state.collection.showcases) {
       if (this.state.collection.showcases.hasOwnProperty(key)) {
        var showcase = this.state.collection.showcases[key];
         if (showcase.id) {
           var link = "/#/collections/" + this.state.collection.id + "/showcases/" + showcase.id;
           nodes.push((<div><a href={link}>{showcase.name}</a></div>));
         }
       }
      }
    }
    return (
      <div>
        {nodes}
      </div>
   );
  }
});

module.exports = CollectionPage;
