# Generation10 test

## Dependencies:

- Yarn
- Angular 5
- Node.js >= 8.10.0

## Getting started

Clone the repo and cd into it:

    $ git clone git@github.com:jbonigomes/generation10-angular.git && cd generation10-angular

Install all Yarn dependencies:

    $ yarn install

Run the API:

    $ cd server && php -S localhost:8000

Finally, open a new terminal window, navigate to the root of the app and run:

    $ ng serve

You can now point your browser to http://localhost:4200 and navigate the app.

If you wish to re-seed the SQLite DB:

    $ php server/populate_db.php

## Libraries

- [Moment.js](http://momentjs.com) was used to handle dates
- [PapaParse](http://papaparse.com) was used to parse csv's
- [AngularMaterial](http://material.angular.io) table component
- [Britecharts](http://eventbrite.github.io/britecharts) donut and bar charts

## Loading animation

The loading animation has been donated by [tobiasahlin](http://tobiasahlin.com/spinkit)
