import express from "express"
import * as profileController from "../controller/profileController.js"
import * as profileNelson from "../controller/profileNelson.js"

const web = express.Router()

web.get('/', (req, res) =>{
    res.render('index')
})
web.get('/:username', profileController.publicProfile)

web.get('/profile/:username', profileNelson.publicProfileson)

export default web