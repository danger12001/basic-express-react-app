var addForm = React.createClass({
  getInitialState: function() {
  return {text: ''};
},

handleTextChange: function(e) {
  this.setState({text: e.target.value});
},
handleSubmit: function(e) {
   e.preventDefault();
   var text = this.state.text.trim();
   if (!text) {
     return;
   }
   this.setState({text: ''});
 },
  render: function() {
    return (
      <div className="addForm">
      <input type="text" placeholder="Insert Item here" value={this.state.text} onChange={this.handleTextChange}/>
      <input type='submit'/>
      </div>
    );
  }
});
module.exports = addForm;
