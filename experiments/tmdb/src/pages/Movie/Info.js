import React, { useRef, useContext } from 'react';
import useSwr from 'swr';

import { MovieContext } from './MovieContext';

import css from './Info.module.css';

export default function Info() {
  const { movie, movieId } = useContext(MovieContext);
  const castEl = useRef(null);

  const { data } = useSwr(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      suspense: true
    }
  );

  function checkClientHeight() {
    if (castEl.current !== null && castEl.current.clientHeight > 24) {
      return true;
    }

    return false;
  }

  function listGenres(genres) {
    let result = [];
    const len = genres.length < 3 ? genres.length : 3;

    for (let i = 0; i < len; i++) {
      result.push(genres[i].name);
    }

    return result.join(', ');
  }

  function runtimeConversion(t) {
    const hours = Math.floor(t / 60);
    const minutes = t % 60;

    return `${hours} hr ${minutes} min`;
  }

  function getCast(cast) {
    let result = '';

    const len = cast.length < 3 ? cast.length : 3;

    for (let i = 0; i < len; i++) {
      result += `${cast[i].name}, `;
    }

    return result.slice(0, result.length - 2);
  }

  function getDirector(crew) {
    const director = crew.find(member => member.department === 'Directing');

    return director.name;
  }
  return (
    <ul>
      <li className={css.info}>
        <span className={css.credits}>Director</span>
        {getDirector(data.crew)}
      </li>
      <li className={css.info} ref={castEl}>
        <span className={css.credits}>Starring</span>
        <span style={checkClientHeight() ? { lineHeight: `2rem` } : null}>
          {getCast(data.cast)}
        </span>
      </li>
      <li className={css.info}>
        <span className={css.credits}>Genres</span>
        {movie.genres.length > 0 && listGenres(movie.genres)}
      </li>
      <li className={css.info}>
        <span className={css.credits}>Release</span>
        {movie.release_date}
      </li>
      {movie.runtime !== 0 ? (
        <li className={css.info}>
          <span className={css.credits}>Runtime</span>
          {runtimeConversion(movie.runtime)}
        </li>
      ) : null}
    </ul>
  );
}
