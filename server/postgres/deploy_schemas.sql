-- Deply fresh database tables

\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/signup.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'

-- For testing purposes only. This file will add dummy data
\i '/docker-entrypoint-initdb.d/tables/seed.sql'
