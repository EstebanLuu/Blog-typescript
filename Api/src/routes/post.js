import { Router } from "express";

const Post = Router()

Post.get("/:id",async(req,res)=>{
    try {
        console.log("alguien entro al post")
    } catch (error) {
        console.log(error)
    }
})

export default Post