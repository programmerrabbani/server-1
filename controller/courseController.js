const path = require('path');

const showCoursePage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/courses.html'));

}

const showCoursePage2 = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/contact-2.html'));

}


module.exports = {
    showCoursePage,
    showCoursePage2
}