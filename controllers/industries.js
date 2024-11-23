const industies = require("../models/industries")

module.exports={
    addIndustry:async(req,res)=>{
        try {
            const data=await industies.create(req.body)
            if (data) return res.status(200).json('created')
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getIndustry:async(req,res)=>{
        try {
            const data=await industies.findAll()
            if (data) return res.status(200).json(data)
            return res.status(400).json('something went wrong')
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    getOneIndustry:async(req,res)=>{
        try {

            const data=await industies.findOne({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    updateOneIndustry:async(req,res)=>{
        try {

            const data=await industies.update(req.body,{where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    },
    deleteOneIndustry:async(req,res)=>{
        try {

            const data=await industies.destroy({where:{id:req.params.id}})
            if (data) return res.status(200).json(data)
            else{
        return res.status(400).json('something went wrong')
        }
            
        } catch (e) {
            res.status(500).json('internal server error')
        }
    }
}