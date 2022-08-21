const path = require('path');


const showHomePage = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));

}

const showHomePage2 = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/index-2.html'));

}

const showHomePage3 = (req, res) => {

   res.status(200).sendFile(path.join(__dirname, '../public/index-3.html'));

}

const showHomePage4 = (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '../public/index-4.html'));

}




module.exports ={

    showHomePage,
    showHomePage2,
    showHomePage3,
    showHomePage4


}