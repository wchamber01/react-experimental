import React from 'react';

import { months, convertToOrdinal } from '../../lib/calendar';

import css from './css/Info.module.css';

export default function ReleaseDate(props) {
  function releaseDateConversion(releaseDate) {
    const t = releaseDate.slice(0, 10);

    const year = t.slice(0, 4);
    const month = months[Number(t.slice(5, 7)) - 1];
    const day = convertToOrdinal(t.slice(-2));

    return `${month} ${day}, ${year}`;
  }

  return (
    <li className={css.info}>
      <span className={css.credits}>Release</span>
      {releaseDateConversion(props.releaseDate)}
    </li>
  );
}
