const RequestRouter=require('express').Router()
const RequestController=require('../controllers/request')

RequestRouter.post('/add',RequestController.addRequest)
RequestRouter.get('/get',RequestController.getRequest)
RequestRouter.get('/getOne/:id',RequestController.getOneRequest)
RequestRouter.put('/updateOne/:id',RequestController.updateOneRequest)
RequestRouter.delete('/deleteOne/:id',RequestController.deleteOneRequest)


module.exports=RequestRouter;