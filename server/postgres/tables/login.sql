BEGIN TRANSACTION;

CREATE TABLE login (
  id serial PRIMARY KEY,
  hash varchar(100) NOT NULL,
  email text NOT NULL
);

COMMIT;