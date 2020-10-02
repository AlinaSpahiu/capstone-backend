//get All rooms:
roomsRouter.get('/', async( req, res, next) =>{
   try{
       const roomsList = await RoomsSchema.find(req.query)
       res.send(roomsList)
   }catch(error){
       next(error)
   }
})
