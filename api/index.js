import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"

const app = express()

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/hotels", hotelRoute)
app.use("/api/rooms", roomRoute)

app.use((err, req, res, next) => {
    return res.status(err.status).json({ status: err.status, message: err.message, stack: err.stack, success: false })
})

mongoose.connect(process.env.MONGODB_URI).then(() => { console.log("DB Connected") }).catch((error) => { throw error })


app.listen(8080, () => {
    console.log("Server is up and running on http://localhost:8080");
})