
var ListItem = require('./listItem');
var list = React.createClass({
  render: function() {
var items = this.props.items;

return (
      <div className="list">
        <ul>
        {items.map(function(item, index) {
          return <ListItem key={index} text={items} checked={false} />
        })}
        </ul>
      </div>

    )

  }
});
module.exports = list;
