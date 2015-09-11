let React = require('react');
let Router = require('react-router');

let PageToo = React.createClass({
  contextTypes: {
    router: React.PropTypes.func,
  },

  render: function() {
    return (
      <div>
        PageToo
      </div>
   );
  }
});

module.exports = PageToo;
