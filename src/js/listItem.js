var listItem = React.createClass({
  getDefaultProps: function() {
    return {
      checked: true,
    };
  },
  getInitialState: function() {
    if(this.props.checked){
      return {
        checked: true
      };
          }
            else {
              return {
                checked: false
              };
            }
    },
    activeToggle: function() {
     this.setState({
       checked: !this.state.checked
     });
   },

  render: function() {
  var style = {color: this.state.checked ?   'black' : 'grey' ,textDecoration: this.state.checked ?   "none" : "line-through"};
  if(this.state.checked){
    // return <li style={style}>This is Active </li>;
    return <li><input onClick={this.activeToggle} type="checkbox"/> <p style={style}>Not Active</p></li>;
  }
  else {
    return <li><input onClick={this.activeToggle} type="checkbox"/> <p style={style}>Active</p></li>;
    // return <li style={style} onClick={this.activeToggle}>This is Not Active</li>;
  }
}

})

module.exports = listItem;
