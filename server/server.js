import http from 'http';
import helmet from 'helmet';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import knex from 'knex';
// import db from './db/db';
import bcrypt from 'bcrypt';

const hostname = '0.0.0.0';
const port = 3001;
const app = express()
const server = http.createServer(app);

const db = knex({
  client: 'pg',
  connection: process.env.POSTGRES_URI
})

// secure headers
app.use(helmet())

// to enable cors
app.use(cors())

// log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   const token = req.get('Authorization')

//   if (token) {
//     req.token = token
//     next()
//   } else {
//     res.status(403).send({
//       error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
//     })
//   }
// })

app.get('/', (req, res) => {
  console.log('test')
  res.status(200).send(db.users)
});

app.post('/signup', (req, res) => {
  console.log(req.body)
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send('Incorrect Form Submission')
  }

  const hash = bcrypt.hash(10, () => {
    console.log('hashing pw')

    db.transaction(trx => {
      trx.insert({
        hash,
        email
      })
        .into('signup')
        .returning('email')
        .then(signupEmail => {
          // also insert into users table
          return trx('users')
            .returning('*')
            .insert({
              email: signupEmail[0],
              username,
              joined: new Date()
            })
            .then(user => res.json(user[0]))
        })
        .then(trx.commit)
        .catch(trx.rollback)
    }).catch(err => {
      console.log({ err })
      res.status(400).send('unable to sign up')
    })
  })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Incorrect Form Submission')
  }

  db.select('email', 'hash').from('login')
    .where('email', '=', email)
    .then(data => {
      return data
    })
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});