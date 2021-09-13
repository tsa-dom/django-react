# Homework

## About

This is a simple example application which shows how to connect Django backend and React frontend in the production environment.

## Geting started

At first you should clone this repository with command

    $ git clone https://github.com/tsa-dom/homework.git

## Development

Node version 16 and Python 3 are required to run an application in the development mode.

Create and activate virtual environment for django with commands

    $ python3 -m venv venv
    $ source venv/bin/activate

Start Django backend environment with following command in the path ```/backend/app```

    $ python manage.py runserver 0.0.0.0:8000

Install node modules in the path ```/fronend```

    $ npm install

Start React app with command

    $ npm start

## Production

You should have [Docker](https://www.docker.com/) installed to your computer to proceed further.

You can create a docker image with following command in the root of cloned repository

    $ docker build . -t django-react

Now you should be able to start a docker container with command

    $ docker run -p 8000:8000 django-react

If everything works as expected then you should be able to see test button in the url

    $ localhost:8000/api