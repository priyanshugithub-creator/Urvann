const {Router} = require('express')
const userSchema = require('../Model/userSchema')
const router = Router()

const {addUser,userLogin} = require('../Controller/userController')

router.post('/addUser',addUser)
router.post('/userLogin',userLogin)

module.exports = router;