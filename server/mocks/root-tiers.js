module.exports = function(app) {
  var express = require('express');
  var rootTiersRouter = express.Router();

  rootTiersRouter.get('/', function(req, res) {
    res.send({
      'rootTiers': [
        {
          "_id":1,
          "children":[1,2,3]
        }
      ],
      "tiers": [
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

  rootTiersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  rootTiersRouter.get('/:id', function(req, res) {
    res.send({
      'root-tiers': {
        id: req.params.id
      }
    });
  });

  rootTiersRouter.put('/:id', function(req, res) {
    res.send({
      'root-tiers': {
        id: req.params.id
      }
    });
  });

  rootTiersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/rootTiers', rootTiersRouter);
};
