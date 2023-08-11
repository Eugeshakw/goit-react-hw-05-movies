import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getmovieFilm } from '../../components/api/api';
import style from './movie.module.scss'
const Movie = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const movieid = searchParams.get('movieid');
    // console.log(movieid);
//   console.log(searchParams);

  const [movies, setMovies] = useState([]);
//   console.log(movies);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getmovieFilm();
    //   console.log(res.results);
      setMovies(res.results);
   
    };
    fetchData().catch(error => console.log(error));
  }, []);

  const filterMovie = movies.filter(m => m.title.includes(movieid))



  return (
    <>
      <input
        className={style.input}
        type="text"
        value={movieid || ''}
        onChange={evt => setSearchParams({ movieid: evt.target.value })}
        
      />
      <button type="button" className={style.btn}>search</button>
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
