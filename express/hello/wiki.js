var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.send('Wiki home page')
})

router.get('/about', (req, res) => {
    res.send('Wiki about page')
})

module.exports = router