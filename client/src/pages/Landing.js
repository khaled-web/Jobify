import React from 'react'
import Logo from '../components/Logo'
import main from '../assets/images/SearchJobs.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Link} from 'react-router-dom'


const Landing = () => {
  return (
    <Wrapper>
     <nav>
      <Logo/>
     </nav>
     <div className="container page">
      {/* info */}
      <div className='info'>
       <h1>
        job <span>tracking</span> app
       </h1>
       <p>
       I'm baby vibecession wolf lumbersexual, next level stumptown JOMO dreamcatcher synth tote bag. Bodega boys messenger bag microdosing you probably haven't heard of them XOXO 8-bit mlkshk, tattooed selvage 90's cloud bread put a bird on it. Gatekeep listicle marfa enamel pin. 
       </p>
      <Link to = '/register' className = 'btn btn-hero' >
        login/Register
      </Link>
      </div>
      <img src={main} alt="job hunt" className='img main-img'/>
     </div>
    </Wrapper>
  )
}

//export-LandingPag
export default Landing



