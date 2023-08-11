import { Link, Outlet, useParams } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../components/api/api';
const MovieDetails = () => {
  const { movieid } = useParams();

  const [movie, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMovieDetails(movieid);
      console.log(res);
      setMovies(res);
    };
    fetchData().catch(error => console.log(error));
  }, [movieid]);
  const score = Math.round(movie?.vote_average * 10);

  return (
    <>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
        <div>
          <h1>{movie?.original_title}</h1>
          <p>{`User score ${score}%`}</p>
          <p>{movie?.overview}</p>

          <ul>
            <span>Genres: </span>
            {movie && movie.genres && movie.genres.map(genre => {
              return <li key={genre.id}>{genre.name}</li>
            })}
          </ul>
        </div>
      </div>

      
      <ul>
        <li>
          <Link to="cast ">Cast</Link>
        </li>
        <li>
          <Link to="Reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
