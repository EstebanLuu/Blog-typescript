import { Postblogs } from "../models/posts.js";

export const getUsers = (req, res) => {
  res.send("users");
  try {
    console.log("alguien entro a los users");
  } catch (error) {
    console.log(error);
  }
};

export const getPosts = (req, res) => {
  res.send("posts");
  try {
    console.log("alguien entro al post");
  } catch (error) {
    console.log(error);
  }
};

export const createPosts = async(req, res) => {
  console.log(req.body);
  const { title, description, img } = req.body;
  try {
    const newPost = await Postblogs.create({
      title:title,
      description: description,
      img: img,


    })
    console.log(newPost)
    res.send("se creó el post");

  } catch (error) {
    console.log(error);
  }
};
