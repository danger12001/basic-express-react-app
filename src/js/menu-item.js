var MenuItem = React.createClass({
  getDefaultProps: function() {
    return {
      isActive: false,
    }
  },
  getInitialState: function() {
    if(this.props.isActive){

      return {
        isActive: true
            }
          }
            else {
              return {
                isActive: false
                    }
            }
    },
    activeToggle: function() {
     this.setState({
       isActive: !this.state.isActive
          })
          console.log("clicked");
   },

  render: function() {
  var style = {color: this.state.isActive ? 'red' : 'blue'}
  if(this.state.isActive){
    // return <li style={style} onClick={this.activeToggle}>This is Active</li>;
    return <div><input type="checkbox"/> <p>This is Active</p ></div>;
  }
  else {
    return <li style={style} onClick={this.activeToggle}>This is not</li>;
  }
}

})
module.exports = MenuItem;
