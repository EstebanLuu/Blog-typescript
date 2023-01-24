import { Postblogs } from "../models/posts.js";
import { User } from "../models/users.js";

export const getUsers = async (req, res) => {
  try {
    const Users = await User.findAll();
    console.log(Users);
    res.json(Users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
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

export const createPosts = async (req, res) => {
  console.log(req.body);
  const { title, description, img } = req.body;
  try {
    const newPost = await Postblogs.create({
      title: title,
      description: description,
      img: img,
    });
    console.log(newPost);
    res.send("se creó el post");
  } catch (error) {
    console.log(error);
  }
};
