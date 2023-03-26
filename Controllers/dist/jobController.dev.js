"use strict";

//.............
//importing
//.............
var Job = require('../models/job.js');

var StatusCodes = require('http-status-codes');

var CustomError = require('../errors');

var checkPermissions = require('../utils/checkPermission.js'); //.............
//App.
//.............
//createJob


var createJob = function createJob(req, res) {
  var _req$body, position, company, job;

  return regeneratorRuntime.async(function createJob$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, position = _req$body.position, company = _req$body.company;

          if (!(!position || !company)) {
            _context.next = 3;
            break;
          }

          throw new CustomError.BadRequestError("Please provide all values");

        case 3:
          //middleware-auth
          req.body.createdBy = req.user.userId;
          _context.next = 6;
          return regeneratorRuntime.awrap(Job.create(req.body));

        case 6:
          job = _context.sent;
          res.status(StatusCodes.CREATED).json({
            job: job
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}; //GetAllJobs


var getAllJobs = function getAllJobs(req, res) {
  var jobs;
  return regeneratorRuntime.async(function getAllJobs$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(Job.find({
            createdBy: req.user.userId
          }));

        case 2:
          jobs = _context2.sent;
          res.status(StatusCodes.OK).json({
            jobs: jobs,
            totalJobs: jobs.length,
            numOfPages: 1
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}; //updateJob


var updateJob = function updateJob(req, res) {
  var jobId, _req$body2, company, position, job, updateJob;

  return regeneratorRuntime.async(function updateJob$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          jobId = req.params.id;
          _req$body2 = req.body, company = _req$body2.company, position = _req$body2.position;

          if (!(!company || !position)) {
            _context3.next = 4;
            break;
          }

          throw new CustomError.BadRequestError('Please provide all values');

        case 4:
          _context3.next = 6;
          return regeneratorRuntime.awrap(Job.findOne({
            _id: jobId
          }));

        case 6:
          job = _context3.sent;

          if (job) {
            _context3.next = 9;
            break;
          }

          throw new CustomError.NotFoundError("No job with id:".concat(jobId));

        case 9:
          //check permission
          // console.log(typeof req.user.userId)
          // console.log(typeof job.createdBy)
          checkPermissions(req.user, job.createdBy);
          _context3.next = 12;
          return regeneratorRuntime.awrap(Job.findByIdAndUpdate({
            _id: jobId
          }, req.body, {
            "new": true,
            runValidators: true
          }));

        case 12:
          updateJob = _context3.sent;
          res.status(StatusCodes.OK).json({
            updateJob: updateJob
          });

        case 14:
        case "end":
          return _context3.stop();
      }
    }
  });
}; //DeleteJob


var deleteJob = function deleteJob(req, res) {
  var jobId, job;
  return regeneratorRuntime.async(function deleteJob$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          jobId = req.params.id;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Job.findByIdAndRemove({
            _id: jobId
          }));

        case 3:
          job = _context4.sent;

          if (job) {
            _context4.next = 6;
            break;
          }

          throw new CustomError.NotFoundError("No job with id: ".concat(jobId));

        case 6:
          checkPermissions(req.user, job.createdBy);
          res.status(StatusCodes.OK).json({
            msg: 'Success, Job removed'
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}; //showStats


var showStats = function showStats(req, res) {
  return regeneratorRuntime.async(function showStats$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          res.send("Show stats");

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
}; //.............
//exporting
//.............


module.exports = {
  createJob: createJob,
  deleteJob: deleteJob,
  getAllJobs: getAllJobs,
  updateJob: updateJob,
  showStats: showStats
};