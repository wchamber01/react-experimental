import React, { useContext } from 'react';
import useSwr from 'swr';

import { MovieContext } from './MovieContext';
import { months, convertToOrdinal } from '../../lib/calendar';

import css from './Info.module.css';

export default function ReleaseDate() {
  const { movieId } = useContext(MovieContext);

  const { data: releases } = useSwr(
    `https://api.themoviedb.org/3/movie/${movieId}/release_dates`,
    {
      suspense: true
    }
  );

  function releaseDateConversion(dates) {
    const { release_dates } = dates.find(date => date.iso_3166_1 === 'US');
    const official_release = release_dates.find(date =>
      ['', 'North American release'].includes(date.note)
    );

    const t = official_release.release_date.slice(0, 10);

    const year = t.slice(0, 4);
    const month = months[Number(t.slice(5, 7)) - 1];
    const day = convertToOrdinal(t.slice(-2));

    return `${month} ${day}, ${year}`;
  }

  return (
    <li className={css.info}>
      <span className={css.credits}>Release</span>
      {releaseDateConversion(releases.results)}
    </li>
  );
}
