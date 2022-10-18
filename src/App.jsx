import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from "./components/headers/Header";
import Nav from "./components/headers/Nav";

import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

const App = () => { 

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='bg-gradient-to-r from-indigo-500 '>
          <Routes>
            <Route path="/" exact element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <Nav />
      </BrowserRouter>
    </>
  )
}

export default App;