var express = require('express');
var app = express();
var fs = require('fs');
var index = String(fs.readFileSync("lib/index.html"));


var webpack = require("webpack");
var compiler = webpack({
  module : {
    loaders : [
      {
        loader : 'babel'
      }
    ]
  },
  entry: './src/js/index.js',
  output: {
    path: './src/client/public/js',
    filename: 'app.js'
  }
});

compiler.run(function(err, stats){
if(err) console.log(err);
console.log("error: ",err);
// console.log("stats: ",stats);
});
app.use(express.static('./src/client/public'));

app.get('/',function(req, res){
  res.send(index);
});

app.listen(3000, function () {
  console.log('React app listening on port 3000!');
});
