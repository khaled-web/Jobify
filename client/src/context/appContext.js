//.............
//importing
//.............

import React, {
 useState,
 useReducer,
 useContext,
 useEffect
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
 LOGOUT_USER,
 UPDATE_USER_BEGIN,
 UPDATE_USER_SUCCESS,
 UPDATE_USER_ERROR,
 HANDLE_CHANGE,
 CLEAR_VALUES,
 CREATE_JOB_BEGIN,
 CREATE_JOB_SUCCESS,
 CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
 GET_JOBS_SUCCESS
} from './action';
import reducer from './reducer'
import axios from 'axios'

//.............
//App.
//.............

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const userLocation = localStorage.getItem('location')

//initialState
const initialState = {
  //authIssues
 isLoading: false,
 showAlert: false,
 alertText: '',
 alertType: '',
 user:user ? JSON.parse(user) : null,
 token:token,
 userLocation:userLocation || '',
 jobLocation:userLocation || '',
 showSidebar:false,
 //addSingleJob
 isEditing:false,
 editJobId:'',
 position:'',
 company:'',
 jobTypeOptions:['full-time', 'part-time', 'remote', 'internship'],
 jobType:'full-time',
 statusOption:['interview', 'declined', 'pending'],
 status:'pending',
 //GetAllJobs
 jobs:[],
 totalJobs:0,
 numOfPages:1,
 page:1
}

//AppContext
const AppContext = React.createContext();

//AppProvider->>index.js
const AppProvider = ({children})=>{
 const [state, dispatch]=useReducer(reducer, initialState);
  //CustomInstance-axios
  const authFetch = axios.create({
    baseURL:'/api/v1',
  })
// response interceptor
authFetch.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${state.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// response interceptor
authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 401) {
      logoutUser()
    }
    return Promise.reject(error);
  }
);


 //displayAlert-Function
 const displayAlert = ()=>{
  dispatch({type:DISPLAY_ALERT})
  clearAlert()
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
  //  console.log(error.response.data.msg)
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
  //  console.log(error.response.data.msg)
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

  //update_user
  const updateUser = async(currentUser)=>{
    dispatch({type:UPDATE_USER_BEGIN})
    try {      
      const {data} = await authFetch.patch('/auth/updateUser', currentUser)
      // console.log(data)
      const {user, token, location}=data
      dispatch({
        type:UPDATE_USER_SUCCESS, 
        payload:{user, token, location}
      })
      addUserToLocalStorage({user, token, location})
      clearAlert()
    } catch (error) {
      if(error.response.status !==401){
        dispatch({
          type:UPDATE_USER_ERROR,
          payload:{
            msg:error.response.data.msg
          }
        })
      }
      clearAlert()
    }
  }
  //handleChange
  const handleChange = ({name, value})=>{
    dispatch({
      type:HANDLE_CHANGE,
      payload:{name, value}
    })
  }
  //clearValue
  const clearValue = ()=>{
    dispatch({
      type:CLEAR_VALUES
    })
  }
  //createJob
  const createJob = async()=>{
    dispatch({type:CREATE_JOB_BEGIN})
    try {
      const {position, company, jobLocation, jobType, status} = state
      await authFetch.post('/job', {
        position,
        company,
        jobLocation,
        jobType,
        status
      })
      dispatch({type:CREATE_JOB_SUCCESS})
      dispatch({type:CLEAR_VALUES})
      clearAlert()
    } catch (error) {
      if(error.response.status === 401) return
      dispatch({
        type:CREATE_JOB_ERROR, 
        payload:{
          msg:error.response.data.msg
        }})
      clearAlert()
    }
  }
  //getJob
  const getJobs = async () => {
  let url = `/job`

  dispatch({ type: GET_JOBS_BEGIN })
  try {
    const { data } = await authFetch(url)
    console.log(data)
    const { jobs, totalJobs, numOfPages } = data
    dispatch({
      type: GET_JOBS_SUCCESS,
      payload: {
        jobs,
        totalJobs,
        numOfPages,
      },
    })
  } catch (error) {
    console.log(error.response)
    logoutUser()
  }
  clearAlert()
}

useEffect(() => {
  getJobs()
}, [])

 return <AppContext.Provider value={{...state, displayAlert, registerUser,loginUser,setupUser, toggleSidebar, logoutUser,updateUser,handleChange,clearValue, createJob,getJobs}}>
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