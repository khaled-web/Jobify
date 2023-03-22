//..............
//importingData
//..............
import React, {useState} from 'react'
import { UseAppContext } from '../../context/appContext'
import{FormRow, Alert} from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'

//..............
//App
//..............
const Profile = () => {
  const {user, showAlert, displayAlert, updateUser, isLoading} = UseAppContext()
  //useState
  const [name, setName]=useState(user?.name)
  const [email, setEmail]=useState(user?.email)
  const [lastName, setLastName]=useState(user?.lastName)
  const [location, setLocation]=useState(user?.location)
  //handleSubmit-function
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!name || !email || !lastName || !location){
      displayAlert()
      return;
    }
    updateUser({name, email, lastName, location})
  }


  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>profile</h3>
        {showAlert && <Alert/>}

        <div className="form-center">
        {/* name */}
        <FormRow type='text' name='name' value={name} handleChange={(e)=>setName(e.target.value)}/>
        {/* lastName */}
        <FormRow labelText='lastName' type='text' name='lastName' value={lastName} handleChange={(e)=>setLastName(e.target.value)}/>
        {/* email */}
        <FormRow type='email' name='email' value ={email} handleChange={(e)=>setEmail(e.target.value)}/>
        {/* location */}
        <FormRow type='location' name='location' value={location} handleChange={(e)=>setLocation(e.target.value)}/>

        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading?'Please Wait...':'save Changes'}
        </button>
        </div>
      </form>
    </Wrapper>
  )
}
//..............
//exportingData
//..............
export default Profile
