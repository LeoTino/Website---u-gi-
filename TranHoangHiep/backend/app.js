var express = require('express'),
    bodyParser = require('body-parser')
morgan = require('morgan')
cors = require('cors');

var sanphamCtrl = require('./apiControllers/SanPhamController');

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // res.end('hello from nodejs');
    var ret = {
        msg: 'hello from nodejs api'
    };
    res.json(ret);
});

app.use('/sanpham', sanphamCtrl);

app.listen(3000, () => {
    console.log('API running on port 3000');
});