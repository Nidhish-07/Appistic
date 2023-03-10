import express from "express"
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

router.get("/authenticated", verifyToken, (req, res, next) => {
    res.send("YOu are authenticated")
})

router.get("/checkUser/:id", verifyUser, (req, res, next) => {
    res.send("YOu are authenticated and can delete your account")
})

router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
    res.send("You are admin and can delete all accounts")
})

router.put("/:id", verifyUser,updateUser)
router.delete("/:id", verifyUser,deleteUser)
router.get("/:id", verifyUser,getUser)
router.get("/", verifyAdmin,getAllUsers)

export default router