import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from './layout/layout'


export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}/>
      <Route path="/movies" element={<div>колекция</div>}/>
      <Route path="/movies/:movieid" element={<div>Элемент колекции</div>}/>
    </Routes>
    
    </>
  );
};
