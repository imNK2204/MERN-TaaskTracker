const express = require('express')
const Router = express.Router()
const taskModel = require("../modal/taskMdel")
Router.use(express.json())

Router.get("/",(req,res) => {

    res.json({data:"You are on login page"})
})

Router.post('/addtask',(req,res) => {

      const mytask = req.body

      const addtask =taskModel.create(mytask)

      return res.json({data:addtask})
})

Router.post('/gettask', async(req,res) => {

    const taskuser = req.body
    console.log("username",taskuser)
    const getdata = await taskModel.find(taskuser)

    return res.json({data:getdata})


})

module.exports = Router;
