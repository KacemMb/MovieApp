import React,{useState} from 'react'
import Navbar from './pages/Navbar'
import './style/App.css'
import MovieList from './components/MovieList'
import movieData from './data/MovieData.json'
function App() {
  const [myData,setMainData] = useState(movieData)
  const [newMovieA, setnewMovieA] = useState(null);
  const onNewMovieA=(movieData)=>{
    setnewMovieA(movieData);
    setMainData([...myData,newMovieA])
    console.log(myData)
  }
  var numberOfMovies = myData.length
  return (
    <div className='App'>
      <Navbar numberOfMovies = {numberOfMovies} onNewMovieA = {onNewMovieA} />
      <MovieList myData={myData}/>
    </div>
  )
}

export default App
