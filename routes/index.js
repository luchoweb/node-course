const express = require('express');
const router = express.Router();

const MyInfo = require('../controllers/myinfo');
const Projects = require('../controllers/projects');

router.get('/', (req, res) => {
  res.render('index', {
    info: MyInfo.info,
    projects: Projects.all
  });
});

module.exports = router;
