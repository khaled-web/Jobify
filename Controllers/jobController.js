//.............
//importing
//.............
const Job = require('../models/job.js')
const StatusCodes = require('http-status-codes')
const CustomError = require('../errors')
const checkPermissions = require('../utils/checkPermission.js')
const mongoose = require('mongoose')
const moment = require('moment')
//.............
//App.
//.............

//createJob
const createJob = async (req, res) => {
  const {
    position,
    company
  } = req.body
  if (!position || !company) {
    throw new CustomError.BadRequestError("Please provide all values")
  }
  //middleware-auth
  req.body.createdBy = req.user.userId

  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({
    job
  })
}

//GetAllJobs
const getAllJobs = async (req, res) => {
  // const jobs = await Job.find({
  //   createdBy: req.user.userId
  // })
  // res.status(StatusCodes.OK).json({
  //   jobs,
  //   totalJobs: jobs.length,
  //   numOfPages: 1
  // })
  const {
    search,
    status,
    jobType,
    sort
  } = req.query

  const queryObject = {
    createdBy: req.user.userId
  }
  if (status !== 'all') {
    queryObject.status = status
  }
  if (jobType !== 'all') {
    queryObject.jobType = jobType
  }
  if (search) {
    queryObject.position = {
      $regex: search,
      $options: 'i'
    }
  }
  let result = Job.find(queryObject)
  //chain sort conditions
  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }
  if (sort === 'a-z') {
    result = result.sort('position')
  }
  if (sort === 'z-a') {
    result = result.sort('-position')
  }
  const jobs = await result
  res.status(StatusCodes.OK).json({
    jobs,
    totalJobs: jobs.length,
    numOfPages: 1
  })
}

//updateJob
const updateJob = async (req, res) => {
  const {
    id: jobId
  } = req.params

  const {
    company,
    position
  } = req.body

  if (!company || !position) {
    throw new CustomError.BadRequestError('Please provide all values')
  }

  const job = await Job.findOne({
    _id: jobId
  })

  if (!job) {
    throw new CustomError.NotFoundError(`No job with id:${jobId}`)
  }
  //check permission
  // console.log(typeof req.user.userId)
  // console.log(typeof job.createdBy)

  checkPermissions(req.user, job.createdBy)

  const updateJob = await Job.findByIdAndUpdate({
    _id: jobId
  }, req.body, {
    new: true,
    runValidators: true
  })


  res.status(StatusCodes.OK).json({
    updateJob
  })
}

//DeleteJob
const deleteJob = async (req, res) => {
  const {
    id: jobId
  } = req.params

  const job = await Job.findByIdAndRemove({
    _id: jobId
  })

  if (!job) {
    throw new CustomError.NotFoundError(`No job with id: ${jobId}`)
  }

  checkPermissions(req.user, job.createdBy)

  res.status(StatusCodes.OK).json({
    msg: 'Success, Job removed'
  })
}

//showStats
const showStats = async (req, res) => {
  let stats = await Job.aggregate([{
      $match: {
        createdBy: mongoose.Types.ObjectId(req.user.userId)
      }
    },
    // {
    //   $group: {
    //     _id: '$status',
    //     count: {
    //       $sum: 1
    //     }
    //   }
    // }
  ])
  console.log(stats)
  res.status(StatusCodes.OK).json({
    stats
  })

}


//.............
//exporting
//.............
module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  showStats
}