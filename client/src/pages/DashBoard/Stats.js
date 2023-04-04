//.............
//importing
//.............
import React, {useEffect} from 'react'
import {UseAppContext} from '../../context/appContext.js'
import {StatusContainer, ChartContainer, Loading} from '../../components'

//.............
//App...
//.............
const Stats = () => {
  const {showStats, isLoading, monthlyApplications}=UseAppContext()
  useEffect(()=>{
    showStats()
  },[])

  if(isLoading){
    return <Loading center/>
  }

  return (
    <>
      < StatusContainer/>
      {monthlyApplications.length > 0 && <ChartContainer/>}
    </>
  )
}
//.............
//exporting
//.............
export default Stats
