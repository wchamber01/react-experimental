import React from 'react';
import useSwr from 'swr';

import Poster from './Poster';

import css from '../../css/NowPlaying.module.css';

export default function PopularMoviesList() {
  const { data } = useSwr(
    'https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US',
    { suspense: true }
  );

  return (
    <ul className={css.container}>
      {data.results.map(movie => (
        <Poster
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
        />
      ))}
    </ul>
  );
}
