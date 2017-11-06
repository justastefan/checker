/* eslint-env node */
'use strict';
var Router = require('express');
var bodyParser = require('body-parser')
var pluralize = require('pluralize');

// demo data
var DB = {
  user: [
    {
      id: 1,
      name: 'justastefan',
      email: 'foo@bar.com'
    },
    {
      id: 2,
      name: 'jcr',
      email: 'j@cr.com'
    }
  ],
  activity: [
    {
      id: 2,
      name: 'Liegestütze (Anzahl)',
      inputType: 'counter'
    },
    {
      id: 3,
      name: 'Dart (Maximum)',
      inputType: 'counter'
    },
    {
      id: 4,
      name: 'Schwimmen (Minuten)',
      inputType: 'timer'
    },
    {
      id: 5,
      name: 'Kalt Duschen (Check)',
      inputType: 'boolean'
    }
  ],
  activityItem: [
    {
      id: 3,
      relatedDate: '2017-11-01',
      amount: 20.0,
      activity: 1,
      user: 1
    }
  ]
};
var maxId = 1;

function list(modelName) {
  // filter anzahl auf MAX_RESULTS
  var response = {};
  // TODO: pluralize: import pluralize  from "pluralize";
  //response[pluralize(modelName)] = DB[modelName];
  response[modelName] = DB[modelName];
  return response;
}

function crudRoute(modelName) {
  const router = new Router();
  var modelNamePlural = pluralize(modelName);

  router.get("/", (req, res) => {
    var response = {};
    response[modelNamePlural] = DB[modelName];
    res.json(response);
  });

  router.post("/", (req, res) => {
    var data = req.body;
    if (!data[modelName]) {
      // no root element with the models name found
      // {  category: {id: 1, name: '12'}}
      res.sendStatus(400).end();
    }
    maxId++;
    var response = data;
    response[modelName].id = maxId;
    DB[modelName].push(response[modelName]);
    res.json(response);
  });

  router.get("/:key", (req, res) => {
    var id = req.params.key;
    if (!DB[modelName]) {
      res.sendStatus(404).end();
    }
    const filtered = DB[modelName].filter(entry => entry.id == id);
    if (filtered.length) {
      // gefunden
      var response = {};
      response[modelName] = filtered[0];
      res.json(response);
    } else {
      res.status(404).end();
    }
  });

  router.put("/:key", (req, res) => {
    var id = req.params.key;
    var data = req.body;
    if (!DB[modelName]) {
      res.sendStatus(404).end();
    }

    if (!data[modelName]) {
      // no root element with the models name found
      // {  category: {id: 1, name: '12'}}
      res.sendStatus(400).end();
    }

    const index = DB[modelName].findIndex(entry => entry.id == id);
    if (index >= 0) {
      DB[modelName][index] = data[modelName];
      res.json(data); // data is already correct formatted
    } else {
      res.status(404).end();
    }
  });

  router.delete("/:key", (req, res) => {
    var id = req.params.key;
    if (!DB[modelName]) {
      res.ok();
    }
    const index = DB[modelName].findIndex(entry => entry.id == id);
    if (index >= 0) {
      delete DB[modelName][index];
    }
    res.ok();
  });

  return router;
}

var api = function(modelName) {
  var api = Router();
  var modelNamePlural = pluralize(modelName);
  console.log('Registering route: /'+modelNamePlural);
  api.use('/' + modelNamePlural, crudRoute(modelName));
	return api;
}

module.exports = {
  name: 'api',
  serverMiddleware({app}) {
    app.use(bodyParser.json());
    ['activity', 'activityItem', 'user'].forEach(
      routeName => app.use('/api', api(routeName))
    );
  }
};
