import React from 'react'
import Logo from '../components/Logo'
import Search from '../components/Search'
import '../style/Navbar.css'
import Filtre from '../components/Filtre'
import AddFilm from '../components/AddFilm'

function Navbar() {
  return (
    <div className='Navbar'>
      <Logo/>
      <div className='NavbarRight'>
        <AddFilm/>
        <Filtre/>
        <Search/>
        
      </div>
    </div>
  )
}

export default Navbar
