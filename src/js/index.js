var ListItem = require('./listItem');
var listBox = require('./listBox');
var list = require('./list');
var addForm = require('./addForm');

ReactDOM.render(
  //  React.createElement('ul', null, <ListItem checked={true}/>),
  <listBox>
    <list>
<ListItem />
    </list>
    <addForm/>
  </listBox>,
   document.getElementById('app')
 );
