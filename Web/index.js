const express = require('express');
// const database = require('./database');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const messageRoutes = require('./api/routes/message');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin. X-Requested-With, Content-Tyé, Accept, Authorization");
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Headers','PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

// Routes
app.use('/messages', messageRoutes );

app.use((req, res, next)=> {
    const error = new Error('Not Fount');
    error.status = 404;
    next(error);
});
app.use((error,req, res, next)=> {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports= app;
/*
database.initializeMongo();

app.get('/',function (req,res) {
    res.send('Hello World')
})

app.listen(4003, function () {
    console.log('listening on por 4003')
})

app.get('/testFind',function (req,res) {
    database.kitten.find(function (err,kittens) {
        if (err) return res.error(err);
        console.log(kittens);
        res.json(kittens);
    })
})*/