import React,{useEffect,useState} from 'react'
import instance from '../instances'
import './Row.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Row({title,fetchUrl,isLargeRow}) {

    const [movies,setMovie]=useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";


    async function fetchMovie(){
      const request = await instance.get(fetchUrl)
      setMovie(request.data.results);
    }
    console.log(movies);
useEffect(()=>{
    fetchMovie()
},[])

  return (
    <div className='row'>
        <h3>{title}</h3>
              
                 <div className={`row_movie ${isLargeRow&&"row_movie_large"}`}>
                    {
                        movies.map((movie)=>(
                            <img className={`movie_poster ${isLargeRow&&"movie_poster_large"}`} src={`${base_url}${isLargeRow?movie.poster_path:movie.backdrop_path}`}/>
                        ))
                    }
                 </div >
    </div>
  )
}

export default Row