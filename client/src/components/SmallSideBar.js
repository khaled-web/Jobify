//..........
//importing
//..........
import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar.js'
import {FaTimes} from 'react-icons/fa'
import { UseAppContext } from '../context/appContext.js'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'
import Logo from './Logo.js'
import NavLinks from './NavLinks.js'

//..........
//App
//..........
const SmallSideBar = () => {
  const {showSidebar, toggleSidebar}=UseAppContext()
  return (
    <Wrapper>
      <div className={showSidebar?"sidebar-container show-sidebar":"sidebar-container"}>
        <div className="content">
          {/* closeSidebar */}
          <button type='button' className="close-btn" onClick={toggleSidebar}>
            <FaTimes/>
          </button>
          <header>
            <Logo/>
          </header>
          {/* iterate the links */}
          <div className="nav-links">
            <NavLinks toggleSidebar={toggleSidebar}/>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

//..........
//exporting
//..........
export default SmallSideBar
