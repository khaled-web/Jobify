"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _action = require("./action");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducer = function reducer(state, action) {
  //display_alert
  if (action.type === _action.DISPLAY_ALERT) {
    return _objectSpread({}, state, {
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values'
    });
  } //clear_alert


  if (action.type === _action.CLEAR_ALERT) {
    return _objectSpread({}, state, {
      showAlert: false,
      alertType: '',
      alertText: ''
    });
  } //register-began


  if (action.type === _action.REGISTER_USER_BEGIN) {
    return _objectSpread({}, state, {
      isLoading: true
    });
  } //register-success


  if (action.type === _action.REGISTER_USER_SUCCESS) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Created! Redirecting...',
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location
    });
  } //register-error


  if (action.type === _action.REGISTER_USER_ERROR) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg
    });
  } //login-began


  if (action.type === _action.LOGIN_USER_BEGIN) {
    return _objectSpread({}, state, {
      isLoading: true
    });
  } //login-success


  if (action.type === _action.LOGIN_USER_SUCCESS) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successful! Redirecting...',
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location
    });
  } //login-error


  if (action.type === _action.LOGIN_USER_ERROR) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg
    });
  } //setup-began


  if (action.type === _action.SETUP_USER_BEGIN) {
    return _objectSpread({}, state, {
      isLoading: true
    });
  } //setup-success


  if (action.type === _action.SETUP_USER_SUCCESS) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: action.payload.alertText,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location
    });
  } //setup-error


  if (action.type === _action.SETUP_USER_ERROR) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg
    });
  } //toggle-sidebar


  if (action.type === _action.TOGGLE_SIDEBAR) {
    return _objectSpread({}, state, {
      showSidebar: !state.showSidebar
    });
  } //logoutUser


  if (action.type === _action.LOGOUT_USER) {
    return _objectSpread({}, state, {
      user: null,
      token: null,
      userLocation: '',
      jobLocation: ''
    });
  } //update-began


  if (action.type === _action.UPDATE_USER_BEGIN) {
    return _objectSpread({}, state, {
      isLoading: true
    });
  } //update-success


  if (action.type === _action.UPDATE_USER_SUCCESS) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated',
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location
    });
  } //update-error


  if (action.type === _action.UPDATE_USER_ERROR) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg
    });
  } //HANDLE_CHANGE


  if (action.type === _action.HANDLE_CHANGE) {
    return _objectSpread({}, state, _defineProperty({}, action.payload.name, action.payload.value));
  } //ClearValue


  if (action.type === _action.CLEAR_VALUES) {
    return _objectSpread({}, state, {
      isEditing: false,
      editJobId: '',
      position: '',
      company: '',
      jobType: 'full-time',
      status: 'pending',
      jobLocation: state.userLocation
    });
  } //createJob-Began


  if (action.type === _action.CREATE_JOB_BEGIN) {
    return _objectSpread({}, state, {
      isLoading: true
    });
  } //createJob-success


  if (action.type === _action.CREATE_JOB_SUCCESS) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Job Created...'
    });
  } //createJob-error


  if (action.type === _action.CREATE_JOB_ERROR) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg
    });
  } //getJobs-Begin


  if (action.type === _action.GET_JOBS_BEGIN) {
    return _objectSpread({}, state, {
      isLoading: true,
      showAlert: false
    });
  } //getJobs-success


  if (action.type === _action.GET_JOBS_SUCCESS) {
    return _objectSpread({}, state, {
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages
    });
  } //EditJobs


  if (action.type === _action.SET_EDIT_JOB) {
    var job = state.jobs.find(function (job) {
      return job._id === action.payload.id;
    });
    var company = job.company,
        position = job.position,
        status = job.status,
        jobType = job.jobType,
        jobLocation = job.jobLocation,
        _id = job._id;
    return _objectSpread({}, state, {
      isEditing: true,
      editJobId: _id,
      company: company,
      position: position,
      status: status,
      jobType: jobType,
      jobLocation: jobLocation
    });
  } //DeleteJob


  if (action.type === _action.DELETE_JOB_BEGIN) {
    return _objectSpread({}, state, {
      isLoading: true
    });
  } //editJob-Began


  if (action.type === _action.EDIT_JOB_BEGIN) {
    return _objectSpread({}, state, {
      isLoading: true
    });
  } //editJob-success


  if (action.type === _action.EDIT_JOB_SUCCESS) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: ' Job Updated...'
    });
  } //editJob-error


  if (action.type === _action.EDIT_JOB_ERROR) {
    return _objectSpread({}, state, {
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg
    });
  }

  throw new Error("no such action : ".concat(action.type));
};

var _default = reducer;
exports["default"] = _default;