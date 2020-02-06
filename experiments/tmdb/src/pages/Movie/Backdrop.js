import React from 'react';

import css from './Backdrop.module.css';

export default function Backdrop(props) {
  return (
    <section className={css.backdrop}>
      <img
        src={`https://image.tmdb.org/t/p/original${props.backdropPath}`}
        alt={props.title}
      />
    </section>
  );
}
