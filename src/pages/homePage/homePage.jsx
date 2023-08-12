import React from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';
import { useEffect, useState} from 'react';
import { getmovieFilm } from '../../components/api/api';

const Home = () => {

const [movies, setMovies] = useState([]);
const location = useLocation()

const {movieid} = useParams()

useEffect(() => {
    const fetchData = async () => {
      const res = await getmovieFilm(movieid);
      console.log(res.results);
      setMovies(res.results);
   
    };
    fetchData().catch(error => console.log(error));
  }, [movieid]);


    return (
        <>
        <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
        </>
    )
}

export default Home;

