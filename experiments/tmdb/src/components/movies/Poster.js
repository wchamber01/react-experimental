/**
 * react-router-dom's API does not currently support the
 * concurrent mode useTransition hook. It would be ideal to
 * show a transition state before switching to the Movie page.
 *
 * Here is an example of an experimental router that utilizes
 * the concurrent mode useTransition hook:
 *
 * https://github.com/relayjs/relay-examples/tree/master/issue-tracker/src/routing
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

import css from '../../css/Poster.module.css';

export default function Poster(props) {
  const navigate = useNavigate();

  function navigateToMoviePage() {
    navigate(`/${formatTitle(props.title)}`, {
      state: { movieId: props.movieId }
    });
  }

  function formatTitle(s) {
    const formattedTitle = s.toLowerCase().replace(/\W+/g, '-');

    // Some movie titles end in parentheses. For example,
    // Birds of Prey (And the Fantabulous Emancipation of One Harley Quinn)
    if (formattedTitle.charAt(formattedTitle.length - 1) === '-') {
      return formattedTitle.slice(0, -1);
    } else {
      return formattedTitle;
    }
  }

  return (
    <li>
      {props.posterPath ? (
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w342${props.posterPath}`}
          alt={props.title}
          onClick={navigateToMoviePage}
        />
      ) : (
        <div
          className={`${css.empty} ${css.poster}`}
          onClick={navigateToMoviePage}
        >
          <h4 className="highlight">
            {props.title} ({props.releaseYear})
          </h4>
        </div>
      )}
    </li>
  );
}
