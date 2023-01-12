import React from 'react'
import './header.css';
import CTA from './CTA'
import profile from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';


// Person Object
const user = {
  name: 'Nev Ezekiel Verumun',
  // initials: `${this.name}`,
  occupation: 'Frontend Developer',
} 

// console.log(user.initials)

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>{user.name}</h1>
        <h5 className='text-light'>{user.occupation}</h5>
        <CTA/>
        <HeaderSocials/>
        {/* <HeaderSocials/> */}

        {/* Image */} 
        <div className="profile">
          {/* <img src={profile} alt="" /> */}
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        
      </div>
    </header>
  )
}

export default Header