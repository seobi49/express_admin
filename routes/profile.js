var express = require('express');
var router = express.Router();
var env = require('../config/user_env');

/* GET users listing. */
router.get('/profile', function(req, res, next) {
  console.log('env : ' + env.serviceName);
  res.render('profile/profile', { env, title: env.serviceName + ' login' });
});


module.exports = router;
