import express from "express"
import dotenv from"dotenv"
import cors from "cors"
import { connectdb } from "./Db/db.js"
import route from "./route/gym.routes.js"
dotenv.config()

const port = process.env.PORT || 5000;
const app=express()
app.use(cors())
app.use(express.json())


connectdb()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server runnning ${port}`)
    })
})
.catch((error)=>{
        console.log("Error :",error)
})

app.use("/api",route)