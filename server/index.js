var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var cors = require('cors')
var app = express();
app.use(cors())

app.use(bodyParser.json());

app.get('/formtable', function(req, res)
{
    let rawdata = fs.readFileSync('example.json');
    let form = JSON.parse(rawdata);
    res.end(JSON.stringify(form));
})

app.post('/form', function (req, res) {

    let body = req.body;
    var form = [];
    try{
        let prevdata = fs.readFileSync('example.json');
        form = JSON.parse(prevdata);
    } catch(err) {}

    form.push(body);
    let data = JSON.stringify(form);
    fs.writeFile('example.json', data, (err) => {
        if (err) throw err;
        console.log('Dados armazenados.');
    });
    res.end(data);
});

const port = process.env.PORT || 3010;
app.listen(port, () => {
    console.log('Server started on: ' + port);
  });
