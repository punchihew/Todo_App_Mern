const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const TadoModel = require ('./model/Tado')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://navishkapunchihewa66:P1EfGT7KBTy9uaPX@mern.kovps.mongodb.net/?retryWrites=true&w=majority&appName=Mern")


app.post("/add", async (req, res) => {
    
        const task = req.body.task;
        TadoModel.create({
            task: task
        }).then(result => res.json(result))
        .catch(err => res.json(err))
    
})

app.listen(3001,() =>{
    console.log("Server Is Runnig ")
})



