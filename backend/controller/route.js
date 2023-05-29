const apiRouter = require("express").Router()
const Data = require("../models/data")



apiRouter.get("/", (req, res) =>{
    const region = req.query.region
    const type = req.query.type
    if (Array.isArray(type)){
        Data.find(((!region) || (region === "All")) ? {type: {$in: type}} 
            : {region: region, type: {$in: type}})
            .then(data => res.json(data))
    }else if (type){
        Data.find(((!region) || (region === "All")) ? {type: type} 
            : {region: region, type: type})
            .then(data => res.json(data))
    }else{
        Data.find(((!region) || (region === "All")) ? {} 
            : {region: region})
            .then(data => res.json(data))
    }
    /* const helper = async () => {
        try{
            if (Array.isArray(type)){
                retrievedData = await Data.find(
                    ((!region) || (region === "All"))? {type: {$in: type}} 
                    : {region: region, type: {$in: type}})
            }else if (type){
                retrievedData = await Data.find(
                    ((!region) || (region === "All"))? {type: type} 
                    : {region: region, type: type})
            }else{
                retrievedData = await Data.find(
                    ((!region) || (region === "All"))? {} 
                    : {region: region})
            }
            return retrievedData
        } catch(error){
            console.log("Error in retriving data:", error.message)
            return {}
        }
    }
    helper().then(data => res.json(data)).catch(res.json({})) */
})

/* apiRouter.get("/api/posts", (req, res) =>{
    Post.find({}).then(posts => {
        res.json(posts)
      })
}) */


module.exports = apiRouter
