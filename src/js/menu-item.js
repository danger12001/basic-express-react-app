var MenuItem = React.createClass({
  render: function() {
  var style = {color: this.props.isActive ? 'red' : 'blue'}
  if(this.props.isActive){
    return <li style={style}>This is Active</li>;
  }
  else {
    return <li style={style}>This is not</li>;
  }
}

})
module.exports = MenuItem;
