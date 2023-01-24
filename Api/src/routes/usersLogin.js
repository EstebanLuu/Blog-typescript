import { getUsers } from "../controllers/index.controllers.js";
import { Router } from "express";

const Users = Router();

Users.get("/", getUsers);

export default Users;
