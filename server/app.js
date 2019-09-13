import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const hostname = 'localhost';
const port = 3001;
const app = express()
// setup express application
const server = http.createServer(app);

// log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log({ req, res })
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
  res.send(`hello`)
});

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the default API route',
}));


server.listen(() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});