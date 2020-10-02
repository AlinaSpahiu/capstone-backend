const express = require('express');
const router = express.Router()
const UserSchema = require('../models/users');

router.get('/', ( req, res) =>{
  res.send('Get Request!')
})

module.exports = router