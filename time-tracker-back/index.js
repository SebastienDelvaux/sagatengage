const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3030;

app.get('/', (req, res) => {
  res.json({ message: 'Hooray! welcome to our api!'});
});

app.post('/', async (req, res) => {
    const {duration} = req.body; //retrieving whatever from the body
    res.send({message: `Your duration '${duration}' was successfully entered`});
});

app.listen(port);
console.log(`Magic happens on port ${port}`);