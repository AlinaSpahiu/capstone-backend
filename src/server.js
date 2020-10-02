const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const listEndpoints = require("express-list-endpoints")

// Routes:
const usersRouter = require('./routes/users');
const roomsRouter = require('./routes/rooms')
server.use('/rooms', roomsRouter);
server.use('/users', usersRouter);

// Error Handlers: 
const { notFoundHandler, badRequestHandler, genericErrorHandler } = require("./errorHandlers")
server.use(badRequestHandler)
server.use(notFoundHandler)
server.use(genericErrorHandler)

console.log(listEndpoints(server))

// Connecting with database:
mongoose
  .connect("mongodb://localhost:27017/goldmoon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
     server.listen(port, () =>{
       console.log(`Hey! Find me on port: ${port}`)
    })
   )
  .catch((err) => console.log(err))