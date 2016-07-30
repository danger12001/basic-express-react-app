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
    path: './public/js',
    filename: 'app.js'
  }
});

compiler.run(function(err, stats){
if (err) throw err;
});
app.use(express.static('public'));

app.get('/',function(req, res){
  res.send(index);
});

app.listen(3000, function () {
  console.log('React app listening on port 3000!');
});
