//.........
//importing
//.........
const User = require('../models/user.js')
const StatusCodes = require('http-status-codes')
const CustomError = require('../errors')
//....
//app
//....

//register
const registerUser = async (req, res) => {
 const {
  name,
  email,
  password
 } = req.body
 if (!name || !email || !password) {
  throw new CustomError.BadRequestError('Please provide all values')
 }
 //schema
 const user = await User.create({
  name,
  email,
  password
 })
 //jwt
 const token = user.createJWT()
 //response
 res.status(StatusCodes.CREATED).json({
  user: {
   name: user.name,
   email: user.email,
   lastName: user.lastName,
   location: user.location
  },
  token
 })

}
//login
const loginUser = async (req, res) => {
 res.send("login User")
}
//updateUser
const updateUser = async (req, res) => {
 res.send("update User");
}

//.........
//exporting
//.........
module.exports = {
 registerUser,
 loginUser,
 updateUser
}