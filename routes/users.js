const express = require('express')
const User = require('../models/User')
const router = express.Router();

router.get('/', async(req,res)=> {
    try{
        const users = await User.find();
        res.send(users);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send("server error");
    }
})
module.exports = router