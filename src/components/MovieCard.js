import React from 'react'
import '../style/MovieCard.css'
const MovieCard = (props) => {
  return (
    <main>
      <div class = "card">
        <img src={props.image} alt="" className='myImageCard'/>
        <div class="card-content">
          <h2>
            {props.title}
          </h2>
          <p>
            {props.disc} 
          </p>
          <a href="test" class="button">
            Play 
          </a>
        </div>
      </div>
      <div className='rate'>
        <img src="./images/star.png" alt="" width={"25px"} height={"25px"}/>
        <p>{props.rate}</p>
      </div>
    </main>
  )
}

export default MovieCard
