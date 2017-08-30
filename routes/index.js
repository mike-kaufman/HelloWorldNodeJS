var express = require('express');
var router = express.Router();
const process = require('process');

/* GET home page. */
router.get('/', function(req, res, next) {
  const envVal = process.env['EXTRAINFO'] || 'undefined';
  const extra = `EXTRAINFO is ${envVal}`;
  res.render('index', { title: 'Express', extraInfo: extra });
});

module.exports = router;
