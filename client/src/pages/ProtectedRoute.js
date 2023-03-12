//..........
//importing
//..........
import React from 'react'
import {Navigate} from 'react-router-dom'
import {UseAppContext} from '../context/appContext.js'

//..........
//App
//..........
const ProtectedRoute = ({children}) => {
  const {user}=UseAppContext()
  if(!user){
    return <Navigate to='/landing'/>
  }
  return children
}


//..........
//exporting
//..........
export default ProtectedRoute
