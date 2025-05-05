const express = require('express');

const app = express();

app.listen(3000);

app.get('/posts', (req, res) => {
    res.send({"message" : "GET response"});
});

app.post('/posts', (req, res) => {

    res.statusCode = 201;
    res.send ({"message" : "POST response"});
});

app.delete('/posts', (req, res) => {
    res.send ({"message" : "DELETE response"});
});

app.patch('/posts', (req, res) => {
    res.send({"message" : "PATCH response"});
});