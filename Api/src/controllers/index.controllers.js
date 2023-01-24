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
