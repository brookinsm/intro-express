//Instructor Code

/*------ DUMMY DATA ------*/
const ARTICLES = [
    {
      id: 0,
      title: 'Top 10 Ways to Build Your Express Server',
      content: 'blah blah blah',
    },
    {
      id: 1,
      title: 'Whats better, Express or Django?',
      content: 'Who is to say?',
    },
  ];
  
  const FRUITS = [
    {
      name: 'apple',
      description: 'tasty',
    },
    {
      name: 'pineapple',
      description: 'tropical',
    },
    {
      name: 'plum',
      description: 'its whatever',
    },
  ];
  
  const VEGGIES = [
    {
      name: 'celery',
      description: 'pretty unremarkable',
    },
    {
      name: 'carrots',
      description: 'good for your eyes',
    },
    {
      name: 'cauliflower',
      description: 'vegans favorite',
    },
  ];
  
  /*------ REQUIRED MODULES -----*/
  // We need to require the express package
  const express = require('express');
  const cors = require('cors');
  const logger = require('morgan');
  // We are setting a port number for our server to run on
  const PORT = process.env.PORT || 3000;
  
  // We are using the express package to create a new express web app
  const app = express();
  
  /*------- MIDDLEWARE PIPELINE ------*/
  app.use(cors());
  app.use(logger('dev'));
  // custom middleware
  
  app.use(function (req, res, next) {
    req.time = new Date();
    next();
  });
  
  /*------- ROUTES --------- */
  // We are adding a new route to our web app
  // This route will respond to GET requests going to an empty endpoint
  // Empty endpoint is represented by '/'
  app.get('/', function (req, res) {
    res.json({ data: 'Here is our first response!' });
  });
  
  //
  app.use(function (req, res, next) {
    if (req.query.user) {
      return next();
    } else {
      res.redirect('/');
    }
  });
  
  app.get('/test', function (req, res) {
    console.log('This is our test route');
    res.json({
      data: 'Here is our data from the test route',
      time: req.time,
    });
  });
  
  app.get('/favorite-food', function (req, res) {
    res.send('tacos');
  });
  
  app.get('/about-me', function (req, res) {
    res.json({ name: 'Lincy Thomas', gender: 'female' });
  });
  
  app.get('/movies', function (req, res) {
    console.log('req.time: ', req.time);
    res.json({
      movies: [
        {
          title: 'Army of Darkness',
          releaseDate: 1998,
          durationInMinutes: 90,
        },
        {
          title: 'Clueless',
          releaseDate: 1997,
          durationInMinutes: 90,
        },
        {
          title: 'The Hobbit',
          releaseDate: 2014,
          durationInMinutes: 180,
        },
      ],
      time: req.time,
    });
  });
  
  app.get('/article/:id', function (req, res) {
    console.log(req.params);
    const article = ARTICLES.find(
      (art) => art.id === parseInt(req.params.id)
    );
    res.json(article);
  });
  
  app.get('/find', function (req, res) {
    console.log(req.query);
    let produce;
    if (req.query.type === 'fruit') {
      produce = FRUITS.find((fruit) => fruit.name === req.query.name);
    } else if (req.query.type === 'veggie') {
      produce = VEGGIES.find(
        (veggie) => veggie.name === req.query.name
      );
    }
  
    res.json(produce || { data: 'not found' });
  });
  
  // This code should remain at the bottom of the file
  app.listen(PORT, function () {
    console.log(`Express server is listening on port ${PORT}`);
  });


// My Code 

// //dummy data

// const ARTICLES = [
//     {
//         id: 0,
//         title: 'Top 10 Ways to Build Express Server',
//         content: 'blah, blah, blah'
//     },
//     {
//         id: 1,
//         title: 'Express or Django?',
//         content: 'yo, yo, yo!'
//     }
    
// ];

// const FRUITS = [
//     {
//         name: 'apple',
//         description: 'tasty'
//     },
//     {
//         name: 'plum',
//         description: 'juicy'
//     },   
//      {
//         name: 'pineapple',
//         description: 'tropical'
//     }
// ];

// const VEGGIES = [
//     {
//         name: 'celery',
//         description: 'cruncy'
//     },
//     {
//         name: 'broccoli',
//         description: 'stinky'
//     },   
//      {
//         name: 'brussel sprouts',
//         description: 'little cabbage'
//     }
// ];
// //Required modules
// //We need to require express pkg
// const express = require('express');
// const cors = require('cors');
// const logger = require('morgan');

// //Setting a port to run sever
// const PORT = process.env.PORT || 3000;
// //Using express package to create new express web app
// const app = express();

// //MIDDLEWARE PIPELINE
// app.use(cors());
// app.use(logger('dev'));
// //custom middleware
// app.use(function(req, res, next) {
// if(req.query.user) {
//     next()
// } else {
//     res.redirect('/')   
//     }
// });

// app.use(function(req, res, next) {
//     req.time = new Date();
//     next();
// });


// //Routes
// //Adding new route to web app
// //This route will respond to GET request to empty endpoint
// app.get('/', function(req, res) {
//     res.send('Here is our first response!');
// });

// app.get('/test', function(req, res) {
//     console.log('This is our test route')
//     res.json({ data: 'Here is our data from test route' })
// });

// app.get('/favorite-food', function(req, res) {
//     console.log('This is our fav-food route');
//     res.json('Tacos, Pizza, & Seafood' );
// });

// app.get('/favorite-movie', function(req, res) {
//     console.log('This is our movie route')
//     res.json({ data: 'CB4' })
// });

// app.get('/contact', function(req, res) {
//     console.log('This is our contact route')
//     res.json({ data: 'Behind the bodago' })
// });

// app.get('/about-me', function(req, res) {
//     console.log('This is our about me route')
//     res.json({ aboutme: 'I am just a poor boy, easy come, easy go' })
// });

// //dynamic enpoints
// app.get('/article/:slug', function(req, res) {
//     console.log(req.params.slug);
//     const article = ARTICLES.find(art => art.id === parseInt(req.params.slug))
//     res.json(article);
// });

// //find params
// app.get('/find', function(req, res) {
//     console.log(req.query);
//     let produce
//     if(req.query.type === 'fruit') {
//         produce = FRUITS.find(fruit => fruit.name === req.query.name);
//     } else if (req.query.type === 'veggies') {
//         produce = VEGGIES.find(veggie => veggie.name === req.query.name);
//     } else {
//         produce = {data: '404: not found'};
//     }
//     res.json(produce);
// });






// // This code should remain at the bottom of the file
// app.listen(PORT, function() {
//     console.log(`Express server listening on port ${PORT}`)
// });