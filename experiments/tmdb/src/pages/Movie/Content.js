import React, { useContext } from 'react';

import Info from './Info';

import { MovieContext } from './MovieContext';

import css from './Content.module.css';

export default function Content() {
  const { movie } = useContext(MovieContext);

  return (
    <section className={css.content}>
      <h1 className={css.title}>{movie.title}</h1>
      <Info />
      <div className={css.overview}>
        {movie.tagline.length > 0 && (
          <div className={css.tagline}>{movie.tagline}</div>
        )}
        <p>{movie.overview}</p>
      </div>
    </section>
  );
}
