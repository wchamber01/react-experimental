import React, { useContext } from 'react';
import useSwr from 'swr';

import { Carousel } from '../../components/Carousel';
import { MovieContext } from './MovieContext';

import css from './css/Videos.module.css';

export default function Videos() {
  const { movieId } = useContext(MovieContext);

  const { data: videos } = useSwr(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?&language=en-US`,
    {
      suspense: true
    }
  );

  if (videos.results.length > 0) {
    return (
      <section className={css.clips}>
        <h3>Videos</h3>
        <Carousel top={28}>
          {videos.results.map(result => (
            <li key={result.id}>
              <img
                className={css.thumbnail}
                src={`https://img.youtube.com/vi/${result.key}/hqdefault.jpg`}
                alt={`${result.name} — ${result.type}`}
              />
              <div className={css.caption}>{result.name}</div>
            </li>
          ))}
        </Carousel>
      </section>
    );
  } else {
    return <div className={css.placeholder}></div>;
  }
}
