const {Router} = require('express')
const seedsSchema = require('../Model/Seeds')
const router = Router()
const {Protect} = require("../Middleware/auth")

const {addSeeds,showSeeds, oneSeed} = require("../Controller/seedsController")

router.post("/addSeeds", Protect ,addSeeds);

router.get("/showSeeds", Protect ,showSeeds)

router.get("/showSeed/:id", Protect ,oneSeed)

module.exports = router;