const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

//newController.index

router.get('/:slug', coursesController.show);

module.exports = router;