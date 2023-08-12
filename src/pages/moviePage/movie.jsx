import { useEffect, useState } from 'react';
import { Link, Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { getmovieFilm } from '../../components/api/api';
import style from './movie.module.scss';
const Movie = () => {
  

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);
  const movieid = searchParams.get('movieid');
  console.log(movieid);

  //   console.log(searchParams);

  const [movies, setMovies] = useState([]);
    console.log(movies);
 
  useEffect(() => {

    const fetchData = async () => {
      const res = await getmovieFilm();
      //   console.log(res.results);
      if (movieid !== '') {
        setMovies(res.results);
        
      } 
      
      else {
        setMovies([]);
      }

      
    };
   
    fetchData().catch(error => console.log(error));
  }, [searchParams]);

  const filterMovie = movies.filter(m => m.title.includes(movieid));
  const location = useLocation()
  const cameback = location.state?.from?? '/'
  return (
    <>
      <Link state={cameback}>Back</Link>
      <input
        className={style.input}
        type="text"
        value={movieid || ''}
        onChange={evt => setSearchParams({ movieid: evt.target.value })}
      />
      <button type="button" className={style.btn}>
        search
      </button>
      <ul>
        {filterMovie.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movie;
