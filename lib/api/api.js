//import { CategoriesController }	from './controllers';
var Router = require('express');
//var api = require('./api');

module.exports = function() {
  var api = Router();
	api.use('/categories', new CategoriesController().route());
	return api;
}
