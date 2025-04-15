const express = require('express')

const router = express.Router()

router.get('/',(req,res) => {
    res.json({mssg:'get response'})
})

router.get('/:id',(req,res) => {
    res.json({mssg:'get single response'})
})

router.post('/',(req,res)=>{
    res.json({mssg:'post response'})
})

router.delete('/:id',(req,res) => {
    res.json({mssg:'delete response'})
})

router.patch('/:id',(req,res) => {
    res.json({mssg:'update response'})
})

module.exports = router