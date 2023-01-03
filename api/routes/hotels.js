import express from "express"
import Hotel from "../models/Hotel.js"
import { errorHandler } from "../utils/error.js"

const router = express.Router()


router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)

    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id", async (req, res) => {

    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
})
router.delete("/:id", async (req, res) => {

    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
})
router.get("/:id", async (req, res, next) => {

    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(error)
        console.log(error);
    }
})
router.get("/", async (req, res, next) => {
// return  next(errorHandler(401,'asdasd'))
    try {
        const hotel = await Hotel.find()
        res.status(200).json(hotel)
    } catch (error) {
        console.log(error);
        next(error)
    }
})

export default router