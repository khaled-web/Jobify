const createJob = async (req, res) => {
 res.send("Create Job")
}

const deleteJob = async (req, res) => {
 res.send("Delete Job")
}

const getAllJobs = async (req, res) => {
 res.send("Get All Jobs")
}

const updateJob = async (req, res) => {
 res.send("update Job")
}

const showStats = async (req, res) => {
 res.send("Show stats")
}

module.exports = {
 createJob,
 deleteJob,
 getAllJobs,
 updateJob,
 showStats
}