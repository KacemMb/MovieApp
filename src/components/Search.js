import React from 'react'
import '../style/Search.css'
function Search() {
  return (
    <div className='search'>
      <input type="text"  placeholder ='Search...' />
      <button className='searchBtn'><img src="./images/search.svg" alt=""/></button>
    </div>
  )
}

export default Search
