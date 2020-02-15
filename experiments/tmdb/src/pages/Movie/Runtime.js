import React, { useContext } from 'react';

import { MovieContext } from './MovieContext';

import css from './css/Info.module.css';

export default function Runtime() {
  const { movie } = useContext(MovieContext);

  function runtimeConversion(t) {
    const hours = Math.floor(t / 60);
    const minutes = t % 60;

    if (hours !== 0) {
      return `${hours} hr ${minutes} min`;
    } else {
      return `${minutes} min`;
    }
  }

  if ([0, null].includes(movie.runtime)) {
    return null;
  } else {
    return (
      <li className={css.info}>
        <span className={css.credits}>Runtime</span>
        {runtimeConversion(movie.runtime)}
      </li>
    );
  }
}
