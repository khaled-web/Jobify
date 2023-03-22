//.............
//importing
//.............
import React from 'react'
import {FormRow, Alert, FormRowSelect} from '../../components'
import { UseAppContext } from '../../context/appContext.js'
import Wrapper from '../../assets/wrappers/DashboardFormPage'


//.............
//App.
//.............
const AddJob = () => {
  const {
    isLoading,
    showAlert,
    displayAlert,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOption,
    isEditing,
    handleChange,
    clearValue,
    createJob
  } = UseAppContext()
  //handleJobInput
  const handleJobInput = (e)=>{
    const name = e.target.name
    const value = e.target.value
    handleChange({name, value})
  }
  //handleSubmit
  const handleSubmit = (e)=>{
    e.preventDefault()

    // if(!position || !company || !jobLocation){
    //   displayAlert()
    //   return
    // }
    if(isEditing){
      //eventually editJob()
      return
    }
    createJob()
  }
  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing?"Editing Job":"Add Job"}</h3>
        {showAlert && <Alert/>}
        <div className="form-center">
          {/* position */}
          <FormRow type='text' name='position' value={position} handleChange={handleJobInput}/>
          {/* position */}
          <FormRow type='text' name='company' value={company} handleChange={handleJobInput}/>
          {/* location */}
          <FormRow type='text' labelText='job location' name='jobLocation' value={jobLocation} handleChange={handleJobInput}/>
          {/* jobStatus */}
          <FormRowSelect name='status' value ={status} handleChange ={handleJobInput} list={statusOption}/>
          {/* jobType */}
          <FormRowSelect labelText='job Type' name='job Type' value ={jobType} handleChange ={handleJobInput} list={jobTypeOptions}/>
          {/* btn-container */}
          <div className="btn-container">
            <button type='submit' className='btn btn-block submit-btn' onClick={handleSubmit} disabled={isLoading}>
              submit
            </button>            
            <button type='submit' className='btn btn-block clear-btn' onClick={(e)=>{
              e.preventDefault()
              clearValue()
            }}>
              Clear
            </button>
          </div>
        </div>
        
      </form>
    </Wrapper>
  )
}


//.............
//exporting
//.............
export default AddJob
