const postcss = require('postcss');

postcss([require('./index.js')]).process(`{ color: blue; }`, {from: undefined}).then((result) => {
	console.log(result.css);
});
