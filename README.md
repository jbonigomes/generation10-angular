# Generation10 test

Dependencies:

- Yarn
- Angular 5
- Node.js >= 8.10.0

First install all Yarn dependencies:

    $ yarn install

Then populate the SQLite DB:

    $ cd server
    $ php populate_db.php

Finally, run the API:

    $ php -S localhost:8000

Open a new terminal window, navigate to the root of the app and run:

    $ ng serve

You can now point your browser to 'http://localhost:4200' to navigate the app.

# Libraries

- [Moment.js](http://momentjs.com) was used to handle dates
- [PapaParse](http://papaparse.com) was used to parse csv's
- [AngularMaterial](http://material.angular.io) was the chosen UI elements
- [Britecharts](http://eventbrite.github.io/britecharts) was used for the data visualisation

# Loading animation

The loading animation has been donated by [tobiasahlin](http://tobiasahlin.com/spinkit)
