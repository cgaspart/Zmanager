require('babel-register');
const {success, error} = require('./srcs/jsonReturn.js');
const zdb = require('./srcs/zdb.js')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/nodeSaved', (req, res) => {
  let nbOfNodes = zdb.getNumberOfNodes();
  res.send(success(nbOfNodes));
})

app.get('/api/addExemple', (req, res) => {
  let result = zdb.addexemple();
  res.send(success(result));
})

app.get('/api/rmAll', (req, res) => {
  let result = zdb.deleteAll();
  res.send(success(result));
})


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/addNode', (req, res) => {
  console.log(req.body);
  let result = zdb.addNode(req.body.post);
  res.send(success(result));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
