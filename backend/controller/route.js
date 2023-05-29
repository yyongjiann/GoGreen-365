const apiRouter = require("express").Router()
const Data = require("../models/data")
const Post = require("../models/posts")
const exhibitions = require("../models/data")


apiRouter.get("/", (req, res) =>{
    const region = req.query.region
    const type = req.query.type
    const helper = async () => {
        try{
            if (Array.isArray(type)){
                retrievedData = await Data.find(
                    region === "All"? {type: {$in: type}} 
                    : {region: region, type: {$in: type}})
            }else if (type){
                retrievedData = await Data.find(
                    region === "All" ? {type: type} 
                    : {region: region, type: type})
            }
            res.json(retrievedData)
        } catch(error){
            console.log("Error in retriving data:", error.message)
            res.json({})
        }
    }
    helper()
})

/* apiRouter.get("/api/posts", (req, res) =>{
    Post.find({}).then(posts => {
        res.json(posts)
      })
}) */


module.exports = apiRouter
