/**
 * Upon investigating the waterfall, I believe this is not the render-as-you-fetch approach!
 *
 * We are also making another two passes to the API, hence the "waterfall effect":
 *
 * 1. Fetch Now Playing movies from API
 * 2. Fetch poster images from the data we recieved from step 1
 */

import React from 'react';
import useSwr from 'swr';

import Poster from './Poster';

import css from '../../css/NowPlaying.module.css';

export default function NowPlaying() {
  const {
    data
  } = useSwr(
    'https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US',
    { suspense: true }
  );

  // const element = document.getElement;

  return (
    <>
      <h2>
        <span className="highlight">Now Playing</span>
      </h2>
      <ul id="now_playing" className={css.container}>
        {data.results.map(movie => (
          <Poster
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
      </ul>
    </>
  );
}
