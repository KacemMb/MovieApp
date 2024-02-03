import React,  {useState} from 'react'
import Logo from '../components/Logo'
import Search from '../components/Search'
import '../style/Navbar.css'
import Filtre from '../components/Filtre'
import AddFilm from '../components/AddFilm'

function Navbar({numberOfMovies,onNewMovieA}) {

  const [newMovie, setNewMovie] = useState(null);
  const handleNewMovie = (movieData) => {
    setNewMovie(movieData);
    onNewMovieA(newMovie)
  };
  return (
    <div className='Navbar'>
      <Logo/>
      <div className='NavbarRight'>
        <AddFilm idNewFilm = {parseInt(numberOfMovies) + 1} onNewMovie={handleNewMovie}/>
        <Filtre/>
        <Search/>
      </div>
    </div>
  )
}

export default Navbar
