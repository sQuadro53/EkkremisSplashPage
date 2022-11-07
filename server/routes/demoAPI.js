const express = require('express');
const router = express.Router({mergeParams: true});
const demoController = require('../controllers/demoController');
const data = require('../public/data.json');

router.get('/', (req, res) => {
  return res.status(200).send(data);
});

module.exports = router;