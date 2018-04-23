const mongoose = require('mongoose');
const DATABASE_CONECTION = 'mongodb://mongo/test';

var kittyScherma= mongoose.Schema({
    name: String
});

kitten = exports.kitten = mongoose.model('kitten',kittyScherma);
exports.initializeMongo = function () {
    mongoose.connect(DATABASE_CONECTION);

    console.log('Tratando de conectar a:' +DATABASE_CONECTION);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console,'connection error: We might not be as connected as I thought'));
    db.once('open',function () {
        console.log('we are connected you an I:');
        addRandomCat();
    })
}
var addRandomCat = function () {
    var silence = new kitten({
        name: 'Silence' +Math.random()
    });
    silence.save(function (err, fluffy) {
        if (err) return console.error(err);
        console.log('There is a new cat in the neighborhood');
    })
}