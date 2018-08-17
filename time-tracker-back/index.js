const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3030;

const initialData = require('./initialData').initialData;

app.get('/', (req, res) => {
  res.json({ message: 'Hooray! welcome to our api!'});
});

app.get('/projects', (req, res) => {
    res.json(initialData.projects);
});

app.get('/project/:id', (req, res) => {
    const id = Number(req.params.id);
    res.json(initialData.projects.find(project => project.id === id));
});

app.post('/', async (req, res) => {
    const {duration} = req.body; //retrieving whatever from the body
    res.send({message: `Your duration '${duration}' was successfully entered`});
});

app.listen(port);
console.log(`Magic happens on port ${port}`);