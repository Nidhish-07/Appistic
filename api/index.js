import express from "express"
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"

const app = express()

mongoose.connect(process.env.MONGODB_URI).then(() => { console.log("DB Connected") }).catch((error) => { throw error })


app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/hotels", hotelRoute)
app.use("/api/rooms", roomRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({ status: errorStatus, message: errorMessage, stack: err.stack, success: false })
})



app.listen(8080, () => {
    console.log("Server is up and running on http://localhost:8080");
})