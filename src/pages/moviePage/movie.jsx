import { useEffect, useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { getMovieName } from '../../components/api/api';
import style from './movie.module.scss';
const Movie = () => {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');
  console.log(query);

  const updateQeryString = query => {
  const nextParams = query !== '' ? {query} : {};
  setSearchParams(nextParams)
  }

  const handleInputChange = e => {
      const newValue = e.target.value;
      updateQeryString(newValue)
    };


    useEffect(() => {
        const fetchData = async () => {
          const res = await getMovieName(query);
          console.log(res);
          setMovies(res.results);
         
    
        };
    
        fetchData().catch(error => console.log(error));
      }, [query]);


  return (
    <>
      <input
        className={style.input}
        type="text"
        value={query || ''}
        onChange={handleInputChange}
      />
      <button
        type="button"
        className={style.btn}
        onClick={() => setSearchParams({ query })}
      >
        search
      </button>
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location, movies }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movie;
