## How to run

1. Clone this repo
2. Navigate to client directory:
    - Run `npm install`
    - Run `npm start`
2. Navigate to Server directory:
    - Make sure you have docker installed and running on your computer
    - Run `docker-compose up` ( you may have to run `docker-compose up --build` for the first setup phase)

Build with `docker-compose build`

Bring it all down with `docker-compose down`

To access backend's bash:
Run `docker-compose exec authy-api bash`

To access postgres: (adjust PORT number if needed)
Run  `psql postgres://<username>:<password>@localhost:5432/authy-db`