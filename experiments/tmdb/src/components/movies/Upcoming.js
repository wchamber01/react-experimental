import React from 'react';
import useSwr from 'swr';

import Carousel from '../Carousel';
import Poster from './Poster';

export default function Upcoming() {
  const {
    data
  } = useSwr(
    'https://api.themoviedb.org/3/movie/upcoming?region=US&language=en-US',
    { suspense: true }
  );

  return (
    <>
      <h2>
        <span className="highlight">Upcoming</span>
      </h2>
      <Carousel>
        {data.results.map(movie => (
          <Poster
            key={movie.id}
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        ))}
      </Carousel>
    </>
  );
}
