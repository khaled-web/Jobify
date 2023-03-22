import React from 'react'
import moment from 'moment'
//.............
//importing
//.............
const Job = ({company,createdAt}) => {
 let date = moment(createdAt)
 date = date.format('MMM Do, YYYY')
 //.............
//App
//.............
  return (
   <div>
    <h5>{company}</h5>
    <h5>{date}</h5>
   </div>
  )
}
//.............
//exporting
//.............
export default Job
