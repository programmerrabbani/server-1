const express = require('express');
const { showHomePage, showHomePage2, showHomePage3, showHomePage4 } = require('../controller/homeController');


// init router

const router = express.Router();

// make route

router.get('/', showHomePage);
router.get('/home-2' , showHomePage2);
router.get('/home-3' ,showHomePage3);
router.get('/home-4' , showHomePage4);



// router exports

module.exports = router;