import express from "express"
import { createHotel, deleteHotel, getAllHotels, getHotel, updateHotel } from "../controllers/hotel.js"
import Hotel from "../models/Hotel.js"
import { errorHandler } from "../utils/error.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()


router.post("/", verifyAdmin, createHotel)
router.put("/:id", verifyAdmin, updateHotel)
router.delete("/:id", verifyAdmin, deleteHotel)
router.get("/:id", getHotel)
router.get("/", getAllHotels)

export default router