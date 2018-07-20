const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found'
        // name: 'TODO application'
    });
});

app.get('/user', (req, res) => {
    res.send([{
        name: 'Houtarou',
        age: 21
    }, {
        name: 'Momo',
        age: 23
    }]);
});

app.listen(3000);
module.exports.app = app;