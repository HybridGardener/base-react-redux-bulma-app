import uuidv4 from 'uuid/v4';
var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
    // do something
    next();
});

app.get('/user-access-service', function (req, res) {
    res.send('Working')
})
app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
        id,
        text: req.body.text,
    };
    messages[id] = message;
    return res.send(message);
});

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})