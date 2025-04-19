import {
    getAll,
    createAll,
    deleteAll,
    deleteOne,
    updateGym
} from "../controllers/gym.controllers.js"
import express from "express"

const route = express.Router()


route.get("/GetAll",getAll)
route.post("/",createAll)
route.delete("/",deleteAll)
route.delete("/:id",deleteOne)
route.put("/:id",updateGym)

export default route;