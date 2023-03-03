import React, {
 useState,
 useReducer,
 useContext
} from 'react';
import { DISPLAY_ALERT, CLEAR_ALERT } from './action';
import reducer from './reducer'

//initialState
const initialState = {
 isLoading: false,
 showAlert: false,
 alertText: '',
 alertType: ''
}

//AppContext
const AppContext = React.createContext();

//AppProvider->>index.js
const AppProvider = ({children})=>{
 const [state, dispatch]=useReducer(reducer, initialState);
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

 return <AppContext.Provider value={{...state, displayAlert}}>
  {children}
 </AppContext.Provider>
}

//useAppContext
const UseAppContext = ()=>{
 return useContext(AppContext)
}
//export AppProvider, initialState
export {AppProvider, initialState, UseAppContext}