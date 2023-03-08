//.........
//importing
//.........
const express = require('express')
const router = express.Router()
const {
 registerUser,
 loginUser,
 updateUser
} = require('../Controllers/authController.js')

//....
//app
//....

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/updateUser').patch(updateUser)

//.........
//exporting
//.........
module.exports = router;