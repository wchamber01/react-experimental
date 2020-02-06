import React from 'react';

import css from './Content.module.css';

export default function Content(props) {
  function listGenres(genres) {
    let result = '';
    const len = genres.length < 3 ? genres.length : 3;

    for (let i = 0; i < len; i++) {
      result += `${genres[i].name} · `;
    }

    return result;
  }

  function runtimeConversion(t) {
    const hours = Math.floor(t / 60);
    const minutes = t % 60;

    return ` · ${hours} hr ${minutes} min`;
  }

  return (
    <section className={css.content}>
      <h1 className={css.title}>
        <span className="highlight">{props.title}</span>
      </h1>
      <div className={css.info}>
        {props.genres.length > 0 && listGenres(props.genres)}
        {props.releaseDate.slice(0, 4)}
        {props.runtime !== 0 && runtimeConversion(props.runtime)}
      </div>
      <p>{props.overview}</p>
    </section>
  );
}
