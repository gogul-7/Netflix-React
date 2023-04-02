import React,{useEffect,useState} from 'react'
import instance from '../instances'
import requests from '../requests'
import  './Banner.css'

function Banner() {

    const [movies,setMovie]=useState([])

    async function fetchMovie(){
        const request = await instance.get(requests.fetchNetflixOriginals)
        setMovie(request.data.results[
            Math.floor(Math.random()*request.data.results.length-1)
        ]);
      }

      console.log(movies);
useEffect(()=>{
    fetchMovie()
},[])


  return (
    <>
        <header
            className='topBanner'
            style={{
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`
            }}>
                <div className='movie_content'>
                    <p className='movie_title'>{movies.name}</p>
                    <p className='movie_desc'>{movies.overview}</p>
                </div>
        </header>
        
    </>
  )
}

export default Banner