const express = require('express');
const { showCoursePage, showCoursePage2 } = require('../controller/courseController');


// init router

const router = express.Router();


// make router

router.get('/course' , showCoursePage);
router.get('/course-2' , showCoursePage2);






// exports router

module.exports = router;