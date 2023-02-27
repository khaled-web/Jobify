import React from 'react'
import {Logo, FormRow, Alert} from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

//initial State
const initialState = {
  name:'',
  email:'',
  password:'',
  isMember:true,
  showAlert:false
}

const Register = () => {
  //useState
  const [values, setValues]=React.useState(initialState)
  //global state and useNavigate



  const toggleMember = ()=>{
    setValues({...values, isMember:!values.isMember})
  }
  
  const handleChange = (e)=>{
    console.log(e.target)
  }

  const onSubmit = (e)=>{
    e.preventDefault();
    console.log(e.target);
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo/>
        <h3>{values.isMember?"login":"register"}</h3>
        {values.showAlert && <Alert/>}
        {/* name input */}
        {!values.isMember&&        
        <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/> 
        }

        {/* email input */}
        <FormRow type="email" name="email" value={values.name} handleChange={handleChange}/>
        {/* password input */}
        <FormRow type="password" name="password" value={values.name} handleChange={handleChange}/>
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {values.isMember?"Not a member yet,":"Already a member?"}
          <button type='button' onClick={toggleMember} className="member-btn">
            {!values.isMember?"login":"register"}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
