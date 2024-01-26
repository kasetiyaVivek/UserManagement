const httpStatus = require('http-status')
const catchAsync = require('../utils/catchAsync')
const { authService } = require('../service')
const ApiSuccessResponse = require('./../utils/apiResponse')

const register = catchAsync(async (req, res) => {
    const data = await authService.registerUser(req.body)
    res.status(httpStatus.CREATED).send(new ApiSuccessResponse(data, httpStatus.CREATED, 'User registered successfully'))
})

const login = catchAsync(async (req, res) => {
    const user = await authService.loginUserWithEmailAndPassword(req)
    res.send(user)
})

module.exports = {
    register, login
}
