import {
 CLEAR_ALERT,
 DISPLAY_ALERT
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
 throw new Error(`no such action : ${action.type}`)
}

export default reducer;