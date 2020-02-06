import React from 'react';
import { useLocation } from 'react-router-dom';
import useSwr from 'swr';

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
    <div className={css.container}>
      <div className={css.backdrop}>
        <img
          src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
          alt={data.title}
        />
        <h1 className={css.title}>
          <span className="highlight">{data.title}</span>
        </h1>
      </div>
      <p>{data.overview}</p>
    </div>
  );
}
