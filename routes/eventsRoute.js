const express = require('express');
const { showEventPage, showEventPage2, showEventPage3 } = require('../controller/eventsController');



// init router

const router = express.Router();

// make route

router.get( '/' ,  showEventPage);

router.get( '/even2' ,  showEventPage2);

router.get( '/even3' ,  showEventPage3);





// exports router

module.exports = router;