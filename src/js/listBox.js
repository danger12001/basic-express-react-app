var list = require('./list');
// var addForm = require('./addForm');

var listBox = React.createClass({


  render: function() {
var items = this.state.items;
    return (
      <div className="listBox">
      <h1>TO DO</h1>
        <list items={items}/>
        // <addForm/>
      </div>
    );
  }
});
module.exports = listBox;
