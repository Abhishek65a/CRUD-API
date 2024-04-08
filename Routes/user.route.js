import express  from "express";
import { create, deleteUser, fetch, update } from "../Controllers/user.controller.js";

const route=express.Router()

route.post("/create",create)
route.get("/getallusers",fetch)
route.put("/update/:id",update)
route.delete("/delete/:id",deleteUser)

export default route; 