// dependencies
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
require('./models')
require('dotenv').config()

const PORT = 4000

//access controllers
const userCtrl = require('./controllers/users')
const favCtrl = require('./controllers/favorites')

//middleware
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), "frontend", "build")))
// cross origin allowance
app.use(cors())
// parse the body data
app.use(express.urlencoded({extended: true }))
app.use(express.json())
//routes
app.use('/user', userCtrl)
app.use('/favorite', favCtrl)
// any other route not matching the routes above gets routed by React
// app.get("*", (req, res) => {
//     res.sendFile(path.join(path.dirname(__dirname), "public", "index.html"));
// });

app.listen(PORT, () => {
    console.log(`server listening on port 4000`)
})

app.get('/', cors(), async (req,res) => {
    res.send("THIS IS WORKING")
})
app.post("/post_name", async (req, res) => {
    let {name} = req.body
    console.log(name)
})