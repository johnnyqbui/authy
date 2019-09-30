BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined, ) values ('jim', 'jim@gmail.com', 3, '2019-10-01');
INSERT into login (hash, email) values ('somehashvalue', 'jim@gmail.com');

COMMIT;