const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();
const port = 3000;

// https://www.expressjs.com.cn/5x/api.html#app.set
// https://www.expressjs.com.cn/5x/api.html#app.engine
// 设置一下模板存放的地址
app.set('views', path.join(__dirname, 'views'));
// 设置一下模板的文件类型
app.set('view engine', 'html');
// 指定你使用的模板引擎
app.engine('html', ejs.__express);

app.get('/', (req, res) => {
    console.log('访问 /')
    res.render('index.html', {title: 'Hey', message: 'Hello Engine'})
});

// dome 片段
app.get('/home', (req, res) => {
    console.log('/home')
    const user = {
      name: 'zhangsan'
    };
    /*
    如果我们想返回这样形式的 参数
    { code: 200, msg: 'ok', data: dom 片段 }
    可以制定 第三个 callback ，这样就不执行自动返回了， 需要手动
    */
    res.render('./fragment/home.html', {user}, (err, html) => {
        // console.log('这里是什么', html)
        // 手动返回
        res.send({
            cood: 200,
            msg: 'ok',
            data: html
        });
    });
});

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});

