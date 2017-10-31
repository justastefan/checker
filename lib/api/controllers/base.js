import { Router } from 'express';
// import pluralize  from "pluralize";
import {ok, fail} from "./utils";

var DB = {};
var maxId = 1;

const MAX_RESULTS = 100;

/**
  Generic controller that provides CRUD operations for a given Mongoose model
*/
var class BaseController {

  constructor(modelName, key) {

    console.log('init /api/'+modelName+' v2.0');

    this.modelName = modelName;
    this.key = key;
  }

  create(data) {
    maxId++;
    // set data
    // todo: find() & update else insert
    // insert
    data.id = maxId;
    DB[this.modelName][maxId] = data;
    var response = {};
    response[this.modelName] = data;
    return response;
  }

  read(id) {
    if (!DB[this.modelName]) {
      return {};
    }
    if (!DB[this.modelName][id]) {
      return {};
    }
    // gefunden!
    var response = {};
    response[this.modelName] = DB[this.modelName][id];
    return response;
  }

  list() {
    // filter anzahl auf MAX_RESULTS
    var response = {};
    // TODO: pluralize: import pluralize  from "pluralize";
    //response[pluralize(this.modelName)] = DB[this.modelName];
    response[this.modelName] = DB[this.modelName];
    return response;
  }

  delete(id) {
    if (!DB[this.modelName]) {
      return {};
    }
    if (!DB[this.modelName][id]) {
      return {};
    }
    delete DB[this.modelName][id];
    return {};
  }


  /**
   */
  update(id, data) {
    if (!DB[this.modelName]) {
      return {};
    }
    if (!DB[this.modelName][id]) {
      return {};
    }
    // gefunden!
    var response = {};
    // update
    data.id = id;
    response[this.modelName] = data;
    return response;
  }

  route(){
    const router = new Router();
    router.get("/", (req, res) => {
      this
        .list()
        .then(ok(res))
        .then(null, fail(res));
    });

    router.post("/", (req, res) => {
      this
        .create(req.body)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.get("/:key", (req, res) => {
      this
        .read(req.params.key)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.put("/:key", (req, res) => {
      this
        .update(req.params.key, req.body)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.delete("/:key", (req, res) => {
      this
        .delete(req.params.key)
        .then(ok(res))
        .then(null, fail(res));
    });

    return router;
  }
}
