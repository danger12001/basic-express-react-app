var MenuItem = require('./menu-item');
var activeItem = MenuItem("");
var inactiveItem = MenuItem("isActive={true}");

ReactDOM.render(

  React.createElement('ul', null,
    activeItem,
    inactiveItem
  ),
  document.getElementById('app')
);
