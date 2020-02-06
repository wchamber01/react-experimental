import React from 'react';

import back from '../../lib/arrow-left-bold.svg';

import css from './Backdrop.module.css';

export default function Backdrop(props) {
  return (
    <section className={css.backdrop}>
      <img src={back} alt="go back to Home page" />
      <img
        src={`https://image.tmdb.org/t/p/original${props.backdropPath}`}
        alt={props.title}
      />
    </section>
  );
}
