import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './MovieDetail.css'
import { useLocation, useNavigate } from 'react-router-dom'

const MovieDetail = () => {
    const [card, setCard] = useState([])
    const [progress, setProgress] = useState(0)
    const param = useLocation()
    const navigate = useNavigate();


    useEffect(() => {
        const id = param.pathname.slice(7)
        axios.get(`https://www.omdbapi.com/?apikey=ea49aac1&i=${id}`)
            .then((response) => {
                const percentage = ((Number(response.data.imdbRating)) * 10) * 2
                setProgress(percentage)
                setCard(response.data)
            })
    }, [])

    const { Title, imdbRating, Poster, Genre, Released, Runtime, Language, Production, Actors, Plot, imdbVotes, imdbID } = card !== [] && card

    return (
        <div className='card-body'>
            {
                card !== [] && (<div>
                    <p className='card-title'>{Title}</p>

                    <div className='img-con' >
                       <div className='movie-details-container'>
                        <hr style={{ marginBottom: "20px"}}></hr>
                       <div className='movie-details'>
                           <div>
                            <img src={Poster} alt='poster_image' />
                                <div className='progres'>
                                    <div className='progress-text' style={{ width: `${progress}px`}}>
                                        Ratings: {imdbRating}
                                    </div>
                                    <div style={{ width: `${10 - progress}px` }}>
                                    </div>
                                </div>
                           </div>
                            <div style={{ marginLeft: '30px' }}>
                                <h2>{Title}</h2>
                                <h3>{Genre}</h3>
                                <h3> Released Data : {Released}</h3>
                                <h3>Movie Runtime : {Runtime}</h3>
                                <h3>Language : {Language}</h3>
                                <h3>Production : {Production}</h3>

                                <h4>Actores : {Actors}</h4>
                                <h4>
                                    Sory Line : {Plot}
                                </h4>
                            </div>
                        </div>
                       </div>
                    </div>
                    <div className='movie-votes'>
                        <div>
                            Imdb Votes : {imdbVotes}
                        </div>
                        <button className="web-btn" onClick={() => window.location.href = `https://www.imdb.com/title/${imdbID}/`}>
                            View In IMDB Websites
                        </button>
                    </div>
                    <div  style={{ textAlign: "center"}}>
                    <button className='srch-btn' onClick={() => navigate("/")}>Back To Search</button>
                    </div>
                </div>)

            }
        </div>
    )
}

export default MovieDetail