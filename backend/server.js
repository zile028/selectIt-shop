//server
const express = require("express");
const cors = require("cors")
const users = require("./users.json")
const app = express()
app.use(cors())

// app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post("/user",(req, res)=>{

    const {pet,color} = req.body
    console.log(pet)


    res.send(users)
})

app.get("/user/:id",(req,res)=>{

    let findUser = users.find((user)=>{
        return user.id === parseInt(req.params.id)
    })

    res.send(findUser)
})

app.listen(4000,()=>{
    console.log("Server running...")
})