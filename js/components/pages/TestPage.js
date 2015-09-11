let React = require('react');
let Router = require('react-router');

let TestPage = React.createClass({
  contextTypes: {
    router: React.PropTypes.func,
  },

  render: function() {
    return (
      <div>
        Something
      </div>
   );
  }
});

module.exports = TestPage;
