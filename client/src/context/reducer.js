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
 //toggle-sidebar
 if (action.type === TOGGLE_SIDEBAR) {
  return {
   ...state,
   showSidebar: !state.showSidebar
  }
 }
 //logoutUser
 if (action.type === LOGOUT_USER) {
  return {
   ...state,
   user: null,
   token: null,
   userLocation: '',
   jobLocation: ''
  }
 }
 //update-began
 if (action.type === UPDATE_USER_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //update-success
 if (action.type === UPDATE_USER_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'success',
   alertText: 'User Profile Updated',
   user: action.payload.user,
   token: action.payload.token,
   userLocation: action.payload.location,
   jobLocation: action.payload.location
  }
 }
 //update-error
 if (action.type === UPDATE_USER_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'danger',
   alertText: action.payload.msg
  }
 }
 //HANDLE_CHANGE
 if (action.type === HANDLE_CHANGE) {
  return {
   ...state,
   [action.payload.name]: action.payload.value
  }
 }
 //ClearValue
 if (action.type === CLEAR_VALUES) {
  return {
   ...state,
   isEditing: false,
   editJobId: '',
   position: '',
   company: '',
   jobType: 'full-time',
   status: 'pending',
   jobLocation: state.userLocation,
  }
 }
 //createJob-Began
 if (action.type === CREATE_JOB_BEGIN) {
  return {
   ...state,
   isLoading: true
  }
 }
 //createJob-success
 if (action.type === CREATE_JOB_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'success',
   alertText: 'New Job Created...'
  }
 }
 //createJob-error
 if (action.type === CREATE_JOB_ERROR) {
  return {
   ...state,
   isLoading: false,
   showAlert: true,
   alertType: 'danger',
   alertText: action.payload.msg
  }
 }
 //getJobs-Begin
 if (action.type === GET_JOBS_BEGIN) {
  return {
   ...state,
   isLoading: true,
   showAlert: false
  };
 }
 //getJobs-success
 if (action.type === GET_JOBS_SUCCESS) {
  return {
   ...state,
   isLoading: false,
   jobs: action.payload.jobs,
   totalJobs: action.payload.totalJobs,
   numOfPages: action.payload.numOfPages,
  };
 }


 throw new Error(`no such action : ${action.type}`)
}

export default reducer;