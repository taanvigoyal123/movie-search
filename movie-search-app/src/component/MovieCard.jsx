import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MovieCard.css'

const MovieCard = ({title, poster, details}) => {
   const navigate =  useNavigate()
    const showDetails = () =>{ 
        navigate(`movie/${details.imdbID}`)
        console.log(details)
    }
  return (
    <div className='movie-card'>
        <img className='mov-poster' src={poster} />
        <p className='mov-title'>{title}</p>
        <button className='btn-more' onClick={showDetails}>
            View More
        </button>
    </div>
  )
}

export default MovieCard