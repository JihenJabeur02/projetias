const industryRouter=require('express').Router()
const industryController=require('../controllers/industry')

industryRouter.post('/add',industryController.addIndustry)
industryRouter.get('/get',industryController.getIndustry)
industryRouter.get('/getOne/:id',industryController.getOneIndustry)
industryRouter.put('/updateOne/:id',industryController.updateOneIndustry)
industryRouter.delete('/deleteOne/:id',industryController.deleteOneIndustry)


module.exports=industryRouter