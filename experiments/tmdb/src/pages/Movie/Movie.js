import React from 'react';
import { useLocation } from 'react-router-dom';
import useSwr from 'swr';

import Backdrop from './Backdrop';
import Content from './Content';

import { MovieContext } from './MovieContext';

export default function Movie() {
  const { state } = useLocation();

  const {
    data
  } = useSwr(
    `https://api.themoviedb.org/3/movie/${state.movieId}?page=1&language=en-US`,
    { suspense: true }
  );

  return (
    <MovieContext.Provider value={{ movie: data, movieId: state.movieId }}>
      <main style={{ margin: '0 auto', width: '95%' }}>
        <Backdrop />
        <Content />
      </main>
    </MovieContext.Provider>
  );
}
