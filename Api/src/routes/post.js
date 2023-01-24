import { Router } from "express";
import { getPosts } from "../controllers/index.controllers.js";

const Post = Router();

Post.get("/", getPosts);

export default Post;
