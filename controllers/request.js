const product = require("../models/Request")

module.exports={
    addRequest:async(req,res)=>{
        try {
            const data=await Request.create(req.body)
            if (data) return res.status(200).json('created')
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getRequest:async(req,res)=>{
        try {
            const data=await Request.findAll()
            if (data) return res.status(200).json(data)
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getOneRequest:async(req,res)=>{
        try {

            const data=await Request.findOne({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    updateOneRequest:async(req,res)=>{
        try {

            const data=await Request.update(req.body,{where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    deleteOneRequest:async(req,res)=>{
        try {

            const data=await Request.destroy({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    }
}