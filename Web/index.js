console.log("Yeah")

const express = required('express')
const database = required('./database')
const app = express()

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
})