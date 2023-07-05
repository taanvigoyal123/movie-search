import React, { useState } from "react";
import axios from "axios";
import MovieCard from "./component/MovieCard";
import './App.css'

function App() {
  const [movie, setmovie] = useState([])
  const [mName, setMName] = useState('')
  const [isError, setIsError] = useState(false)


  const fetchMovie = () => {
    axios.get(` https://www.omdbapi.com/?apikey=ea49aac1&s=${mName}&page=2`)
      .then((response) => {
        console.log(response)

        if (response.data.Response == 'False') {
          alert('No Data Found')
          setIsError(true)
        } else {
          setIsError(false)
          setmovie(response.data.Search)
        }
      })


  }

  const searchMovies = (e) => {
    setMName(e.target.value)
  }
  return (
    <div className='main-body' >
      <div>

        <div className="search-container">

          <h2 className='search-title'>Search Movie Name</h2>
          <div className='search-body' >
           <div className="search-subbody">
           <div>
              <input className='text-input' onChange={searchMovies} type='input' placeholder="Search Movie here..." />
            </div>
          <div>
            <button className='srch-btn' onClick={fetchMovie}>Search</button>
          </div>
           </div>
          </div>
        </div>

        <div style={{marginTop:'100px'}} className="movies-container">

          {
            !isError && movie?.map((value, index) => {
              return (
                <div style={{width:'20%'}}>
                <MovieCard key={index} title={value.Title} details={value} poster={value.Poster} />
                </div>
              )
            })
          }
        </div>
      </div>
          {isError && (
            <div  className="error-block">
            <div className="erro-heading">
            <h2>Sorry No Movie Found!!</h2>
            </div>
            <div className="error-message">
            <p>Try to search with another keyword!</p>
            <p>You have not typed movie name</p>
            </div>
          </div>
          )}
    </div>
  )
}

export default App;
