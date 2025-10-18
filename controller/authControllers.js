import {compare, hash} from "../utils/hashUtil.js";
import { jwtSignUtil } from "../utils/jwtSignUtil.js";
import UserModel from "../models/userModel.js"

export const register = async (req, res) => {
    try {
        // Untuk mengambil body atau data dari request
        const registerData = req.body

        console.log(registerData);

        const hashPassword = hash(registerData.password)

        await UserModel.create({
            username : registerData.username,
            email : registerData.email,
            password : hashPassword
        })

        res.status(201).json({
            message : "Register Berhasil, silahkan login",
            data : null
        })
    } catch(e) {
        res.status(500).json({
            message : e.message,
            data : null
        })
    }
}

export const login = async (req, res) => {
    const requestLogin = req.body
        const user = UserModel.findOne({
            email : requestLogin.email
        })

        res.status(200).json({
            message : "Login skses",
            data : {
                user : user,
                token : jwtSignUtil(user)
            }
        })
}