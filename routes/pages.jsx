const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('This is read page with routes')
} )
router.get('/contact', (req, res)=>{
    res.send('This is the contact page')
})

module.exports = router