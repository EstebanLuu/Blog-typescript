import { getUsers, createUser } from "../controllers/index.controllers.js";
import { Router } from "express";

const Users = Router();

Users.get("/", getUsers);
Users.post("/", createUser);

export default Users;
