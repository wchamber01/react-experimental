import React from 'react';
import { Link } from '@reach/router';
import { mutate } from 'swr';

import fetch from '../../lib/fetch';

import css from '../../css/Poster.module.css';

export default function Poster(props) {
  const formatted_title = props.title.toLowerCase().replace(/\s/g, '-');

  function handleMouseEnter() {}

  function handleMouseLeave() {}

  async function prefetch() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${props.id}?page=1&language=en-US`
    );
    mutate(
      `https://api.themoviedb.org/3/movie/${props.id}?page=1&language=en-US`,
      data,
      false
    );
  }

  return (
    <li
      className={css.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/${formatted_title}/${props.id}`}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w342${props.posterPath}`}
          alt={props.title}
        />
      </Link>
    </li>
  );
}
