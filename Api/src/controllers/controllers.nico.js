export const getUsers = async (req, res) => {
  res.status(200);
};

export const createUser = async (req, res) => {
  console.log(req.body);
  res.send("projectCreated");
};
