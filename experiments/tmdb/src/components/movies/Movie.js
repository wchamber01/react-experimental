import React from 'react';
import useSwr from 'swr';

import css from '../../css/Movie.module.css';

export default function Movie(props) {
  const {
    data
  } = useSwr(
    `https://api.themoviedb.org/3/movie/${props.movieId}?page=1&language=en-US`,
    { suspense: true }
  );

  console.log('data =', data);

  return (
    <div className={css.container}>
      <img
        className={css.backdrop}
        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
        alt={data.title}
      />
      <h2>{data.title}</h2>
    </div>
  );
}
