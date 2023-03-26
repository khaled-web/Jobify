//.............
//importing
//.............
import React,{useEffect} from 'react'
import Loading from './Loading.js'
import Job from './Job.js'
import Wrapper from '../assets/wrappers/JobsContainer'
import {UseAppContext} from '../context/appContext.js'
//.............
//APP
//.............
const JobContainer = () => {
  const {getJobs, jobs, isLoading, page, totalJobs}=UseAppContext()
  
  useEffect(()=>{
    getJobs()
  },[])

  if(isLoading){
    <Loading center/>
  }

  if(jobs.length === 0){
    return(
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <h5>{totalJobs} job{jobs.length>1 && 's'} found</h5>
      <div className="jobs">
        {jobs.map((job)=>{
          return <Job key={job._id} {...job}/>
        })}
      </div>
      {/* pagination buttons */}
    </Wrapper>
  )
}
//.............
//exporting
//.............
export default JobContainer
