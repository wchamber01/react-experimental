import React, { useContext, useEffect, useState } from 'react';
import useSwr from 'swr';

import CrewCastGenre from './CrewCastGenre';
import ReleaseDate from './ReleaseDate';
import Runtime from './Runtime';

import { MovieContext } from './MovieContext';

import css from './css/Info.module.css';

export default function Info() {
  const [releaseDate, setReleaseDate] = useState('');
  const [certification, setCertfication] = useState('');

  const { movieId } = useContext(MovieContext);
  const imgSrc = require(`../../lib/RATED_${certification}.svg`);

  const { data: releases } = useSwr(
    `https://api.themoviedb.org/3/movie/${movieId}/release_dates`,
    {
      suspense: true
    }
  );

  useEffect(() => {
    function findRelease() {
      const { release_dates } = releases.results.find(
        date => date.iso_3166_1 === 'US'
      );
      const official_release = release_dates.find(date =>
        ['', 'North American release', 'New York and Los Angeles'].includes(
          date.note
        )
      );

      setReleaseDate(official_release.release_date);
      setCertfication(official_release.certification);
    }

    findRelease();
  }, [releases.results]);

  return (
    <ul className={css.list}>
      <CrewCastGenre />
      <li className={css.info}>
        <span className={css.credits}>Rated</span>
        {certification.length > 0 ? (
          <img
            className={css.certification}
            src={imgSrc}
            alt={`${certification} rating`}
          />
        ) : (
          'Not Rated'
        )}
      </li>
      <ReleaseDate releaseDate={releaseDate} />
      <Runtime />
    </ul>
  );
}
