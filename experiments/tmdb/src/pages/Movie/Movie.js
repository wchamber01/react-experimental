import React from 'react';
import { useLocation } from 'react-router-dom';
import useSwr from 'swr';

import Backdrop from './Backdrop';
import Content from './Content';

import css from './Movie.module.css';

export default function Movie() {
  const { state } = useLocation();

  const {
    data
  } = useSwr(
    `https://api.themoviedb.org/3/movie/${state.movieId}?page=1&language=en-US`,
    { suspense: true }
  );

  return (
    <main style={{ margin: '0 auto', width: '95%' }}>
      <Backdrop backdropPath={data.backdrop_path} title={data.title} />
      <Content
        title={data.title}
        genres={data.genres}
        releaseDate={data.release_date}
        runtime={data.runtime}
        overview={data.overview}
      />
    </main>
  );
}
