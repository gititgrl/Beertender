// dependencies
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const passport = require('passport')
require ('./config/passport')
require('./models')
require('dotenv').config()

const PORT = 4000

//access controllers
const userCtrl = require('./controllers/users')
const favCtrl = require('./controllers/favorites')

//middleware
// use the React build folder for static files
app.use(express.static(path.join(path.dirname(__dirname), "Beertender", "build")))
// cross origin allowance
app.use(cors())
// parse the body data
app.use(passport.initialize())
app.use(express.urlencoded({extended: true }))
app.use(express.json())

//routes
app.use('/users', userCtrl)
app.use('/favorites', favCtrl)
// any other route not matching the routes above gets routed by React
app.get("*", (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), "Beertender", "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`server listening on port 4000`)
})

app.get('/', cors(), async (req,res) => {
    res.send("THIS IS WORKING")
})
