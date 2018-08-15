var express = require('express');
var router = express.Router();
var env = require('../config/user_env');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  console.log('env : ' + env.serviceName);
  res.render('login/login', { env, title: env.serviceName + ' login' });
});

router.get('/signup', function(req, res, next) {
  res.render('login/signup', { env, title: env.serviceName + ' signup' });
});

module.exports = router;
