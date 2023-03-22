import React from 'react'
import Wrapper from '../assets/wrappers/BigSidebar.js'
import { UseAppContext } from '../context/appContext.js'
import NavLinks from './NavLinks.js'
import Logo from './Logo.js'

const BigSidebar = () => {
  const {showSidebar, toggleSidebar}=UseAppContext()
  return (
    <Wrapper>
      <div className={showSidebar?"sidebar-container":"sidebar-container show-sidebar"}>
        <div className="content">
          <header>
            <Logo/>
          </header>
          <NavLinks toggleSidebar={toggleSidebar}/>
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
