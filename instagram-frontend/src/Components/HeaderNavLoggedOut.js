import React from 'react'
import logoInstagram from '../Assets/imgs/instagram-logo.jpg'


export default function HeaderNavLoggedOut() {
  return (
    <header>
    <nav className='nav-logged-out'>
      <img src={logoInstagram} alt='Logo do instagram' />
    </nav>
  </header>
  )
}
