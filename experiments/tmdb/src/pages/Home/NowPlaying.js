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

import { Carousel } from '../../components/Carousel';
import Poster from './Poster';

export default function NowPlaying() {
  const {
    data
  } = useSwr(
    'https://api.themoviedb.org/3/movie/now_playing?page=1&region=US&language=en-US',
    { suspense: true }
  );

  return (
    <>
      <h2>Now Playing</h2>
      <div className="description">Movies now playing in theaters.</div>
      <Carousel top={40}>
        {data.results.map(movie => (
          <Poster
            key={movie.id}
            movieId={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
      </Carousel>
    </>
  );
}
