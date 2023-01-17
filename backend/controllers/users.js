const express = require('express')
const router = express.Router()
const db = require('../models')
const jwt = require('jwt-simple')
const config = require('../config/config')
const User = db.User

function isAuthenticated(req, res, next){
    if(req.headers.authorization){
        next()
    } else {
        res.sendStatus(401)
    }

}
//signup create route
router.post('/signup', async (req, res) => {
    console.log(req.body)
    const foundUser = await db.User.findOne({ username: req.body.username})
    if(!foundUser){
        const createdUser = await db.User.create(req.body)
        const payload = {id: createdUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            user: createdUser,
            token: token
        })
    } else {
        res.sendStatus(401)
    }
})

//login route
router.post('/login', async (req, res) => {
    const foundUser = await db.User.findOne({ username: req.body.username})
    if(req.body.password === foundUser.password){
        const payload = {id: foundUser._id}
        const token = jwt.encode(payload, config.jwtSecret)
        const userFavorite = await db.Favorite.find({ user: foundUser._id })
        res.json({
            user: foundUser,
            token: token,
            favorite: userFavorite
                    })
    } else {
        res.sendStatus(401)
    }
})

// token show
router.get('/token', isAuthenticated, async (req, res) => {
    const token = req.headers.authorization
    const decoded = jwt.decode(token, config.jwtSecret)
    const foundUser = await db.User.findById(decoded.id)
    const userComment = await db.Comment.find({ user: foundUser._id })
    res.json({
        user: foundUser,
        comment: userComment
    })
})

// index 
router.get('/', async (req, res) => {
    const allUsers = await db.User.find({})
    res.json(allUsers)
})

// show
router.get('/:id', async (req, res)=> {
    const foundUser = await db.User.findById(req.params.id)
    const userComment = await db.Comment.find({ user: foundUser._id })
    res.json({
        user: foundUser,
        comment: userComment
    })
})


//update
router.put('/:id', isAuthenticated, async (req, res) => {
    const updatedUser = await db.User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )

    res.json(updatedUser)
})

//delete
router.delete('/:id', isAuthenticated, async (req, res)=> {
    await db.Comment.deleteMany({ user: req.params.id})
    await db.User.findByIdAndDelete(req.params.id)
    res.sendStatus(200)
})

module.exports = router