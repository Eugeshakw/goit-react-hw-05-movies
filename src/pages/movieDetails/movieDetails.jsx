import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../components/api/api';
import style from './details.module.scss'
const MovieDetails = () => {
  const location = useLocation();
  const cameBack = location?.state?.from ?? '/'
  
  const { movieid } = useParams();
  

  const [movie, setMovies] = useState([] ?? null);
  console.log(movie);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovieDetails(movieid);
      console.log(res.results);
      setMovies(res);
      
    };
   
    
    fetchData().catch(() => {
      
    })
  }, [movieid]);
  const score = Math.round(movie?.vote_average * 10);

  // if (movie === null) {
  //   return 
  // }
  return (
    <>
    <Link to={cameBack}>Back</Link>
      <div className={style.container}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" width='300px'/>
        <div className={style.tittle}>
          <h1>{movie?.original_title}</h1>
          <p>{`User score ${score}%`}</p>
          <p>{movie?.overview}</p>

          <ul>
            <span>Genres: </span>
            {movie && movie.genres && movie.genres.map(genre => {
              return <li key={genre.id} className={style.list}>{genre.name}</li>
            })}
          </ul>
        </div>
      </div>

      
      <ul className={style.listcoastandrevie}>
        <li className={style.listlink}>
          
          <Link to="cast" className={style.link} state={{from: cameBack}}>Cast</Link>
        </li>
        <li className={style.listlink}>
          <Link to="Reviews" className={style.link} state={{from: cameBack}}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
