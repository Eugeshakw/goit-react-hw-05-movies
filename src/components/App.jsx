import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from './layout/layout'
import Home from "pages/homePage/homePage";
import Movie from "pages/moviePage/movie";
import MovieDetails from "pages/movieDetails/movieDetails";
import Cast from "./cast/cast";
import Reviews from "./reviews/reviews"
export const App = () => {
  return (
    <>
    
    
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      
      <Route path="movies" element={<Movie/>}/>
      <Route path="movies/:movieid" element={<MovieDetails />}>
        <Route path="cast" element={<Cast/>}/>
        <Route path="Reviews" element={<Reviews/>}/>
        </Route>
      </Route>
      
    </Routes>
    
    </>
  );
};
