import { useParams } from "react-router-dom";
import React from "react";
import { getMovieDetailsCast } from '../../components/api/api';

import { useEffect, useState } from "react";
import style from './coast.module.scss'

const Cast = () => {
    
    
    const {movieid} = useParams()

    const [cast, setCast] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const res = await getMovieDetailsCast(movieid);
          console.log(res.id);
          setCast(res);
       
        };
        fetchData().catch(error => console.log(error));
      }, [movieid]);

    return  <>
    <ul className={style.list}>
        {cast?.cast?.map(cast => {
            return(
                <li key={cast.id} className={style.item}>
                    <img src={``} alt="" />
                    <p>{cast.name}</p>
                    <p>{cast.character}</p>
                </li>
            )
        })}
    </ul>
    
    </>
}

export default Cast;