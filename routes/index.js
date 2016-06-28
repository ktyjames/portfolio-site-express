var express = require('express');
var router = express.Router();

var pagesController = require('../controllers/pages')

router.get('/', pagesController.getIndexPage)

module.exports = router;
