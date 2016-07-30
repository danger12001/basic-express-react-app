function MenuItem(props) {
  console.log(props);
  var style = {
    color: props.isActive ? 'red' : 'green'
  };
  return <li style={style}>This is great!</li>
//   if (isActive) {
//       return <li>This is awesome!</li>
//     } else {
//       return <li>This is great!</li>
//     }
}

module.exports = MenuItem;
