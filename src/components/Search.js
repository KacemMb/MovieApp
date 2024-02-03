import React ,{useState}from 'react'
import '../style/Search.css'
function Search() {
  const [name, setname] = useState('');

  const handelSearchChange = (e) =>{
    setname(e.target.value)
  }
  console.log(name)
  return (
    <div className='search'>
      <input type="text"  placeholder ='Search...' onChange={handelSearchChange}/>
      <button className='searchBtn' ><img src="./images/search.svg" alt=""/></button>
    </div>
  )
}

export default Search
