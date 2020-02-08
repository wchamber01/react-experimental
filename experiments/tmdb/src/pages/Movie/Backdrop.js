import React, { useContext } from 'react';

import { MovieContext } from './MovieContext';

import css from './Backdrop.module.css';

export default function Backdrop() {
  const { movie } = useContext(MovieContext);

  return (
    <section className={css.backdrop}>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
    </section>
  );
}
