const express = require('express');
const cors = require('cors');
const ejs = require('ejs');

const PORT = 3000;
const app = express();
// app.use(cors());

app.get('/foo', (req, res)=>{
    const data = {title: '欢迎！', isLogin: false, list: [1, 2, 3, 4, 5, 6]};
    ejs.renderFile('../views/index.html', data, (err, str)=>{
        if(err) throw err;
        console.log('ejs.renderFile', str);
        res.send(str);
    })

});

app.get('/login', (req, res)=>{
    const data = {title: '欢迎！', name: '孙悟空', isLogin: true, list: [1, 2, 3, 4, 5, 6]};
    ejs.renderFile('../views/index.html', data, (err, str)=>{
        if(err) throw err;
        console.log('ejs.renderFile', str);
        res.send(str);
    })

});


app.listen(PORT, ()=>{
    console.log('server listen on ' + PORT);
})