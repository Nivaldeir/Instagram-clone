import React from 'react'
import { useNavigate } from 'react-router-dom';

import logoInstagram from '../Assets/imgs/instagram-logo.jpg'
import { MdExitToApp } from 'react-icons/md'
export default function HeaderNav() {

  const history = useNavigate();
  function logountHandler() {
    localStorage.clear()
    history('/')
  }


  return (
    <header>
      <nav>
        <img src={logoInstagram} alt='Logo do instagram' />
        <MdExitToApp size={25} onClick={logountHandler} />

      </nav>
    </header>
  )
}
