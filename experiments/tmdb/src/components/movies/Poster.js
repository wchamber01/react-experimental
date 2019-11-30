import React from 'react';
import { Link } from '@reach/router';

import css from '../../css/Poster.module.css';

export default function Poster(props) {
  const formatted_title = props.title.toLowerCase().replace(/\s/g, '-');

  return (
    <li className={css.container}>
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
