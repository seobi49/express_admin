var express = require('express');
var router = express.Router();
var env = require('../config/user_env');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('env!!!' + env);
  res.render('index', { env, title: 'Express' });
});

module.exports = router;
