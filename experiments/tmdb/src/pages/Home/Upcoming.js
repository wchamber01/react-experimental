import React from 'react';
import useSwr from 'swr';

import { Carousel } from '../../components/Carousel';
import Poster from './Poster';

export default function Upcoming() {
  const {
    data
  } = useSwr(
    'https://api.themoviedb.org/3/movie/upcoming?page=1&region=US&language=en-US',
    { suspense: true }
  );

  return (
    <>
      <h2>Upcoming</h2>
      <div className="description">Movies coming soon to theaters.</div>
      <Carousel top={40}>
        {data.results.map(movie => (
          <Poster
            key={movie.id}
            movieId={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
            releaseYear={movie.release_date.slice(0, 4)}
          />
        ))}
      </Carousel>
    </>
  );
}
