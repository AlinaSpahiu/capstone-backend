const express = require('express');
const roomsRouter = express.Router()
const RoomsSchema = require('../models/rooms');

//get All rooms:
roomsRouter.get('/', async( req, res, next) =>{
   try{
       const roomsList = await RoomsSchema.find(req.query)
       res.send(roomsList)
   }catch(error){
       next(error)
   }
})

// get only one Room:
roomsRouter.get('/:id', async(req, res, next) =>{
    try{
        const room = await RoomsSchema.findById(req.params.id)
        if(room) {res.send(room)}
        else {
            const error = new Error()
            error.httpStatusCose = 404;
            res.send("Resource not found!")
            next(error)
        }
        console.log(room)
    }catch(error){
        next(error)
    }
})

// post a room:
roomsRouter.post("/", async( req, res, next) =>{
    try{
        const newRoom = new RoomsSchema(req.body)
        const response = await newRoom.save();
        res.send(response)
    }catch(error){
        next(error)
    }
})

// update a room:
roomsRouter.put("/:id", async(req, res, next) => {
    try{
        const room = await RoomsSchema.findByIdAndUpdate(req.params.id, req.body)
        console.log(room);
        res.send(room);
    }catch(error){
        next(error)
    }
})

// delete a room:
roomsRouter.delete("/:id", async(req, res, next) =>{
    try{
        const room = await RoomsSchema.findByIdAndDelete(req.params.id)
        console.log("Deleted!");
        res.send("Deleted!");
    } catch(error){
        next(error)
    }
})

module.exports = roomsRouter