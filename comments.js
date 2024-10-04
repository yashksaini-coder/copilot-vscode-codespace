// Create web server that listens on port 3000
// Create a route that listens for POST requests on /comments
// When a POST request is made, read the body of the request and save the comment in an array
// Create a route that listens for GET requests on /comments
// When a GET request is made, return all the comments in the array

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
    comments.push(req.body.comment);
    res.send('Comment added');
});

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

