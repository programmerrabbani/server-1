const express = require('express');
const { showAboutPage, showGalleryPage, showPrivacyPage, showFaqPage } = require('../controller/pageController');



// init router

const router = express.Router();

// make router

router.get('/about' , showAboutPage);

router.get('/gallery', showGalleryPage);

router.get('/Privacy', showPrivacyPage);

router.get('/faq', showFaqPage);





// exports router

module.exports = router;