const express = require('express');
const path =  require('path');
const open = require('opn');

const port = 3000;
const app = express();

app.get('/', function(req, res)
{
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

//app.get(/)

app.listen(port, function(err)
{
    if (err)
    {
        console.log(err);
    }
    else
    {
        open('http://localhost:' + port);
        console.log("Server ready and listening on " + port + "...");
    }
});