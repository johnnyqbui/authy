import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

const hostname = 'localhost';
const port = 3001;
const app = express()
const server = http.createServer(app);

// to enable cors
app.use(cors())

// log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    req.token = token
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    })
  }
})

app.get('/', (req, res) => {
  res.send(`hello, if you're here, Your access has been granted`)
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});