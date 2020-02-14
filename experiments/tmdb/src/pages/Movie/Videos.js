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

  function generateCaption(type, name) {
    const caption = name.match(/Trailer\s\d/g);

    return caption ? caption[0] : type;
  }

  if (videos.results.length > 0) {
    return (
      <section className={css.clips}>
        <h3>Videos</h3>
        <Carousel top={48.25}>
          {videos.results.map(result => (
            <li key={result.id}>
              <a
                href={`https://www.youtube.com/watch?v=${result.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={css.thumbnail}
                  style={{
                    backgroundImage: `url(https://img.youtube.com/vi/${result.key}/hqdefault.jpg)`
                  }}
                ></div>
              </a>
              <div className={css.caption}>
                {generateCaption(result.type, result.name)}
              </div>
            </li>
          ))}
        </Carousel>
      </section>
    );
  } else {
    return <div className={css.placeholder}></div>;
  }
}
