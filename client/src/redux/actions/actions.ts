import { user } from "@/types";
import axios from "axios";
import { LOGIN, REGISTER } from "../types";

export const registerUser = async (payload: string): Promise<user> => {
  try {
    const res = await axios.post(`/auth/register`, payload);

    console.log("se ha registrado correctamente");
    return res.data;
  } catch (error) {
    throw error;
  }
};
