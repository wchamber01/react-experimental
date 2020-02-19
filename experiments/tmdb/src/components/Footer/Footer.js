import React from 'react';

import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer>
      <div className={css.copyright}>
        <a
          className={css.link}
          href="https://letterboxd.com/about/film-data/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Film data
        </a>{' '}
        from{' '}
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TMDb
        </a>
        .
      </div>
    </footer>
  );
}
