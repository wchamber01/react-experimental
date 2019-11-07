import React from 'react';

import css from '../../css/Poster.module.css';

export default function Poster(props) {
  return (
    <li className={css.container}>
      <img
        className={css.poster}
        src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
        alt={props.title}
      />
    </li>
  );
}
