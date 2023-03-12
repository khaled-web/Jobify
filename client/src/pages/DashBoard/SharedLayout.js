//..........
//importing
//..........
import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout.js'
import {Navbar, BigSidebar, SmallSideBar} from '../../components'


//..........
//App
//..........
const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSideBar/>
        <BigSidebar/>
        <div>
          <Navbar/>
          <div className="dashboard-page">
            <Outlet/>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}


//..........
//exporting
//..........
export default SharedLayout
