const ejs = require('ejs');

const data = {name: '张三'};
// demo 1
const htmlStr = ejs.render('<h2><%= name %></h2>', data);
console.log('ejs.render', htmlStr);

// demo 2
ejs.renderFile('../views/index.html', data, (err, str)=>{
    if(err) throw err;
    console.log('ejs.renderFile', str);
})

