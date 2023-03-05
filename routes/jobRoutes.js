import express from 'express'
const router = express.Router()
import {
 createJob,
 deleteJob,
 getAllJob,
 updateJob,
 showStatus
} from '../controller/jobController.js'

router.route('/').get(getAllJob).post(createJob);
router.route('/status').get(showStatus);
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router;