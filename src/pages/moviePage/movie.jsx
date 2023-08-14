import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getmovieFilm } from '../../components/api/api';
import style from './movie.module.scss';
const Movie = () => {
  

  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  const movieid = searchParams.get('movieid');

  console.log(movieid);

  

  

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
        return;
       
      }

      
    };
   
    fetchData().catch(error => console.log(error));
  }, []);

  const filterMovie = movies.filter(m => m.title.includes(movieid));
 

const handleInputChange = e => {
  setSearchParams({ movieid: e.target.value })
  console.log(searchParams, 'movieid', e.target.value);
 
}
  
  return (
    <>
      
      <input
        className={style.input}
        type="text"
        value={movieid || ''}
        onChange={handleInputChange}
      />
      <button 
      type="button" 
      className={style.btn}
      onClick={() => setSearchParams({ movieid })}>
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
