import React, {useState} from 'react'
import MovieCard from './MovieCard';
import '../style/MovieList.css'
const MovieList = ({myData}) => {
    const [Data, setData] = useState(myData);
    return (
      <div className='CardList'>
        {Data.map(item=>(
          <div key={item.id}>
              <MovieCard image={item.image} title={item.title} disc = {item.description} rate = {item.rating} />
          </div>
    
        ))}
        </div>
)}

export default MovieList
