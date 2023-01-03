import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'


export const loginUser = async (req, res, next) => {

    try {
        const user = await User.findOne({ username: req.body.username })

        if (!user) {

            res.status(404).json("User not found")
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {

            res.status(401).json("Wrong username or password")
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.SECRET)

        const { password, isAdmin, ...otherDetails } = user._doc

        res.cookie("access_token", token, { httpOnly: true }).status(200).json(otherDetails)
    } catch (error) {
        next(error)
        // res.status(500).json(error)
        // console.log(error)
    }
}
export const registerUser = async (req, res, next) => {


const salt=bcrypt.genSaltSync(8)
const hashPassword=bcrypt.hashSync(req.body.password,salt)

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
    })

    try {
        const savedUser = await newUser.save()
        res.status(200).json("User has been created")
    } catch (error) {
        next(error)
        // res.status(500).json(error)
        // console.log(error)
    }
}