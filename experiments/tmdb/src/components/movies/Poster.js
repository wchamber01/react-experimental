import React from 'react';
import { Link } from 'react-router-dom';

import css from '../../css/Poster.module.css';

export default function Poster(props) {
  function formatTitle(s) {
    const formattedTitle = s.toLowerCase().replace(/\W+/g, '-');

    // Some movie titles end in parentheses. For example,
    // Birds of Prey (And the Fantabulous Emancipation of One Harley Quinn)
    if (formattedTitle.charAt(formattedTitle - 1) === '-') {
      return formattedTitle.slice(0, -1);
    } else {
      return formattedTitle;
    }
  }

  return (
    <li className={css.container}>
      <Link to={`/${formatTitle(props.title)}/${props.id}`}>
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w342${props.posterPath}`}
          alt={props.title}
        />
      </Link>
    </li>
  );
}
