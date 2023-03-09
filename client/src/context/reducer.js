import {
 CLEAR_ALERT,
 DISPLAY_ALERT,
 REGISTER_USER_BEGIN,
 REGISTER_USER_SUCCESS,
 REGISTER_USER_ERROR,
 LOGIN_USER_BEGIN,
 LOGIN_USER_SUCCESS,
 LOGIN_USER_ERROR,
 SETUP_USER_BEGIN,
 SETUP_USER_SUCCESS,
 SETUP_USER_ERROR
} from './action'

const reducer = (state, action) => {
 //display_alert
 if (action.type === DISPLAY_ALERT) {
  return {
   ...state,
   showAlert: true,
   alertType: 'danger',
   alertText: 'Please provide all values'
  }
 }
 //clear_alert
 if (action.type === CLEAR_ALERT) {
  return {
   ...state,
   showAlert: false,
   alertType: '',
   alertText: ''
  }
 }
 //register-began
 if (action.type === REGISTER_USER_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //register-success
 if (action.type === REGISTER_USER_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'success',
   alertText: 'User Created! Redirecting...',
   user: action.payload.user,
   token: action.payload.token,
   userLocation: action.payload.location,
   jobLocation: action.payload.location
  }
 }
 //register-error
 if (action.type === REGISTER_USER_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'danger',
   alertText: action.payload.msg
  }
 }
 //login-began
 if (action.type === LOGIN_USER_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //login-success
 if (action.type === LOGIN_USER_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'success',
   alertText: 'Login Successful! Redirecting...',
   user: action.payload.user,
   token: action.payload.token,
   userLocation: action.payload.location,
   jobLocation: action.payload.location
  }
 }
 //login-error
 if (action.type === LOGIN_USER_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'danger',
   alertText: action.payload.msg
  }
 }
 //setup-began
 if (action.type === SETUP_USER_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //setup-success
 if (action.type === SETUP_USER_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'success',
   alertText: action.payload.alertText,
   user: action.payload.user,
   token: action.payload.token,
   userLocation: action.payload.location,
   jobLocation: action.payload.location
  }
 }
 //setup-error
 if (action.type === SETUP_USER_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'danger',
   alertText: action.payload.msg
  }
 }

 throw new Error(`no such action : ${action.type}`)
}

export default reducer;