const apiRouter = require("express").Router()
const Data = require("../models/data")
const Post = require("../models/posts")


apiRouter.get("/data", (req, res) =>{
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
})

apiRouter.post("/post", (req, res) =>{
    const {name, contactNumber, itemsToDonate, location, timing, comments} = req.body
    const post = new Post({
        name,
        contactNumber,
        itemsToDonate,
        location,
        timing,
        comments
    })
    post.save().then(savedPost => {
        console.log("Data saved")
        res.json(savedPost)
    })
    .catch(error => console.log("Encountered error when saving: ", error.message))
}) 
/* apiRouter.get("/api/posts", (req, res) =>{
    Post.find({}).then(posts => {
        res.json(posts)
      })
}) */


module.exports = apiRouter
