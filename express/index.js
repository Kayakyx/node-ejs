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

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
});

