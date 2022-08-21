const path = require('path');


const showAboutPage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/about.html'));

}

const showGalleryPage = (req, res) => {

   res.status(200).sendFile(path.join(__dirname, '../public/gallery.html'));

}

const showPrivacyPage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/policy.html'));

}

const showFaqPage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/faq.html'));

}

module.exports ={
    showAboutPage,
    showGalleryPage,
    showPrivacyPage,
    showFaqPage
}