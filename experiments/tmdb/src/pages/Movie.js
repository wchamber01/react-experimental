import React from 'react';
import { useParams, Route } from 'react-router-dom';
import useSwr from 'swr';

import css from '../css/Movie.module.css';

function Movie() {
  const { movieId } = useParams();

  const {
    data
  } = useSwr(
    `https://api.themoviedb.org/3/movie/${movieId}?page=1&language=en-US`,
    { suspense: true }
  );

  return (
    <div className={css.container}>
      <img
        className={css.backdrop}
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt={data.title}
      />
      <h2>
        <span className="highlight">{data.title}</span>
      </h2>
      <p>{data.overview}</p>
    </div>
  );
}

/**
 * Necessary in order to have nested route
 * props working with react-router-dom.
 */
export default function MovieRoute() {
  const { movieTitle } = useParams();

  return (
    <Route path={`/${movieTitle}/:movieId`}>
      <Movie />
    </Route>
  );
}
