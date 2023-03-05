const createJob = async (req, res) => {
 res.send('create job')
}

const deleteJob = async (req, res) => {
 res.send('delete Job')
}

const getAllJob = async (req, res) => {
 res.send('get all Job')
}

const updateJob = async (req, res) => {
 res.send('update Job')
}

const showStatus = async (req, res) => {
 res.send('status Job')
}

export {
 createJob,
 deleteJob,
 getAllJob,
 updateJob,
 showStatus
}