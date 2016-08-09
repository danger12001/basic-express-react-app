// var ListItem = require('./listItem');

var listBox = require('./listBox');
var items = ["test","testing"];
// var list = require('./list');
// var addForm = require('./addForm');
ReactDOM.render(
  <listBox items={items}/>,
   document.getElementById('app')
 );
