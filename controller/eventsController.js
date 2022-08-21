const path = require('path');



const showEventPage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/events.html'));

}

const showEventPage2 = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/events-2.html'));

}

const showEventPage3 = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/events-single.html'));

}


module.exports = {

    showEventPage,
    showEventPage2,
    showEventPage3

}