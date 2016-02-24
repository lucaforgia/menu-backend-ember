/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var tiersRouter = express.Router();

  tiersRouter.get('/', function(req, res) {
	  res.send({
        "tiers": [
  		{
  			"_id":0,
  			"children":[1,2,3]
  		},
          {
            "_id":1,
            "title":"first root",
            "href":null,
            "children":[4,5],
            "parent":null,
            "sort":null
          },
          {
            "_id":2,
            "title":"second root",
            "href":"http://www.google.com",
            "children":null,
            "parent":null,
            "sort":null
          },
          {
            "_id":3,
            "title":"terzo root",
            "href":"#null",
            "children":null,
            "parent":null,
            "sort":null
          },
          {
            "_id":4,
            "title":"quarto sotto primo",
            "href":"#quarto",
            "children":[6,7],
            "parent":1,
            "sort":null
          },
          {
            "_id":5,
            "title":"quinto sotto primo",
            "href":"quinto",
            "children":null,
            "parent":1,
            "sort":null
          },
          {
            "_id":6,
            "title":"sesto sotto quarto sotto primo",
            "href":"#sesto",
            "children":null,
            "parent":4,
            "sort":null
          },
          {
            "_id":7,
            "title":"settimo",
            "href":"#sesto",
            "children":null,
            "parent":4,
            "sort":null
          }

        ]
      });
  });

  tiersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  tiersRouter.get('/:id', function(req, res) {
    res.send({
      'tiers': {
        "_id": req.params.id,
		"title":"cracatua",
		"href":null,
		"children":[4,5],
		"parent":null,
		"sort":null
      }
    });
  });

  tiersRouter.put('/:id', function(req, res) {
    res.send({
      'tiers': {
        id: req.params.id
      }
    });
  });

  tiersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/tiers', require('body-parser'));
  app.use('/api/tiers', tiersRouter);
};
