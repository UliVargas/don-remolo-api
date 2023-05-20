# Pizzeria Don Remolo REST API

### This is a basic api for the ID For Ideas project 3, which serves as a practice.

<br>

## Technologies
Project is created with:
* Typescript
* ExpressJS
* Yarn
* Prisma ORM
* Bcrypt
* JWT

## Minimum Requirements

* Yarn v1.22.19
* NodeJS v14.20.1
* Docker Desktop v4.19.0

## Variables Enviroment
Add in the root a folder called __env__ and inside a file __.env__

```` env
DATABASE_URL = "postgresql://postgres:postgres@localhost:5432/donremolodb?schema=public"
PORT = 5000
JWT_SECRET_KEY = 'secret_key'
````
# Setup
Install the dependencies

```` bash
$ yarn install
````

* ### IMPORTANT! __Before you start you need to run docker compose and the seed to create your database and fill it with data that is in /prisma/mocks__

Run the following command to create a database service in a Docker container, this only needs to be done when you first download the repository or if you delete the docker services from Docker Desktop.
````
$ docker compose up -d
````

* The -d (detach) is for the container to start working in the background as soon as everything is finished downloading.


In order for the prism schematic containing the database models to be entered into the database, you must run the following command:
````
$ yarn prisma db push
````
The prisma client also needs to know this schema, for that the client must be generated with the schema. To generate the client we will use the following command:
````
$ yarn prisma generate
````



Run the following command to populate the database with product information.
````
$ yarn prisma db seed
````

# Start the application

Run the project

```` bash
$ yarn dev
````
