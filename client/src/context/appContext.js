//.............
//importing
//.............

import React, {
 useState,
 useReducer,
 useContext
} from 'react';
import {
 DISPLAY_ALERT,
 CLEAR_ALERT,
 REGISTER_USER_BEGIN,
 REGISTER_USER_SUCCESS,
 REGISTER_USER_ERROR,
 LOGIN_USER_BEGIN,
 LOGIN_USER_SUCCESS,
 LOGIN_USER_ERROR,
 SETUP_USER_BEGIN,
 SETUP_USER_SUCCESS,
 SETUP_USER_ERROR,
 TOGGLE_SIDEBAR,
 LOGOUT_USER
} from './action';
import reducer from './reducer'
import axios from 'axios'

//.............
//App.
//.............

//initialState
const initialState = {
 isLoading: false,
 showAlert: false,
 alertText: '',
 alertType: '',
 user:null,
 token:null,
 userLocation:'',
 jobLocation:'',
 showSidebar:false
}

//AppContext
const AppContext = React.createContext();

//AppProvider->>index.js
const AppProvider = ({children})=>{
 const [state, dispatch]=useReducer(reducer, initialState);
 //displayAlert-Function
 const displayAlert = ()=>{
  dispatch({type:DISPLAY_ALERT})
  clearAlert( )
 }

 //clearAlert
 const clearAlert = ()=>{
  setTimeout(()=>{
   dispatch({type:CLEAR_ALERT})
  },3000)
 }

 //localStorage
 const addUserToLocalStorage =({user, token, location})=>{
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
  localStorage.setItem('location', location)
 }

 const removeUserFromLocalStorage = ()=>{
  localStorage.removeItem('user')
  localStorage.removeItem('token')
  localStorage.removeItem('location')
 }

 //registerUser
 const registerUser = async (currentUser)=>{
  dispatch({type:REGISTER_USER_BEGIN})
  try {
   const response = await axios.post('/api/v1/auth/register', currentUser)
   // console.log(response)
   const {user, token, location}= response.data
   dispatch({type:REGISTER_USER_SUCCESS, payload:{user,token,location}})
   //localStorageLater
   addUserToLocalStorage({user,token,location})
  } catch (error) {
   // console.log(error.response)
   dispatch({type:REGISTER_USER_ERROR,payload:{msg:error.response.data.msg}})
  }
  clearAlert()
 }

 //loginUser
 const loginUser = async(currentUser)=>{
   dispatch({type:LOGIN_USER_BEGIN})
  try {
   const response = await axios.post('/api/v1/auth/login', currentUser)
   // console.log(response)
   const {location, token , user}=response.data
   // console.log(location,token,user)
   dispatch({
    type:LOGIN_USER_SUCCESS,
    payload:{user, token, location}
   })
   //localStorage   
   addUserToLocalStorage({location,token,user})
  } catch (error) {
   console.log(error.response.data.msg)
   dispatch({
    type:LOGIN_USER_ERROR,
    payload:{msg:error.response.data.msg}
   })
  }
  clearAlert()
 }

  //setupUser
 const setupUser = async({currentUser, endPoint, alertText})=>{
   dispatch({type:SETUP_USER_BEGIN})
  try {
   const response = await axios.post(`/api/v1/auth/${endPoint}`, currentUser)
   // console.log(response)
   const {location, token , user}=response.data
   // console.log(location,token,user)
   dispatch({
    type:SETUP_USER_SUCCESS,
    payload:{user, token, location, alertText}
   })
   //localStorage   
   addUserToLocalStorage({location,token,user})
  } catch (error) {
   console.log(error.response.data.msg)
   dispatch({
    type:SETUP_USER_ERROR,
    payload:{msg:error.response.data.msg}
   })
  }
  clearAlert()
 }

  //Toggle-sidebar
  const toggleSidebar = ()=>{
    dispatch({type:TOGGLE_SIDEBAR})
  }

  //logout_user
  const logoutUser = ()=>{
    dispatch({type:LOGOUT_USER})
    //localStorageLater
   removeUserFromLocalStorage()
  }


 return <AppContext.Provider value={{...state, displayAlert, registerUser,loginUser,setupUser, toggleSidebar, logoutUser}}>
  {children}
 </AppContext.Provider>
}

//useAppContext
const UseAppContext = ()=>{
 return useContext(AppContext)
}

//.............
//exporting.
//.............
//export AppProvider, initialState
export {AppProvider, initialState, UseAppContext}