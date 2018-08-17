const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 3030;

const initialData = require('./initialData').initialData;
const generateId = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1 ) + min);
}

app.get('/projects', (req, res) => {
  res.json(initialData.projects);
});

app.post('/project', (req, res) => {
  const newProject = {
    id: generateId(1, 100000000000),
    title: req.body.title,
    description: req.body.description,
  };
  initialData.projects = initialData.projects.concat([newProject]);
  res.json({message: 'Your project has been successfully added'});
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